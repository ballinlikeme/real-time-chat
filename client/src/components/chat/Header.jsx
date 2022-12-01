import React from "react";
import StyledHeader from "./styled/StyledHeader";
import StyledHeaderTitle from "./styled/StyledHeaderTitle";

const Header = ({room, members}) => {
    return (
        <StyledHeader>
            <StyledHeaderTitle>Room number {room}</StyledHeaderTitle>
            <StyledHeaderTitle>Members: {members}</StyledHeaderTitle>
        </StyledHeader>
    )
}

export default Header;