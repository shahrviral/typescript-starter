import { param, query, validationResult } from 'express-validator';
import { Request, Response } from 'express';

export const validateStringInQuery = (parameter: string) =>
  query(parameter)
    .notEmpty()
    .withMessage(`${parameter} must be longer that 1 char`);

export const validateNumberInQuery = (parameter: string) =>
  query(parameter).isInt().withMessage(`${parameter} must be a numeric value`);

export const validateStringInPath = (parameter: string) =>
  param(parameter)
    .trim()
    .notEmpty()
    .withMessage(`${parameter} must be longer that 1 char`);

export const validateNumberInPath = (parameter: string) =>
  param(parameter).isInt().withMessage(`${parameter} must be a numeric value`);

export function validate(req: Request, res: Response, next: any) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: any[] = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
}
