import React from "react";
import { Stack, VStack, Text } from "@chakra-ui/react";
import ChatOptions from "./ChatOptions";
import { CHATS } from "../querys";
import { useQuery } from "@apollo/client";

const ChatBar = ({}) => {
    const [chats, setChats] = React.useState([]);
    const { loading, error, data } = useQuery(CHATS, {
        onCompleted: (data) => {
            setChats(data.chatUser);
        },
    });

    const loadChats = () => {
        if (chats.length === 0) return <Text>There is not chats</Text>;
        return chats.map((chat) => {
            return (
                <div key={chat.id}>
                    <p>{chat.name}</p>
                </div>
            );
        });
    };

    return (
        <VStack width="25%" height="70%" bg="green">
            <ChatOptions></ChatOptions>
            <VStack bg="blue">
                {loading ? () => <p>Loading...</p> : loadChats()}
            </VStack>
        </VStack>
    );
};

export default ChatBar;
