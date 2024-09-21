import {
  NavbarWrapper,
  NavList,
  NavItem,
  ResumeButton,
} from "../components/Navbar.style";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/experiences">Experiences</NavItem>
        <NavItem href="/blogs">Blogs</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavList>
      <ResumeButton href="/resume.pdf">Resume</ResumeButton>
    </NavbarWrapper>
  );
};

export default Navbar;
