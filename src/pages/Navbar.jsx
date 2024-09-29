import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavbarWrapper, NavList, NavItem } from "../components/Navbar.style";
import { NavButton } from "../components/others/Button.style";
import navbarData from "../data/navbar.data";

const handleOpenResume = () => {
  window.open("/resume.pdf", "_blank", "noopener noreferrer");
};

const Navbar = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <NavbarWrapper>
      <NavList>
        {navbarData.map(({ name, path }) => {
          return (
            <NavItem key={name} href={path}>
              {name}
            </NavItem>
          );
        })}
      </NavList>
      <NavButton onClick={handleOpenResume}>Resume</NavButton>
    </NavbarWrapper>
  );
};

export default Navbar;
