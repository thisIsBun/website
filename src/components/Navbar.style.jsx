import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 35px 50px;
  gap: 40px;
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

const StyledNavItem = styled.a`
  text-decoration: none;
  color: rgb(204, 214, 246);

  &:hover {
    color: var(--green);
  }
`;

const NavItem = ({ href, children }) => {
  return (
    <li>
      <StyledNavItem href={href}>{children}</StyledNavItem>
    </li>
  );
};

export { NavbarWrapper, NavList, NavItem };
