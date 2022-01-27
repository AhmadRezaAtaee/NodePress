import jwt from "jsonwebtoken"
const { verify } = jwt


export default (req, res, next) => {
    if (/login$/.test(req.path)) {
        return next()
    }
    const token = req.header("auth-token")
    if (!token) return res.status(401).send({ message: "Access Denied!" })
    try {
        verify(token, process.env.TOKEN_SECRET)
        next()
    } catch (error) {
        return res.status(401).send({ message: "Access Denied!" })
    }
};

