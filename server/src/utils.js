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

const verifyJwt = (jwtToken, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(jwtToken, secret, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
};

const contextObject = async ({ req }) => {
    const values = req.headers.authorization.split("");
    let verified = null;
    try {
        verified = await verifyJwt(values[1], jwtSecret);
    } catch (err) {
        console.log(err);
        throw new AuthenticationError("Invalid token");
    }

    return true;
};

module.exports = { generateJWT, verifyJwt, contextObject };
