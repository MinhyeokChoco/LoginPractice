import styled from "styled-components";

export const Header = styled.div`
    width : 100%;
    min-height : 80px;
    background-color : ${props => props.color || 'rebeccapurple'};
    display : flex;
    justify-content : center;
    align-items : center;
`

export const Body = styled.div`
    width : 100%;
    min-height: 500px;
    background-color : lightblue;
    & > form {
        display : block;
        width : 500px
        min-height : 400px;
        margin : autp;
    }

    .name {}
`

export const Footer = styled.div`
    width : 100%;
    min-height : 150px
    background-color : red;
`