const chats = async (_, {}, { models }) => {
    return await models.Chat.find({});
};

const chat = async (_, { id }, { models }) => {
    return await models.Chat.findById(id);
};

const chatUser = async (_, {}, { models, auth }) => {
    console.log(auth);
    if (auth === {}) throw new Error("USER NOT AUTHORIZED");
    return await models.Chat.find({ users: { $all: [auth.id] } });
};

module.exports = { chats, chat, chatUser };
