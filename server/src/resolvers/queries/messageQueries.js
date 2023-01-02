const messages = async (_, {}, { models }) => {
    return await models.Message.find({});
};

const message = async (_, { id }, { models }) => {
    return await models.Message.findById(id);
};

const userMessages = async (_, { userID }, { models }) => {
    return await models.Message.find({ user: userID });
};

const chatMessages = async (_, { chatID }, { models }) => {
    return await models.Message.find({ chat: chatID });
};

const userMessagesUsername = async (_, { username }, { models }) => {
    return await models.Message.find({ username: username });
};

const userMessagesEmail = async (_, { email }, { models }) => {
    return await models.Message.find({ email: email });
};

module.exports = {
    messages,
    message,
    userMessages,
    chatMessages,
    userMessagesUsername,
    userMessagesEmail,
};
