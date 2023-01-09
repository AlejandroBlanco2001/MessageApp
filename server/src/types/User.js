const { gql } = require("apollo-server");

module.exports = gql`
    "This User type has six fields: username, email, password, friends, chats and id"
    type User {
        "Username of the account"
        username: String!
        "Email of the account"
        email: String!
        "Password of the account"
        password: String!
        "List of friends"
        friends: [User]
        "List of chats"
        chats: [Chat]
        "Unique identifier of the account"
        id: ID!
    }

    type Query {
        "Get all users"
        users: [User]
        "Get a user by ID"
        user(id: ID!): User!
        "Get a user by username"
        userUsername(username: String!): User!
        "Get a user by email"
        userEmail(email: String!): User!
    }

    type Mutation {
        "Create a new user"
        createUser(username: String, email: String!, password: String!): User!
        "Update a user"
        updateUser(username: String, email: String!, password: String!): User!
        "Delete a user"
        deleteUser(id: ID!): Boolean!
        "Delete a user by email"
        deleteUserEmail(email: String!): Boolean!
    }
`;
