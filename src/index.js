import express from 'express';
import 'dotenv/config';
import expressLoader from './helpers/express-loader/index.js';
import './database/connection.js';
import Logger from './helpers/logger/index.js';

const app = express();
const port = process.env.PORT || 3000;
const apiPrefix = '/api/v1';

async function bootStrap() {
	try {
		await expressLoader(app, { routesPrefix: apiPrefix });
		app.all('*', (req, res) => {
			res.status(404).send('route not found');
		});
		app.listen(port, () =>
			Logger.info(`Server Running: http://localhost:${port}`),
		);
	} catch (error) {
		Logger.error(error);
		return process.exit(1);
	}
}

bootStrap();
