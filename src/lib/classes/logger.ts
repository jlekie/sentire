import { LoggerLevels } from 'sentire/enums';
import { ILogger, ILoggerOptions, ILoggerMetadata, ITransport } from 'sentire/interfaces';

export class Logger implements ILogger {
    public readonly transports: ReadonlyArray<ITransport>;
    public readonly metadata?: ILoggerMetadata;

    constructor(options: ILoggerOptions = {}) {
        this.metadata = options.metadata;
        this.transports = [];
    }

    public registerTransport(transport: ITransport) {
        const transports = this.transports as Array<ITransport>;
        transports.push(transport);

        return this;
    }
    public async log(level: LoggerLevels, message: string, metadata?: ILoggerMetadata) {
        const matchTransports = this.transports.filter(t => t.level <= level);

        await Promise.all(matchTransports.map(l => l.log(message, {
            ...this.metadata,
            ...metadata,
            level: LoggerLevels[level].toLowerCase()
        })));
    }

    public error(message: string, metadata?: ILoggerMetadata) {
        return this.log(LoggerLevels.Error, message, metadata);
    }
    public warning(message: string, metadata?: ILoggerMetadata) {
        return this.log(LoggerLevels.Warning, message, metadata);
    }
    public info(message: string, metadata?: ILoggerMetadata) {
        return this.log(LoggerLevels.Info, message, metadata);
    }
    public verbose(message: string, metadata?: ILoggerMetadata) {
        return this.log(LoggerLevels.Verbose, message, metadata);
    }
    public debug(message: string, metadata?: ILoggerMetadata) {
        return this.log(LoggerLevels.Debug, message, metadata);
    }
}