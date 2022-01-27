import { json } from 'express'
import jwt from "./jwt.js"
import log from "./log.js"
import cors from "cors"

export default [
    cors({ origin: '*' }),
    jwt,
    json(),
    validBodyJson,
    log,
]

function validBodyJson(err, req, res, next) {
    if (['POST', 'PUT'].includes(req.method) && err) {
        return res.status(400).send({ error: "invalid json in the body of the request! please check the structure and syntax of json." });
    }
    next()
}