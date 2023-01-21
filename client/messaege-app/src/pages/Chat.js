import ChatBar from "../components/ChatBar";
import ChatDisplay from "../components/ChatDisplay";
import { Stack } from "@chakra-ui/react";

const Chat = ({}) => {
    return (
        <Stack>
            <ChatBar></ChatBar>
            <ChatDisplay></ChatDisplay>
        </Stack>
    );
};

export default Chat;
