const createMessage = async (_, input, { models }) => {
    return await models.Message.create(input);
};

module.exports = {
    createMessage,
};
