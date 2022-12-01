const userModel = require('../database/models/userModel');
const tokenService = require('./tokenService');
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');

class UserService {
    async register(username, password) {
        const candidate = await userModel.findOne({where: {username}});
        if (candidate) {
            throw ApiError.BadRequest('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const userData = await userModel.create({username, password: hashedPassword});
        const token = tokenService.generateAccessToken(username, password);

        return token;
    }

    async login(username, password) {
        const user = await userModel.findOne({where: {username}})
        if (!user) throw ApiError.BadRequest(`User doesn't exist`)
        const isEqual = await bcrypt.compare(password, user.password)
        if (!isEqual) throw ApiError.BadRequest('Incorrect password')
        const token = tokenService.generateAccessToken(user.username, user.password)
        return token;
    }

    async check(token) {
        if (typeof token !== "string") return undefined
        const decoded = tokenService.verifyToken(token)
        console.log(decoded, 'DECODED')
        if (!decoded) {
            throw ApiError.UnauthorizedError()
        }
        return decoded;
    }
}

module.exports = new UserService()