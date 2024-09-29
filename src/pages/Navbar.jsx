import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarWrapper, NavList, NavItem } from "../components/Navbar.style";
import { NavButton } from "../components/others/Button.style";
import navbarData from "../data/navbar.data";

const handleOpenResume = () => {
  window.open("/resume.pdf", "_blank", "noopener noreferrer");
};

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const navWrapperRef = useRef();
  const { hash } = useLocation();

  useEffect(() => {
    const handleWindowScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        navWrapperRef.current.style.top = "-100px";
      } else {
        navWrapperRef.current.style.top = "0px";
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <NavbarWrapper ref={navWrapperRef}>
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
