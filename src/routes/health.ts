import { Router } from 'express';
const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.send({ status: 'Up' });
});

export { healthRouter };
