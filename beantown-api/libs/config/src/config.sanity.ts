import { ClientConfig } from '@sanity/client';

export type SanityConfig = {
  clientConfig: ClientConfig;
  sanityWebhookSecret: string;
};

export const sanityConfig: () => SanityConfig = () => ({
  clientConfig: {
    projectId: process.env.SANITY_PROJECT_ID || '<your-project-id>',
    dataset: process.env.SANITY_DATASET || '<your-dataset>',
    // if you want to use the token to make authenticated requests
    token: process.env.SANITY_AUTH_TOKEN || '<your-token>',
    apiVersion: process.env.SANITY_API_VERSION || '2021-10-21',
    useCdn: false, // `false` if you want to ensure fresh data
  },
  sanityWebhookSecret: process.env.SANITY_WEBHOOK_SECRET || '',
});
