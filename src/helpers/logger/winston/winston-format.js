import winston from 'winston';
const { format } = winston;

export const time_format = 'YYYY-MM-DD HH:mm:ss';

export const template = ({ message, level, timestamp }) =>
	`${level}: ${message} - [${timestamp}]`;

export default format.combine(
	format.timestamp({ format: time_format }),
	format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
	format.colorize(),
	format.printf(template),
);
