import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

const variants = {
    expanded: { width: "50px" },
    collapsed: { width: "350px" },
};

const ChatSearch = ({}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [search, setSearch] = useState("");

    return (
        <Box>
            <InputGroup
                width="50px"
                height="45px"
                as={motion.div}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={variants}
                transition="0.5 linear"
                className="search_bar"
                flexGrow={1}
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
            >
                <InputLeftElement
                    children={<Search2Icon />}
                    onClick={(event) => {
                        if (isExpanded === true && search !== "") {
                            event.stopPropagation();
                            alert("Searching for " + search);
                        }
                    }}
                />
                <Input type="text" placeholder="Search username"></Input>
            </InputGroup>
        </Box>
    );
};

export default ChatSearch;
