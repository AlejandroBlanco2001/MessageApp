const bcrypt = require("bcrypt");
const { generateJWT } = require("../../utils");

const createUser = async (_, input, { models }) => {
    const salt = await bcrypt.genSalt(10);
    let token = null;
    const hashedPassword = await bcrypt.hash(input.password, salt);
    input.password = hashedPassword;
    return await models.User.create(input);
};

const updateUser = async (_, input, { models }) => {
    const user = await models.User.findOneAndUpdate(
        { email: input.email },
        input,
        { new: true }
    );
    console.log(user);
    return user;
};

const deleteUser = async (_, id, { models }) => {
    const user = await models.User.deleteOne({ _id: id });
    if (user.deletedCount === 1) return true;
    else return false;
};

const deleteUserEmail = async (_, input, { models }) => {
    const user = await models.User.deleteOne({ email: input.email });
    if (user.deletedCount === 1) return true;
    else return false;
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    deleteUserEmail,
};
