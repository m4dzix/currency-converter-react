import styled from "styled-components";

export const Title = styled.h1`
  margin: 10px;
  margin-bottom: 80px;
  padding: 20px 0;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  background-color: ${({ theme }) => theme.color.luxorGold};
  border-radius: 10px;
`;
