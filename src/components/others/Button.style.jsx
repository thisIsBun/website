import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 50px;
  color: var(--white);
  background: linear-gradient(
    120deg,
    var(--light-teal) -37.17%,
    var(--lightest-navy) 128.21%
  );
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
  `;

const ContactButton = styled(Button)`
  font-size: var(--fz-xl);
  padding: 20px 20px;
  margin-bottom: 50px;
  width: 35%;
  align-self: flex-end;
`;

const NavButton = styled(Button)`
  font-size: var(--fz-lg);
  padding: 20px 40px;
`;

export { ContactButton, NavButton };
