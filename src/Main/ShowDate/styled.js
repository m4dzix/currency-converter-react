import styled from "styled-components";

export const StyledDate = styled.p`
  font-family: monospace;
  font-size: 12px;
  align-self: flex-end;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background-color: ${({ theme }) => theme.color.brighterBlack};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
  }
`;
