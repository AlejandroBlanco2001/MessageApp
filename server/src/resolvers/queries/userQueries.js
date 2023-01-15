const { generateJWT } = require("../../utils");
const bcrypt = require("bcrypt");

const users = async (_, {}, { models }) => {
    return await models.User.find();
};

const user = async (_, { id }, { models }) => {
    const user = await models.User.findById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const loginUser = async (_, { email, password }, { models }) => {
    const user = await models.User.findOne({ email: email });
    if (!user) {
        throw new Error("User not found");
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }
    const token = await generateJWT({
        id: user._id,
        username: user.username,
        email: user.email,
    });
    user.token = token;
    return user;
};

const userUsername = async (_, { username }, { models }) => {
    return await models.User.findOne({ username: username });
};

const userEmail = async (_, { email }, { models }) => {
    return await models.User.findOne({ email: email });
};

module.exports = { users, user, userUsername, userEmail, loginUser };
