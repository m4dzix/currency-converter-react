import styled from "styled-components"

export const Paragraph = styled.p`
    padding: 10px;
    text-align: center;
    font-size: 20px;
    background-color: peachpuff;
    margin: 10px;
    border: 3px solid black;
    border-radius: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color:black;

    &:hover{
        cursor: pointer;
        color: #555;
    }
    &:active{
        color: #777;
    }
`;

export const Span = styled.span `
    font-size: 15px;
`;