const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const morgan = require('morgan');
const winston = require('./config/winston');

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

app.listen(process.env.PORT, () => {
    console.log(`Space Bay API available at: http://localhost:${process.env.PORT}`)
})
