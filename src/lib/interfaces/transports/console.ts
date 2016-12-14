import * as Util from 'util';

import { ITransport, ITransportOptions, ITransportMetadata } from '../transport';

export interface IConsoleTransport extends ITransport {
    readonly stdout: NodeJS.WritableStream;
    readonly stderr: NodeJS.WritableStream;
}

export type ConsoleTransportFormatter = (transport: IConsoleTransport, message: string, metadata?: ITransportMetadata) => string;

export interface IConsoleTransportOptions extends ITransportOptions {
    stdout?: NodeJS.WritableStream;
    stderr?: NodeJS.WritableStream;

    formatter?: ConsoleTransportFormatter;
    includeMetadata?: boolean;
    inspectOptions?: Util.InspectOptions;
}