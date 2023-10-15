import type { ContactFormLead } from 'payload/generated-types';
import type { CollectionAfterOperationHook, TypeWithID } from 'payload/types';

import axios from 'axios';

export const contactFormLeadNotification: CollectionAfterOperationHook = async ({ result, operation }) => {
  if (operation === 'create') {
    try {
      const { firstName, lastName, email, company, message } = result as TypeWithID & Omit<ContactFormLead, 'id'>;

      const name = `${firstName ? `${firstName} ` : ''}${lastName}`;

      const MAX_MESSAGE_LENGTH = 4096;

      const shortenedMessage = message.substring(0, MAX_MESSAGE_LENGTH);
      const isMessageShortened = message.length > MAX_MESSAGE_LENGTH;

      const text = `Hi, Zapal!\n\n${name} from ${company} sent you a message:\n${shortenedMessage}${
        isMessageShortened ? '...' : ''
      }\n\nYou can reply to ${email}`;

      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      });
    } catch (error) {
      console.log('Error sending Telegram notification, however contact was created.');
      console.error(error);
    }
  }

  return result;
};
