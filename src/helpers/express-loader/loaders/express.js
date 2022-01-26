import { middlewaresFileDefault, middlewaresLoader } from "./middlewares.js"
import { routesDirDefault, routesPrefixDefault, routesLoader, } from "./routes.js"

const optionsDefault = {
    routesDir: routesDirDefault,
    middlewaresFile: middlewaresFileDefault,
    routesPrefix: routesPrefixDefault,
}

export const expressloader = async (app, options = { ...optionsDefault }) => {
    try {
        const appPresent = await Promise.all([
            middlewaresLoader(app, options.middlewaresFile),
            routesLoader(app, options.routesDir, options.routesPrefix)
        ])
        return appPresent[1]
    } catch (error) {
        throw error
    }
}