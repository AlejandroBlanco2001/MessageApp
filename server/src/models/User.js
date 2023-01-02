const moongose = require("mongoose");
const Schema = moongose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
});

const User = moongose.model("User", userSchema);
module.exports = { User };
