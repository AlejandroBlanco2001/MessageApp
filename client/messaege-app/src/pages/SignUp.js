import {
    VStack,
    Stack,
    Text,
    Tooltip,
    Box,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, LockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CREATE_USER } from "../querys";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [formError, setFormError] = useState({
        username: false,
        email: false,
        password: false,
        confirm_password: false,
    });

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [createUser] = useMutation(CREATE_USER);

    const checkForm = (event) => {
        if (event.target.name === "username") {
            if (event.target.value.length < 3) {
                setFormError({ ...formError, username: true });
            } else {
                setFormError({ ...formError, username: false });
            }
        } else if (event.target.name === "email") {
            if (
                event.target.value.length < 3 ||
                !event.target.value.includes("@")
            ) {
                setFormError({ ...formError, email: true });
            } else {
                setFormError({ ...formError, email: false });
            }
        } else if (event.target.name === "password") {
            if (
                event.target.value.length < 3 ||
                !event.target.value.match(/[0-9]/g) ||
                !event.target.value.match(/[a-z]/g) ||
                !event.target.value.match(/[A-Z]/g)
            ) {
                setFormError({ ...formError, password: true });
            } else {
                setFormError({ ...formError, password: false });
            }
        } else {
            if (
                event.target.value !==
                document.getElementById("password_input").value
            ) {
                setFormError({ ...formError, confirm_password: true });
            } else {
                setFormError({ ...formError, confirm_password: false });
            }
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        checkForm(event);
    };

    const handleClickPassword = () => setShow(!show);

    const sendFormData = (event) => {
        event.preventDefault();
        if (Object.values(formError).some((value) => value === true)) {
            Swal.fire({
                title: "Error",
                text: "Please check the form",
                icon: "error",
            });
            return;
        }
        console.log("Creating account with the following data: ", formData);
        createUser({
            variables: { ...formData },
            onCompleted: ({ data }) => {
                Swal.fire({
                    title: "Success",
                    text: "Account created successfully",
                    icon: "success",
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/";
                    }
                });
            },
            onError: (error) => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: "An error ocurred while creating the account",
                    icon: "error",
                });
            },
        });
    };

    return (
        <Stack display="flex" flexDirection="row">
            <Box id="sign_up_image_container" width="40%" bg="red"></Box>
            <VStack
                width="60%"
                height="100vh"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap="20px"
            >
                <Text fontSize={"42"} fontWeight="600">
                    Welcome to messaging without restrictions
                </Text>
                <Text>
                    Already have an account <a href="/">Log in</a>
                </Text>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="30px"
                    width="80%"
                    alignItems="center"
                >
                    <Input
                        width="80%"
                        height="50px"
                        onChange={handleInputChange}
                        name="username"
                        isInvalid={formError.username}
                        type="text"
                        variant="outline"
                        placeholder="Your username"
                    ></Input>
                    {formError.username && (
                        <Text size="10px" color="red.500">
                            Your username must have a lenght of 3
                        </Text>
                    )}
                    <Input
                        width="80%"
                        height="50px"
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        isInvalid={formError.email}
                        variant="outline"
                        placeholder="Your email address"
                    ></Input>
                    {formError.email && (
                        <Text size="10px" color="red.500">
                            Enter a valid email of 3 length characters
                        </Text>
                    )}
                    <InputGroup width="80%">
                        <Input
                            width="100%"
                            height="50px"
                            onChange={handleInputChange}
                            isInvalid={formError.password}
                            name="password"
                            type={show ? "text" : "password"}
                            variant="outline"
                            placeholder="Your password"
                        ></Input>
                        <InputRightElement
                            children={
                                <IconButton
                                    _hover={{ bg: "transparent" }}
                                    _active={{ bg: "transparent" }}
                                    bg="transparent"
                                    onClick={handleClickPassword}
                                    aria-label="Show password"
                                    icon={
                                        <Tooltip
                                            aria-label="Show password"
                                            label="Show password"
                                        >
                                            <ViewIcon
                                                marginTop={2}
                                                width={6}
                                                height={6}
                                                color="#0088CC"
                                            />
                                        </Tooltip>
                                    }
                                />
                            }
                        />
                    </InputGroup>
                    {formError.password && (
                        <Text size="10px" color="red.500">
                            The password must contain a letter lowercase,
                            uppercase and a number of 3 length characters
                        </Text>
                    )}
                    <Input
                        width="80%"
                        height="50px"
                        onChange={handleInputChange}
                        name="confirm_password"
                        type={show ? "text" : "password"}
                        isInvalid={formError.confirm_password}
                        variant="outline"
                        placeholder="Confirm password"
                    ></Input>
                    {formError.password && (
                        <Text size="10px" color="red.500">
                            The password must match
                        </Text>
                    )}
                    <Button
                        _hover={{ bg: "#32e377" }}
                        leftIcon={<LockIcon />}
                        bg="#2fd06e"
                        color="white"
                        borderRadius="0px"
                        width="80%"
                        height="50px"
                        onClick={sendFormData}
                    >
                        Create account
                    </Button>
                    <Text>
                        Or continue with{" "}
                        <a href="/">
                            <em>Google</em>
                        </a>{" "}
                        or{" "}
                        <a href="/">
                            <em>Facebook</em>
                        </a>{" "}
                        account
                    </Text>
                </Box>
            </VStack>
        </Stack>
    );
};

export default SignUp;
