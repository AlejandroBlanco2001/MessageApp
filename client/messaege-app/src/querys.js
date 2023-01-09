import { gql } from "@apollo/client";

const GET_USERNAME_EMAIL = gql`
    query UserEmail($email: String!) {
        userEmail(email: $email) {
            id
        }
    }
`;

const CREATE_USER = gql`
    mutation CreateUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            email
        }
    }
`;

export { CREATE_USER, GET_USERNAME_EMAIL };
