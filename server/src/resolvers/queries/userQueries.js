const users = async (_, {}, { models }) => {
    return await models.User.find();
};

const user = async (_, { id }, { models }) => {
    return await models.User.findById(id);
};

module.exports = { users, user };
