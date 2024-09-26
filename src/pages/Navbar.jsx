import { NavbarWrapper, NavList, NavItem } from "../components/Navbar.style";
import { NavButton } from "../components/others/Button.style";

const Navbar = () => {
  const handleOpenResume = () => {
    window.open("/resume.pdf", "_blank", "noopener noreferrer");
  };
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/experiences">Experiences</NavItem>
        <NavItem href="/blogs">Blogs</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavList>
      <NavButton onClick={handleOpenResume}>Resume</NavButton>
    </NavbarWrapper>
  );
};

export default Navbar;
