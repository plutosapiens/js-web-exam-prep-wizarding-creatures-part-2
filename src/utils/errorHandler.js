const { MongooseError } = require("mongoose")


exports.extractErrorMsgs = (error) => {
    const instanceOfMongoose = error instanceof MongooseError;

    if(instanceOfMongoose) {
        const errors = Object.values(error.errors);
        const msgs = errors.map((e) => e.message)
        return msgs;
    }

    return [error.message];
};