import express from 'express'
import "dotenv/config"
import expressLoader from "./helpers/express-loader/index.js"
import "./database/connection.js"

const app = express()
const port = process.env.PORT || 3000
const apiPrefix = '/api/v1'

async function bootStrap() {
    try {
        
        await expressLoader(app, { routesPrefix: apiPrefix })
        app.all('*', (req, res) => {
            res.status(404).send('route not found')
        })
        app.listen(port, () => console.log(`Server Running: http://localhost:${port}`))

    } catch (error) {
        console.error(error)
        return
    }

}

bootStrap()