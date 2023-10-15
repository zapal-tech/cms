import payload from 'payload';

import express from 'express';
import path from 'path';

import { readFile } from 'fs/promises';

require('dotenv').config();

const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.get('/favicon.ico', async (_, res) => {
  const favicon = await readFile(path.resolve(__dirname, 'favicon.ico'));

  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Content-Type', 'image/x-icon');
  res.send(favicon);
});

app.get('/og-image.webp', async (_, res) => {
  const ogImage = await readFile(path.resolve(__dirname, 'og-image.webp'));

  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Content-Type', 'image/x-icon');
  res.send(ogImage);
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(process.env.PORT || 3000);
};

start();
