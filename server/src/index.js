require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/db");
const models = require("./models");
const typeDefs = require("./types");
const resolvers = require("./resolvers");

const port = process.env.PORT || 4000;

connectDB();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: { models },
});

server.listen({ port: port }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
});
