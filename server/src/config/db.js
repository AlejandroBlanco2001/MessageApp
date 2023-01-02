const moongose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = () => {
    return moongose.connect(
        DATABASE_URL,
        { useUnifiedTopology: true, useNewUrlParser: true },
        (err) => {
            if (err) {
                console.log("Error connecting to database");
                console.log(err);
            } else {
                console.log("Connected to database");
            }
        }
    );
};

const db = moongose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;
