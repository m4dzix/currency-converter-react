import styled from "styled-components";

export const Paragraph = styled.p`
  padding: 10px;
  text-align: center;
  font-size: 20px;
  background-color: peachpuff;
  margin: 10px;
  border: 3px solid ${({ theme }) => theme.color.black};
  border-radius: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  font-style: italic;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.eperor};
  }
  &:active {
    color: ${({ theme }) => theme.color.boulder};
  }
`;

export const Span = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray};
`;
