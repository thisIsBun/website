import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavButton } from "../components/others/Button.style";
import navbarData from "../data/navbar.data";
import styled from "styled-components";
import Anchor from "../components/others/Anchor.style";
import nav_open from "../assets/nav_open.svg";
import nav_close from "../assets/nav_close.svg";
import FlexRow from "../components/containers/FlexRow.style";
import resume from "../assets/resume.pdf";

const Header = styled.nav`
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

  @media (max-width: 768px) {
    padding: 0;
    .navWrapper {
      position: fixed;
      flex-direction: column;
      justify-content: center;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      background-color: var(--light-navy);
      transition: all 0.25s ease-in;
    }
  }
`;

const NavIcon = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 35px;
    right: 30px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: var(--fz-xl);
    gap: 60px;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
    }

    li::before {
      align-self: center;
    }
  }
`;

const NavItem = ({ href, children, handleNavToggle }) => {
  return (
    <li onClick={handleNavToggle}>
      <Anchor to={href}>{children}</Anchor>
    </li>
  );
};

const handleOpenResume = () => {
  window.open(resume, "_blank", "noopener noreferrer");
};

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [navOpen, setNavOpen] = useState(false);
  const headerRef = useRef();
  const navWrapper = useRef();
  const { hash } = useLocation();

  useEffect(() => {
    const handleWindowScroll = () => {
      // if (window.innerWidth <= 768) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        headerRef.current.style.top = "-100px";
      } else {
        headerRef.current.style.top = "0px";
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

  const handleNavToggle = () => {
    navWrapper.current.style.right = navOpen ? "-100%" : "0";
    setNavOpen(!navOpen);
  };

  return (
    <Header ref={headerRef}>
      <NavIcon src={nav_open} alt="open nav" onClick={handleNavToggle} />
      <FlexRow $gap="40px" className="navWrapper" ref={navWrapper}>
        <NavIcon src={nav_close} alt="close nav" onClick={handleNavToggle} />
        <NavList>
          {navbarData.map(({ name, path }) => {
            return (
              <NavItem key={name} href={path} handleNavToggle={handleNavToggle}>
                {name}
              </NavItem>
            );
          })}
        </NavList>
        <NavButton onClick={handleOpenResume}>Resume</NavButton>
      </FlexRow>
    </Header>
  );
};

export default Navbar;
