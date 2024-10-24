import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavButton } from '../components/others/Button.style';
import navbarData from '../data/navbar.data';
import styled from 'styled-components';
import Anchor from '../components/others/Anchor.style';
import nav_open from '../assets/nav_open.svg';
import nav_close from '../assets/nav_close.svg';
import FlexRow from '../components/containers/FlexRow.style';

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

  @media (max-width: 1200px) {
    padding: 30px 40px;
  }

  @media (max-width: 992px) {
    height: 80px;
    padding: 10px 25px;
    .navWrapper {
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    .navWrapper {
      position: fixed;
      flex-direction: column;
      justify-content: center;
      top: 0;
      right: -100%;
      width: 100%;
      height: 110vh;
      background-color: var(--light-navy);
      transition: all 0.25s ease-in;
      gap: 40px;
    }
  }

  @media (max-width: 576px) {
    height: 50px;
    .navWrapper {
      gap: 24px;
    }
  }
`;

const NavIcon = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 30px;
  }

  @media (max-width: 576px) {
    top: 11px;
    right: 10px;
    width: 32px;
  }
`;

const NavList = styled.ol`
  display: flex;
  gap: 40px;
  list-style-type: none;
  counter-reset: li;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);

  li.active a {
    color: var(--green);
  }

  li a:before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero) '. ';
    color: var(--green);
  }

  @media (max-width: 992px) {
    font-size: 12px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: var(--fz-xl);
    gap: 60px;
    padding: 0;

    a {
      display: flex;
      flex-direction: column;
    }

    a::before {
      align-self: center;
    }
  }

  @media (max-width: 576px) {
    font-size: var(--fz-md);
    gap: 28px;
  }
`;

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  handleNavToggle: MouseEventHandler;
  className: string | undefined;
};

const NavItem = ({ href, children, handleNavToggle, className }: NavItemProps) => {
  return (
    <li
      onClick={handleNavToggle}
      className={className}
    >
      <Anchor to={href}>{children}</Anchor>
    </li>
  );
};

const handleOpenResume = () => {
  window.open('/website/resume.pdf', '_blank', 'noopener noreferrer');
};

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState<number>(window.scrollY);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const navWrapper = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    const handleWindowScroll = () => {
      const currentScrollY = window.scrollY;
      if (!headerRef.current) return;
      if (currentScrollY > prevScrollY) {
        headerRef.current.style.top = '-100px';
      } else {
        headerRef.current.style.top = '0px';
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const handleNavToggle = () => {
    if (navWrapper.current) {
      navWrapper.current.style.right = navOpen ? '-100%' : '0';
    }
    setNavOpen(!navOpen);
  };

  return (
    <Header ref={headerRef}>
      <NavIcon
        src={nav_open}
        alt='open nav'
        onClick={handleNavToggle}
      />
      <FlexRow
        $gap='40px'
        className='navWrapper'
        ref={navWrapper}
      >
        <NavIcon
          src={nav_close}
          alt='close nav'
          onClick={handleNavToggle}
        />
        <NavList>
          {navbarData.map(({ name, path }) => {
            return (
              <NavItem
                key={name}
                href={path}
                handleNavToggle={handleNavToggle}
                className={hash.includes(name.toLowerCase()) ? 'active' : undefined}
              >
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
