import React from "react";
import styled from "styled-components";

const InputField = styled.input`
width: 100%;

border-top: none;
border-left: none;
border-right: none;
border-bottom: 2px solid ${props => props.error ? "red" : "lightgrey"};

font-family: "Montserrat", sans-serif;
font-weight: 500;

background-color: transparent;

padding-bottom: 5px;

transition: border-bottom 1s ease-in-out;

&:placeholder {
    color: lightgrey;
}

&:focus {
    outline: none;
    border-bottom: 2px solid ${props => props.error ? "red" : "#2691d9"};
}
`
export default InputField;