const createUser = async (_, { input }, { models }) => {
    const user = await models.User.create(input);
    return user;
};

const updateUser = async (_, { id, input }, { models }) => {
    const user = await models.User.findByIdAndUpdate({ _id: id }, { input });
    return user;
};

const deleteUser = async (_, { id }, { models }) => {
    const user = await models.User.deleteOne({ _id: id });
    if (user.deletedCount) return { id: id };
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
};
