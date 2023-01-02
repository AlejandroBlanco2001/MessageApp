const moongose = require("mongoose");
const Schema = moongose.Schema;

const chatSchema = new Schema({
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Chat = moongose.model("Chat", chatSchema);
module.exports = { Chat };
