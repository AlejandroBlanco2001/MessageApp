const { gql } = require("apollo-server");

module.exports = gql`
    "This Message type has four fields: text, user, chat and id"
    type Message {
        "Text of the message"
        text: String
        "User who sent the message"
        user: User!
        "Chat where the message was sent"
        chat: Chat!
        "Unique identifier of the message"
        id: ID!
    }

    type Query {
        " Get all messages "
        messages: [Message!]!
        "Get a message by ID"
        message(ID: ID!): Message!
        "Get all messages sent by a user ID in all chats"
        userMessages(userID: ID!): [Message!]!
        "Get all messages sent by a user username in all chats"
        userMessagesUsername(username: String!): [Message!]!
        "Get all messages sent by a user email in all chats"
        userMessagesEmail(email: String!): [Message!]!
        "Get all messages sent in a chat"
        chatMessages(chatID: ID!): [Message!]!
    }

    type Mutation {
        "Create a new message"
        createMessage(text: String!, userID: ID!, chatID: ID!): Message!
    }
`;
