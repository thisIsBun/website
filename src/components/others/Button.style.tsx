import styled from 'styled-components';

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
  display: flex;
  justify-content: center;

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
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 14px 24px;
  font-size: inherit;
  font-family: inherit;

  @media (max-width: 992px) {
    padding: 13px 22px;
  }

  @media (max-width: 768px) {
    padding: 22px 45px;
  }

  @media (max-width: 576px) {
    padding: 16px 36px;
  }
`;

export { ContactButton, NavButton };
