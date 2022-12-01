import React from "react";
import FormText from "./styled/FormText";
import FormTextContainer from "./styled/FormTextContainer";

const TextInForm = ({children}) => {
    return (
        <FormTextContainer>
            <FormText>{children}</FormText>
        </FormTextContainer>
    )
}

export default TextInForm;