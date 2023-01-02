const users = async (_, {}, { models }) => {
    return await models.User.find();
};

const user = async (_, { id }, { models }) => {
    return await models.User.findById(id);
};

const userUsername = async (_, { username }, { models }) => {
    return await models.User.find({ username: username });
};

const userEmail = async (_, { email }, { models }) => {
    return await models.User.find({ email: email });
};

module.exports = { users, user, userUsername, userEmail };
