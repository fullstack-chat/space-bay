const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', function () {
    console.log("Mongoose default connection is open to " + process.env.MONGODB);
});

mongoose.connection.on('error', function (err) {
    console.log("Mongoose default connection has occured " + err + " error");
});

mongoose.connection.on('disconnected', function () {
    console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});