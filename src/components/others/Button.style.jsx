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

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ContactButton = styled(Button)`
  font-size: var(--fz-xl);
  padding: 18px 0;
  margin-bottom: 50px;
  width: 35%;
  align-self: flex-end;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 992px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    font-size: var(--fz-lg);
    padding: 14px 0;
  }
`;

const NavButton = styled(Button)`
  font-size: var(--fz-md);
  padding: 15px 30px;

  @media (max-width: 992px) {
    font-size: var(--fz-sm);
    padding: 13px 25px;
  }

  @media (max-width: 768px) {
    font-size: var(--fz-xl);
    padding: 25px 60px;
  }

  @media (max-width: 576px) {
    font-size: var(--fz-lg);
    padding: 18px 48px;
  }
`;

export { ContactButton, NavButton };
