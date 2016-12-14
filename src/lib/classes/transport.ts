import { LoggerLevels } from 'sentire/enums';
import { ITransport, ITransportOptions, ITransportMetadata } from 'sentire/interfaces';

export type ConsoleLoggerFormatter = (logger: ITransport, message: string, metadata?: ITransportMetadata) => string;

export abstract class ATransport implements ITransport {
    public readonly name: string;
    public readonly level: LoggerLevels;

    constructor(name: string, options: ITransportOptions = {}) {
        this.name = name;
        this.level = options.level || LoggerLevels.Info;
    }

    public abstract log(message: string, metadata: ITransportMetadata): Promise<void>;
}