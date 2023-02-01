import { Box, Text} from "@chakra-ui/react";
const ChatDisplay = ({username}) => {
    return (
        <Box bg="yellow" height="70%" width="50%">
            <Box bg="white" height="10%" width="100%" textAlign="center">
                <Text>{username}</Text>
            </Box>
        </Box>
    );
};

export default ChatDisplay;
