require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const { verifyJwt } = require("./utils");
const connectDB = require("./config/db");
const models = require("./models");
const typeDefs = require("./types");
const resolvers = require("./resolvers");

const port = process.env.PORT || 4000;

connectDB();

const server = new ApolloServer({
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req }) => ({
        models: models,
        auth: verifyJwt(req.headers["cookie"]),
    }),
});

server.listen({ port: port }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
});
