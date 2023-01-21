import { ApolloClient, InMemoryCache } from "@apollo/client";

const server = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    credentials: "include",
    SameSite: "None",
});

export default server;
