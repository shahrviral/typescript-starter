import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { logger } from './lib/logger';
import { healthRouter, apiRouter } from './routes';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(helmet());

app.use('/health', healthRouter);
app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(PORT, () => {
  logger.info(`App is running at http://localhost:${PORT}`);
});
