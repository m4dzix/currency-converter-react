import styled from "styled-components";

export const StyledDate = styled.p`
  font-family: monospace;
  font-size: 12px;
  align-self: flex-end;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.507);

  @media (max-width: 414px) and (orientation: portrait) {
    text-align: center;
  }
`;
