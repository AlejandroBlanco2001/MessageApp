const createChat = async (_, {}, { models }) => {
    return await models.Chat.create();
};

const updateChat = async (_, { id, input }, { models }) => {
    return await models.Chat.findByIdAndUpdate(id, input);
};

const deleteChat = async (_, { id }, { models }) => {
    return await models.Chat.findByIdAndDelete(id);
};

module.exports = { createChat, updateChat, deleteChat };
