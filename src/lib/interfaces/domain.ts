import { ILogger, ILoggerOptions } from './logger';
import { ITransport } from './transport';

export interface IDomain {
    createLogger(loggers: ReadonlyArray<ITransport>, options?: ILoggerOptions): ILogger;
}