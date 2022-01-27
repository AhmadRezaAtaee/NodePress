import morgan from "morgan"
import Logger from "../helpers/logger/index.js"

const format = 'tiny'

const stream = {
    write: (message) => Logger.http(message)
}

export default morgan(format, { stream })