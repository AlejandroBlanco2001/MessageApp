const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const generateJWT = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, jwtSecret, { expiresIn: "1h" }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
};

const verifyJwt = (jwtToken) => {
    let token = jwtToken.split("=")[1].split(";")[0];
    let data = {};
    try {
        data = jwt.verify(token, jwtSecret);
    } catch (err) {
        throw new Error("USER NOT AUTHORIZED");
    }
    return data;
};

module.exports = { generateJWT, verifyJwt };
