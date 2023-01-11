import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_SANITY_URL,
  documents: 'lib/graphql/**/*.ts',
  generates: {
    'typing/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
