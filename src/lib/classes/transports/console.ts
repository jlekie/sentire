import * as Util from 'util';
import * as OS from 'os';

import { LoggerLevels } from 'sentire/enums';
import { IConsoleTransport, IConsoleTransportOptions, ConsoleTransportFormatter, ITransportMetadata } from 'sentire/interfaces';
import { ATransport } from '../transport';

export class ConsoleTransport extends ATransport implements IConsoleTransport {
    public readonly name: string;
    public readonly level: LoggerLevels;

    public readonly stdout: NodeJS.WritableStream;
    public readonly stderr: NodeJS.WritableStream;

    private readonly formatter: ConsoleTransportFormatter;
    private readonly includeMetadata: boolean;
    private readonly inspectOptions: Util.InspectOptions;

    constructor(name: string, options: IConsoleTransportOptions = {}) {
        super(name, options);

        this.stdout = options.stdout || process.stdout;
        this.stderr = options.stderr || process.stderr;

        this.formatter = options.formatter || ((logger, message) => message);
        this.includeMetadata = options.includeMetadata || false;
        this.inspectOptions = options.inspectOptions || { colors: true, depth: 5 };
    }

    public log(message: string, metadata: ITransportMetadata) {
        this.stderr.write(this.formatter(this, message, metadata));
        if (this.includeMetadata && metadata) this.stderr.write(' ' + Util.inspect(metadata, this.inspectOptions));
        this.stderr.write(OS.EOL);

        return Promise.resolve();
    }
}