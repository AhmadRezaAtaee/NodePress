import { json } from 'express';

export default [
    log,
    json(),
    validBodyJson
]

function log(err, req, res, next) {
    console.log(req.baseUrl)
    next()
}

function validBodyJson(err, req, res, next) {
    if (['POST', 'PUT'].includes(req.method) && err) {
        return res.status(400).send({ error: "invalid json in the body of the request! please check the structure and syntax of json." });
    }
    next()
}