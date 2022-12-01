const jwt = require('jsonwebtoken');
const ApiError = require('../exceptions/apiError');

class TokenService {
    generateAccessToken(username, password) {
        const payload = {username, password}
        return jwt.sign(payload, process.env.SECRET_ACCESS_KEY, {
            expiresIn: "24h"
        })
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.SECRET_ACCESS_KEY);
        } catch(error) {
            throw ApiError.UnauthorizedError()
        }
    }

}

module.exports = new TokenService();