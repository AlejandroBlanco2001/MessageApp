import { VStack, Stack, Text, Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { CREATE_USER } from "../querys";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    // This is only for the frontend validation of the form, not for the backend
    const formValidation = () => {
        const { username, email, password, confirm_password } = formData;
        if (username.length < 3) {
            Swal.fire({
                title: "Error",
                text: "Username must be at least 3 characters long",
                icon: "error",
                allowOutsideClick: true,
                showConfirmButton: false,
            });
            return false;
        }
        if (email.length < 3) {
            Swal.fire({
                title: "Error",
                text: "Email must be at least 3 characters long",
                icon: "error",
                allowOutsideClick: true,
                showConfirmButton: false,
            });
            return false;
        }
        if (password.length < 3) {
            Swal.fire({
                title: "Error",
                text: "Password must be at least 3 characters long",
                icon: "error",
                allowOutsideClick: true,
                showConfirmButton: false,
            });
            return false;
        }
        if (password !== confirm_password) {
            Swal.fire({
                title: "Error",
                text: "Passwords must match",
                icon: "error",
                allowOutsideClick: true,
                showConfirmButton: false,
            });
            return false;
        }
        return true;
    };

    const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const sendFormData = (event) => {
        event.preventDefault();
        if (!formValidation()) return;
        console.log("Creating account with the following data: ", formData);
        createUser({ variables: { ...formData } });
    };

    return (
        <Stack display="flex" flexDirection="row">
            <Box id="sign_up_image_container" width="50%" bg="red"></Box>
            <VStack
                width="50%"
                height="100vh"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="10px"
            >
                <Text fontSize={"25"}>
                    Welcome to <em>MessageApp</em>, a simple app to send to{" "}
                    <i>message without restrictions</i>
                </Text>
                <Box>
                    <Input
                        onChange={handleInputChange}
                        name="username"
                        type="text"
                        variant="flushed"
                        placeholder="Username"
                    ></Input>
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        variant="flushed"
                        placeholder="Email"
                    ></Input>
                    <Input
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        variant="flushed"
                        placeholder="Password"
                    ></Input>
                    <Input
                        onChange={handleInputChange}
                        name="confirm_password"
                        type="password"
                        variant="flushed"
                        placeholder="Confirm passoword"
                    ></Input>
                    <Button
                        _hover={{ bg: "#6bd457" }}
                        bg="#7cf564"
                        color="white"
                        width="200px"
                        onClick={sendFormData}
                    >
                        Create account
                    </Button>
                </Box>
            </VStack>
        </Stack>
    );
};

export default SignUp;
