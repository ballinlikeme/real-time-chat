const userService = require('../services/userService')

class UserController {
    async login(req, res, next) {
        try {
            const {username, password} = req.body;
            const userToken = await userService.login(username, password)
            return res.json(userToken)
        } catch (error) {
            next(error)
        }
    }

    async register(req, res, next) {
        try {
            const {username, password} = req.body
            const userData = await userService.register(username, password);
            return res.json(userData);
        } catch (error) {
            next(error)
        }
    }

    async check(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = await userService.check(token);
            return res.json(decoded);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController();