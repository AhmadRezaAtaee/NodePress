import { middlewaresFileDefault, middlewaresLoader } from './middlewares.js';
import {
	routesDirDefault,
	routesPrefixDefault,
	routesLoader,
} from './routes.js';

const optionsDefault = {
	routesDir: routesDirDefault,
	middlewaresFile: middlewaresFileDefault,
	routesPrefix: routesPrefixDefault,
};

export const expressloader = async (app, options = { ...optionsDefault }) => {
	const app_middlewares = await middlewaresLoader(
		app,
		options.middlewaresFile,
	);
	const app_routes = await routesLoader(
		app_middlewares,
		options.routesDir,
		options.routesPrefix,
	);
	return app_routes;
};
