import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { GET_USERNAME_EMAIL } from "../querys";
import { useNavigate } from "react-router-dom";

const logo_image = require("../assets/logo.png");

const Home = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [getUsername, { loading, error, data }] =
        useLazyQuery(GET_USERNAME_EMAIL);

    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(
            `Sending (${formData.email}, ${formData.password}) to server`
        );
        getUsername({ variables: { ...formData } });
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box>
                <img src={logo_image} alt="logo" />
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
                <Input
                    onChange={handleInputChange}
                    name="email"
                    variant="flushed"
                    placeholder="Email"
                    type="email"
                    textAlign="center"
                    width="300px"
                />
                <Input
                    onChange={handleInputChange}
                    name="password"
                    variant="flushed"
                    placeholder="Password"
                    type="password"
                    textAlign="center"
                    width="300px"
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
    );
};

export default Home;
