import React from "react";
import StyledInput from "./styled/StyledInput";
import StyledInputContainer from "./styled/StyledInputContainer";

const Input = ({placeholder, value, callback, setter}) => {
    return (
        <StyledInputContainer>
            <StyledInput placeholder={placeholder} value={value} onChange={e => setter(e.target.value)} onKeyDown={callback} />
        </StyledInputContainer>
    )
}

export default Input;