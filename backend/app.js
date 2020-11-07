const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const morgan = require('morgan');
const winston = require('./config/winston');

// Swagger Documentation
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const specs = swaggerJsdoc(require("./config/swagger"));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

require('./config/database')

dotenv.config()

app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));


app.listen(process.env.PORT, () => {
    console.log(`Space Bay API available at: http://localhost:${process.env.PORT}`)
})
