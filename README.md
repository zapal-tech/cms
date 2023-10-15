# Zapal's website CMS

[![](/github-banner.jpg)](https://www.zapal.tech)

Welcome to the Zapal website repository! Zapal's front website is more than just a digital presence; it's a reflection
of our unique style, core team, vision, mission, and the high-quality services we provide. This repository contains all
the code and assets used to build and maintain front-end part of our website.

## 🚀 Live website

[Zapal | Unlock Your Tech Future](https://www.zapal.tech)

## 🛠️ Getting started

1. Set own environment variables (from example file `.env.example`) in `.env` file
2. Run the development server with `npm i && npm run dev` (or `docker-compose up`, see [Docker](#%F0%9F%90%B3%20Docker))
3. Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser to see the result.
4. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.

### 🐳 Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this project locally. To do so, follow these
steps:

1. Follow [step 1 from above](#%F0%9F%9B%A0%EF%B8%8F%20Getting%20started), the docker-compose file will automatically
   use the `.env` file in your project root
2. Next run `docker-compose up`
3. Follow [steps 3 and 4 from above](#%F0%9F%9B%A0%EF%B8%8F%20Getting%20started) to login and create your first admin
   user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development
environment across your teams.

## 💻 Built with

Technologies used in the project:

- Payload CMS
- Express
- Next.js
- React
- Axios
- Slugify
- ua-en-translit
- Some love ❤️ and a little bit of magic ✨

## 🛡️ License

This project is licensed under the [MIT License](/LICENSE)

## ⭐ Like what we're doing? Give us a star
