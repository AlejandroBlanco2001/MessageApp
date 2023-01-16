import { useState } from "react";
import { Stack, Box, Input, Button, Image } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../querys";
import Cookies from "universal-cookie";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const logo_image = require("../assets/logo.png");

const Home = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [login] = useLazyQuery(LOGIN);
    const Cookie = new Cookies();

    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleLogin = (event) => {
        event.preventDefault();
        if (formData.email === "" || formData.password === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, rellena todos los campos!",
            });
            return;
        }
        console.log(
            `Sending (${formData.email}, ${formData.password}) to server`
        );
        login({
            variables: { ...formData },
            fetchPolicy: "no-cache",
            onCompleted: (data) => {
                console.log(data);
                Cookie.set("token", data.loginUser.token);
                swal.fire({
                    icon: "success",
                    title: "Bienvenido!",
                    text: "Iniciaste sesión correctamente!",
                }).then((res) => {
                    if (res.isConfirmed) navigate("/chat");
                });
            },
            onError: (error) => {
                if (error.graphQLErrors[0].message === "User not found") {
                    swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Usuario no encontrado o contraseña incorrecta!",
                    });
                } else {
                    swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salió mal!",
                    });
                }
            },
        });
    };

    return (
        <Stack display="flex" flexDirection="row">
            <Box id="home_main_image_container" width="40%"></Box>
            <Box
                width="60%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src={logo_image}
                    alt="logo"
                    boxSize="200px"
                    objectFit="cover"
                />
                <Box display="flex" flexDirection="column" gap="20px">
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        variant="flushed"
                        placeholder="Email"
                        type="email"
                        textAlign="center"
                        width="300px"
                        height="50px"
                    />
                    <Input
                        onChange={handleInputChange}
                        name="password"
                        variant="flushed"
                        placeholder="Password"
                        type="password"
                        textAlign="center"
                        width="300px"
                        height="50px"
                    />
                    <Button onClick={handleLogin}>Login</Button>
                    <span
                        style={{ textAlign: "center" }}
                        onClick={() => navigate("/signup")}
                    >
                        Crear una cuenta
                    </span>
                </Box>
            </Box>
        </Stack>
    );
};

export default Home;
