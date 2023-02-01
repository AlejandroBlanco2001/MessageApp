import {Box, Text} from "@chakra-ui/react";

const ChatCard = ({username}) => {
    
    return(
        <Box bg="white" height="15%" width="100%" textAlign="center">
            <Text>{username}</Text>
        </Box>
    )
};

export default ChatCard;
