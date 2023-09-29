import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  width: 600px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  resize: none;
  width: 100%;
  height: 100px;
  outline: none;
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
