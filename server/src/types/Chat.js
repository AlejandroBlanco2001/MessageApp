const { gql } = require("apollo-server");

module.exports = gql`
    "This Chat type has three fields: messages, users and id"
    type Chat {
        "List of messages"
        messages: [Message]
        "List of users"
        users: [User!]!
        "Unique identifier of the chat"
        id: ID!
    }

    type Query {
        "Get all chats"
        chats: [Chat!]!
        "Get a chat by id"
        chat(id: ID!): Chat!
        "Get all the chats of a user"
        chatUser(userID: ID!): [Chat!]!
    }

    type Mutation {
        "Create a new chat"
        createChat(users: [String!]!): Chat!
        "Update a chat"
        updateChat(id: ID!): Chat!
        "Delete a chat"
        deleteChat(id: ID!): Chat!
    }
`;
