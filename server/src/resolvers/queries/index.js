const {
    user,
    users,
    userUsername,
    userEmail,
    loginUser,
} = require("./userQueries");
const {
    message,
    messages,
    userMessages,
    chatMessages,
    userMessagesUsername,
    userMessagesEmail,
} = require("./messageQueries");
const { chat, chats, chatUser } = require("./chatQueries");

module.exports = {
    user,
    users,
    userUsername,
    userEmail,
    loginUser,
    message,
    messages,
    userMessages,
    chatMessages,
    userMessagesUsername,
    userMessagesEmail,
    chat,
    chats,
    chatUser,
};
