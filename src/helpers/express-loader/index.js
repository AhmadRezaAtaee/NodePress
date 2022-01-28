import * as routes_loader from './loaders/routes.js';
import * as middlewares_loader from './loaders/middlewares.js';
import * as express_loader from './loaders/express.js';

export const routesLoader = routes_loader.routesLoader;
export const middlewaresLoader = middlewares_loader.middlewaresLoader;
export const expressLoader = express_loader.expressloader;
export default express_loader.expressloader;
