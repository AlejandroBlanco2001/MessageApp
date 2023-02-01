import React from "react";
import { IconButton, Stack, Tooltip } from "@chakra-ui/react";
import { HamburgerIcon, SmallAddIcon } from "@chakra-ui/icons";
import ChatSearch from "./ChatSearch";

const ChatOptions = ({}) => {
    return (
        <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            bg="white"
            width="100%"
            height="10%"
        >
            <Tooltip label="Search a chat">
                <ChatSearch></ChatSearch>
            </Tooltip>
            <Tooltip label="Add friend">
                <IconButton
                    borderRadius="50%"
                    height="45px"
                    width="45px"
                    aria-label="Add friend"
                    bg="transparent"
                    icon={<SmallAddIcon />}
                />
            </Tooltip>
            <Tooltip label="Open menu">
                <IconButton
                    borderRadius="50%"
                    height="45px"
                    width="45px"
                    aria-label="Open menu"
                    bg="transparent"
                    icon={<HamburgerIcon />}
                />
            </Tooltip>
        </Stack>
    );
};

export default ChatOptions;
