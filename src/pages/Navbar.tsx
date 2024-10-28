import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavButton } from '../components/others/Button.style';
import navbarData from '../data/navbar.data';
import styled from 'styled-components';
import Anchor from '../components/others/Anchor.style';
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
  transition: top var(--animation-timing);

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
      height: 100vh;
      background-color: var(--light-navy);
      transition: all var(--animation-timing);
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

const Hamburger = styled.label`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    position: absolute;
    right: var(--hamburger-margin);
    z-index: 2;
    cursor: pointer;

    &::before,
    &::after,
    & input {
      content: '';
      width: var(--bar-width);
      height: var(--bar-height);
      background-color: var(--green);
      border-radius: 9999px;
      transform-origin: right center;
      transition: all var(--animation-timing);
    }

    &:has(input:checked)::before {
      rotate: -45deg;
      width: calc(var(--hamburger-height) * 1.414213562);
      translate: 0 calc(var(--bar-height) / -2);
    }

    &:has(input:checked)::after {
      rotate: 45deg;
      width: calc(var(--hamburger-height) * 1.414213562);
      translate: 0 calc(var(--bar-height) / 2);
    }

    &:has(input:checked) + .navWrapper {
      right: 0%;
    }
  }
`;

const HamburgerCheckbox = styled.input`
  appearance: none;
  padding: 0;
  margin: 0;
  outline: none;
  pointer-events: none;

  &:checked {
    opacity: 0;
    width: 0;
  }
`;

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  handleNavToggle: MouseEventHandler;
  className: string | undefined;
  ariaLabel: string;
};

const NavItem = ({
  href,
  children,
  handleNavToggle,
  className,
  ariaLabel,
}: NavItemProps) => {
  return (
    <li onClick={handleNavToggle} className={className}>
      <Anchor to={href} ariaLabel={`${ariaLabel} section`}>
        {children}
      </Anchor>
    </li>
  );
};

const handleOpenResume = () => {
  window.open('/website/resume.pdf', '_blank', 'noopener noreferrer');
};

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState<number>(window.scrollY);
  const headerRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    const handleWindowScroll = () => {
      const currentScrollY = window.scrollY;
      if (!headerRef.current) return;
      if (currentScrollY < prevScrollY || prevScrollY < 800) {
        headerRef.current.style.top = '0px';
      } else {
        headerRef.current.style.top = '-100px';
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
    if (inputRef.current) {
      inputRef.current.checked = false;
    }
  };

  return (
    <Header ref={headerRef}>
      <h1 style={{ color: 'transparent' }}>Bun</h1>
      <Hamburger aria-label="Toggle navigation menu">
        <HamburgerCheckbox type="checkbox" ref={inputRef}></HamburgerCheckbox>
      </Hamburger>
      <FlexRow $gap="40px" className="navWrapper">
        <NavList>
          {navbarData.map(({ name, path }) => {
            return (
              <NavItem
                key={name}
                href={path}
                handleNavToggle={handleNavToggle}
                className={
                  hash.includes(name.toLowerCase()) ? 'active' : undefined
                }
                ariaLabel={name}
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
