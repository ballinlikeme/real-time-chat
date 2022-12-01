import React from "react";
import StyledButton from "./styled/StyledButton";
import ButtonContainer from "./styled/ButtonContainer";

const Button = ({children, callback}) => {
    return (
        <ButtonContainer>
            <StyledButton onClick={callback}>
                {children}
            </StyledButton>
        </ButtonContainer>
    )
}

export default Button;