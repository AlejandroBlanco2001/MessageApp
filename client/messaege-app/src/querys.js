import { gql } from "@apollo/client";

const CHATS = gql`
    query ChatUser {
        chatUser {
            messages {
                user {
                    username
                }
                text
            }
            id
        }
    }
`;

const LOGIN = gql`
    query Query($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
        }
    }
`;

const GET_USERNAME_EMAIL = gql`
    query UserEmail($email: String!) {
        userEmail(email: $email) {
            token
        }
    }
`;

const CREATE_USER = gql`
    mutation CreateUser(
        $email: String!
        $password: String!
        $username: String
    ) {
        createUser(email: $email, password: $password, username: $username) {
            email
        }
    }
`;

export { CREATE_USER, GET_USERNAME_EMAIL, LOGIN, CHATS };
