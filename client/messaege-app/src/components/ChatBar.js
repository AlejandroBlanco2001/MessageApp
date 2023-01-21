import React from "react";
import { VStack } from "@chakra-ui/react";
import ChatOptions from "./ChatOptions";
import { CHATS } from "../querys";
import { useQuery } from "@apollo/client";

const ChatBar = ({}) => {
    const { loading, error, data } = useQuery(CHATS);

    console.log(data);

    return (
        <React.Fragment>
            <VStack>
                <ChatOptions></ChatOptions>
            </VStack>
        </React.Fragment>
    );
};

export default ChatBar;
