import { gql } from "@apollo/client";

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

export { CREATE_USER, GET_USERNAME_EMAIL };
