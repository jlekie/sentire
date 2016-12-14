import { LoggerLevels } from 'sentire/enums';
import { ITransport, ITransportMetadata } from './transport';

export interface ILoggerMetadata { [key: string]: any }

export interface ILoggerOptions {
    metadata?: ILoggerMetadata;
}
export interface ILogger {
    readonly transports: ReadonlyArray<ITransport>;
    readonly metadata?: ILoggerMetadata;

    registerTransport(transport: ITransport): this;
    log(level: LoggerLevels, message: string, metadata?: ILoggerMetadata): PromiseLike<void>;

    error(message: string, metadata?: ILoggerMetadata): PromiseLike<void>;
    warning(message: string, metadata?: ILoggerMetadata): PromiseLike<void>;
    info(message: string, metadata?: ILoggerMetadata): PromiseLike<void>;
    verbose(message: string, metadata?: ILoggerMetadata): PromiseLike<void>;
    debug(message: string, metadata?: ILoggerMetadata): PromiseLike<void>;
}