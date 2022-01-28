import winston from 'winston';
import fileTransport from 'winston-daily-rotate-file';
import { resolve } from 'path';

const transports = [
	new winston.transports.Console(),
	new fileTransport({
		dirname: resolve('logs'),
		filename: ' ',
	}),
];

export default transports;
