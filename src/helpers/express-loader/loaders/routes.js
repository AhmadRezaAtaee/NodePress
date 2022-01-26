import { readdirSync } from "fs"
import { extname, join } from "path"

export const routesDirDefault = join(process.cwd(), '/src/routes/')
export const routesPrefixDefault = ''

export const routesLoader = async (app, routesDir = routesDirDefault, routesPrefix = routesPrefixDefault) => {

    try {

        const modules = readdirSync(routesDir)
            .filter(route => {
                return extname(route) === '.js'
            })
            .map(route => import(routesDir + route))          
        const routes = await Promise.all(modules)
        routes.forEach(route => {
            app.use(routesPrefix, route.default)
        })
        return app
        
    } catch (error) {
        throw "Routes Loader Error: " + error.message
    }
}