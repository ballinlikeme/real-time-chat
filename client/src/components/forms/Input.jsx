import React from "react";
import InputContainer from "./styled/InputContainer";
import InputField from "./styled/InputField";

const Input = ({type, placeholder, setter, value, error}) => {
    return (
        <InputContainer>
            <InputField error={error} onChange={e => setter(e.target.value)} value={value} placeholder={placeholder} type={type}/>
        </InputContainer>
    )
}

export default Input;