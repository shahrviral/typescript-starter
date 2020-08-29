import { Router, json, Request, Response } from 'express';

import morgan from 'morgan';
import {
  validate,
  validateNumberInPath,
  validateNumberInQuery,
  validateStringInQuery,
  validateStringInPath,
} from '../lib/validator';
const apiRouter = Router();

apiRouter.use(
  morgan(
    '[:date[web]] [:method :status] :url | :response-time ms - :res[content-length] kb'
  )
);
apiRouter.use(json());

apiRouter.get(
  '/:id',
  [validateNumberInPath('id')],
  validate,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    res.send({ id });
  }
);

apiRouter.get(
  '/',
  [validateNumberInQuery('id'), validateStringInQuery('name')],
  validate,
  async (req: Request, res: Response) => {
    const id = Number(req.query.id);
    const name = String(req.query.name);
    res.send({ id, name });
  }
);

apiRouter.get(
  '/:name',
  [validateStringInPath('name')],
  validate,
  async (req: Request, res: Response) => {
    const name = String(req.params.name);
    res.send({ name });
  }
);

export { apiRouter };
