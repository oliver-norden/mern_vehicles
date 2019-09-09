const aws = require('aws-sdk');

module.exports = new aws.S3({
    "mongoURI": process.env.mongoURI,
    "jwtSecret": process.env.jwtSecret,
});

