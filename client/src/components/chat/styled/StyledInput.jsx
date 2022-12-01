import styled from "styled-components";

const StyledInput = styled.input`
width: 100%;
height: 100%;
padding: 5px;
font-family: "Montserrat", sans-serif;
font-size: 14px;
color: black;
border-left: none;
border-right: none;
border-bottom: none;
border-top: 1px solid lightgrey;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
&:focus {
    outline: none;
}
`;

export default StyledInput;