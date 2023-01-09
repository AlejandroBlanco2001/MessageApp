import "./styles/index.scss";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import server from "./apollo-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <ApolloProvider client={server}>
            <App />
        </ApolloProvider>
    </ChakraProvider>
);
