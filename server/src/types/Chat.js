const { gql } = require("apollo-server");

module.exports = gql`
    # This "Chat" type has three fields: messages, users and id
    type Chat {
        # List of messages
        messages: [Message]
        # List of users
        users: [User!]!
        # Unique identifier of the chat
        id: ID!
    }
`;
