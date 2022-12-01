require('dotenv').config({
    path: "./src/.env",
})

const express = require('express')
const cors = require('cors')
const userModel = require('./database/models/userModel')
const sequelize = require('./database/database')
const router = require('./routers/index');
const errorMiddleware = require('./middleware/errorHandler');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log("server is on, port " + PORT));
    } catch (error) {
        console.log(error);
    }
}

start();
