import '@testing-library/jest-dom/extend-expect';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env.test') });
