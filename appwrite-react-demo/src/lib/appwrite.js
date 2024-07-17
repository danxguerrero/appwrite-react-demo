import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66973dd2001d4d79882b'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
