class ApiError extends Error {

    status;
    errors;

    constructor(status, message, errors = []) {
        super(message)
        this.status = status;
        this.erros = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Unauthorized Error')
    }

    static BadRequest(message, errors) {
        return new ApiError(400, message, errors);
    }
}

module.exports = ApiError