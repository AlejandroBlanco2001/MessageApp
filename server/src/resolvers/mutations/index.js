const { createUser, deleteUser, updateUser } = require("./userMutations");
const { createMessage } = require("./messageMutations");
const { createChat, updateChat, deleteChat } = require("./chatMutations");

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    createMessage,
    createChat,
    updateChat,
    deleteChat,
};
