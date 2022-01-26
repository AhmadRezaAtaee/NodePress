import { join } from "path"

export const middlewaresFileDefault = join(process.cwd(), 'src', '/middlewares/index.js')

export const middlewaresLoader = async (app, middlewaresFile = middlewaresFileDefault) => {
    try {
        
        const middlewares = await import(middlewaresFile)
        middlewares
            .default
            .forEach(middleware => app.use(middleware))
        return app

    } catch (error) {
        throw "Middlewares Loader Error: " + error.message
    }
}