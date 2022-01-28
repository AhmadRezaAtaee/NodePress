import winston from 'winston';
import format from './winston/winston-format.js';
import transports from './winston/winston-transports.js';

const level = 'debug';
const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	verbose: 4,
	debug: 5,
	silly: 6,
};

const Logger = winston.createLogger({
	level,
	levels,
	format,
	transports,
});

export default Logger;
