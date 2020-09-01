import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 10px;
  text-align: center;
  align-self: center;
  width: 100%;
`;
export const Paragraph = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.tundora};
`;
export const LabelText = styled.span`
  display: inline-block;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 20px;
`;
export const Span = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.color.tundora};
`;
export const Select = styled.select`
  padding: 5px;
  border-radius: 10px;
  border: solid 2px ${({ theme }) => theme.color.gray};
`;
export const Field = styled.input`
  padding: 5px;
  border-radius: 10px;
  border: solid 3px ${({ theme }) => theme.color.gray};
`;
export const Button = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.tacha};
  text-transform: uppercase;
  padding: 10px;
  border: solid 3px ${({ theme }) => theme.color.black};
  border-radius: 10px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
export const Fieldset = styled.fieldset`
  border: solid 4px ${({ theme }) => theme.color.black};
  background-color: peachpuff;
  border-radius: 10px;
`;
export const Legend = styled.legend`
  font-size: 30px;
  background-color: ${({ theme }) => theme.color.tacha};
  padding: 5px 15px;
  border: solid 4px ${({ theme }) => theme.color.black};
  border-radius: 10px;
`;
