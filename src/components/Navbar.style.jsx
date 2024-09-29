import styled from "styled-components";
import Anchor from "./others/Link.style";

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 35px 50px;
  gap: 40px;
  background-color: rgba(10, 25, 47, 0.85);
  z-index: 28;
  transition: top 0.3s;
`;

const NavList = styled.ol`
  display: flex;
  gap: 40px;
  list-style-type: none;
  counter-reset: li;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);

  li:before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero) ". ";
    color: var(--green);
  }
`;

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Anchor to={href}>{children}</Anchor>
    </li>
  );
};

export { NavbarWrapper, NavList, NavItem };
