import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json } = format;

const addAppName = format((info) => {
  info.app = 'typescript-starter';
  return info;
});

const baseFormat = combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  addAppName()
);

const logger = createLogger({
  level: 'info',
  format: baseFormat,
  transports: [new transports.Console({ format: json() })],
});

export { logger };
