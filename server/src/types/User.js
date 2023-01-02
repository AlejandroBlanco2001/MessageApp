const { gql } = require("apollo-server");

module.exports = gql`
    # This "User" type has six fields: username, email, password, friends, chats and id
    type User {
        # Username of the account
        username: String!
        # Email of the account
        email: String!
        # Password of the account
        password: String!
        # List of friends
        friends: [User]
        # List of chats
        chats: [Chat]
        # Unique identifier of the account
        id: ID!
    }

    type Query {
        users: [User]
        user(id: ID!): User!
    }

    type Mutation {
        createUser(username: String, email: String!, password: String!): User!
        updateUser(username: String, email: String!, password: String!): User!
        deleteUser(id: ID!): User!
    }
`;
