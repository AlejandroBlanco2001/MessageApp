const moongose = require("mongoose");
const Schema = moongose.Schema;

const messageSchema = new Schema({
    text: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    chat: { type: Schema.Types.ObjectId, ref: "Chat" },
});

const Message = moongose.model("Message", messageSchema);
module.exports = { Message };
