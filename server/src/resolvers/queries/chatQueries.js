const chats = async (_, {}, { models }) => {
    return await models.Chat.find({});
};

const chat = async (_, { id }, { models }) => {
    return await models.Chat.findById(id);
};

const chatUser = async (_, { userID }, { models }) => {
    return await models.Chat.find({ users: { $all: [userID] } });
};

module.exports = { chats, chat, chatUser };
