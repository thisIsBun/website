import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavButton } from "../components/others/Button.style";
import navbarData from "../data/navbar.data";
import styled from "styled-components";
import Anchor from "../components/others/Anchor.style";

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
