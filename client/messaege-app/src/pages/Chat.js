import ChatBar from "../components/ChatBar";
import ChatDisplay from "../components/ChatDisplay";
import { Stack } from "@chakra-ui/react";

const Chat = ({}) => {
    return (
        <Stack
            display="flex"
            direction="row"
            bg="red"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <ChatBar></ChatBar>
            <ChatDisplay username="Prueba"></ChatDisplay>
        </Stack>
    );
};

export default Chat;
