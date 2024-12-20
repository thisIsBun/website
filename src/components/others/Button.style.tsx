import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--primary-font);
    background-color: var(--accent-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ContactButton = styled(Button)`
  font-size: var(--fz-md);
  height: 1.5;
  padding: 7px 25px;
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
