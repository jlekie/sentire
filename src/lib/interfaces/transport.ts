import { LoggerLevels } from 'sentire/enums';

export interface ITransportMetadata {
    level: string;
    [key: string]: any
}

export interface ITransport {
    readonly name: string;
    readonly level: LoggerLevels;

    log(message: string, metadata: ITransportMetadata): PromiseLike<void>;
}

export interface ITransportOptions {
    level?: LoggerLevels;
}