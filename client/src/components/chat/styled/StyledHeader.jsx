import styled from "styled-components";

const StyledHeader = styled.header`
width: 100%;
height: 70px;
display: flex;
align-items: center;
padding: 0px 10px;
justify-content: space-between;
position: relative;
&:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color:
}
`;

export default StyledHeader;