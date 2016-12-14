import { IDomain, ILogger, ITransport, ILoggerOptions } from 'sentire/interfaces';
import { Domain } from 'sentire/classes';

const defaultDomain = new Domain();

export function createLogger(transports: ReadonlyArray<ITransport>, options?: ILoggerOptions, domain: IDomain = defaultDomain): ILogger {
    return domain.createLogger(transports, options)
}