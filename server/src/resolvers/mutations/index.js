const {
    createUser,
    deleteUser,
    updateUser,
    deleteUserEmail,
} = require("./userMutations");
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
    deleteUserEmail,
};
