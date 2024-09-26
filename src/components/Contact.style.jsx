import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const ContactDetail = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-top: 48px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 24px;
  margin-right: 8px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Label = styled.label`
  font-size: var(--fz-xl);
`;

const Input = styled.input`
  background-color: var(--lightest-navy);
  font-size: var(--fz-lg);
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  height: 54px;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background-color: var(--lightest-navy);
  font-size: var(--fz-lg);
  padding: 15px 20px;
  border: none;
  border-radius: 6px;
  color: var(--lightest-slate);

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 50px;
  color: var(--white);
  background: linear-gradient(
    120deg,
    var(--light-teal) -37.17%,
    var(--lightest-navy) 128.21%
  );
  font-size: var(--fz-xl);
  padding: 20px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 0.3s;
  width: 35%;
  align-self: flex-end;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export {
  ContactWrapper,
  ContactDetail,
  IconWrapper,
  Img,
  ContactForm,
  Label,
  Input,
  TextArea,
  Button,
};