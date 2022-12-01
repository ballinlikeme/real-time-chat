import React from "react";
import StyledMessage from "./styled/message/StyledMessage";
import StyledName from "./styled/message/StyledName";
import StyledText from "./styled/message/StyledText";

const Message = ({name, text}) => {
    return (
        <StyledMessage>
            <StyledName>{name}</StyledName>
            <StyledText>{text}</StyledText>
        </StyledMessage>
    );
};

export default Message;