const jwt = require('jsonwebtoken'); const jwtSignature = process.env.JWT_SIGNATURE

const fetchuser = (req, res, next) => {

    const jwtToken = req.header('auth-token')   //adding jwt token in request header

    if (!jwtToken) {
        res.status(401).send({ error: 'auth-token required' })
    }

    try {
        const payload = jwt.verify(jwtToken, jwtSignature)  //verifying token with signature

        req.user = payload.user  //sending request with data

        next()
        
    } catch (error) {
        res.status(401).send({ error: 'wroung auth-token' })
    }
}

module.exports = fetchuser;