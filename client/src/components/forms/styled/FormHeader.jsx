import styled from "styled-components";

const FormHeader = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
font-family: "Montserrat", sans-serif;
font-weight: 600;
letter-spacing: 0.05em;
position: relative;
&:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
    bottom: 0;
    left: 0;
}
`

export default FormHeader;