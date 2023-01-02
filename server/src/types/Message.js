const { gql } = require("apollo-server");

module.exports = gql`
    # This "Message" type has four fields: text, user, chat and id
    type Message {
        # Text of the message
        text: String
        # User who sent the message
        user: User!
        # Chat where the message was sent
        chat: Chat!
        # Unique identifier of the message
        id: ID!
    }
`;
