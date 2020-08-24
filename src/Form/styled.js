import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 10px;
  text-align: center;
  align-self: center;
  width: 100%;
`;
export const Paragraph = styled.p`
  font-size: 15px;
  color: #444;
`;
export const LabelText = styled.span`
  display: inline-block;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 20px;
`;
export const Span = styled.span`
  font-size: 10px;
  color: #555;
`;
export const Select = styled.select`
  padding: 5px;
  border-radius: 10px;
  border: solid 2px #888;
`;
export const Field = styled.input`
  padding: 5px;
  border-radius: 10px;
  border: solid 3px #888;
`;
export const Button = styled.button`
  display: inline-block;
  background-color: hsl(41, 56%, 62%);
  text-transform: uppercase;
  padding: 10px;
  border: solid 3px black;
  border-radius: 10px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    background-color: hsl(41, 56%, 65%);
  }

  &:active {
    background-color: hsl(41, 56%, 70%);
  }
`;
export const Fieldset = styled.fieldset`
  border: solid 4px black;
  background-color: peachpuff;
  border-radius: 10px;
`;
export const Legend = styled.legend`
  font-size: 30px;
  background-color: hsl(41, 56%, 62%);
  padding: 5px 15px;
  border: solid 4px black;
  border-radius: 10px;
`;
