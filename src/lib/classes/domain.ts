import * as Path from 'path';

import { IDomain, ITransport, ILoggerOptions } from 'sentire/interfaces';
import { Logger } from './logger';

export class Domain implements IDomain {
    public createLogger(transports: ReadonlyArray<ITransport>, options?: ILoggerOptions) {
        const logger = new Logger(options);

        for (let transport of transports)
            logger.registerTransport(transport);

        return logger;
    }
}