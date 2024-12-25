import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import navbarData from '../data/navbar.data';
import styled from 'styled-components';
import Anchor from '../components/others/Anchor.style';
import FlexRow from '../components/containers/FlexRow.style';
import { AiOutlineGlobal } from 'react-icons/ai';
import { LANGUAGES } from '../utils/constant';
import { useTranslation } from 'react-i18next';

const Header = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height-desktop);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 35px 50px;
  gap: 40px;
  background-color: var(--header-background);
  z-index: 28;
  transition: top var(--animation-timing);

  @media (max-width: 1200px) {
    padding: 30px 40px;
  }

  @media (max-width: 992px) {
    height: var(--nav-height-992px);
    padding: 10px 25px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 576px) {
    height: var(--nav-height-576px);
  }
`;

const NavList = styled.ol`
  display: flex;
  gap: 40px;
  list-style-type: none;

  li a {
    padding: 10px 23px;
    border: 1px solid transparent;
  }

  li.active a {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
      background-color: var(--accent-color);
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

    &:has(input:checked) + div {
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

const NavWrapper = styled(FlexRow)`
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  @media (max-width: 992px) {
    font-size: 12px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    font-size: var(--fz-xl);
    position: fixed;
    flex-direction: column;
    justify-content: center;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--header-background);
    transition: all var(--animation-timing);
    gap: 40px;
  }

  @media (max-width: 576px) {
    font-size: var(--fz-md);
    gap: 24px;
  }
`;

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  handleNavToggle: MouseEventHandler;
  className: 'active' | undefined;
  ariaLabel: string;
};

const NavItem = ({ href, children, handleNavToggle, className, ariaLabel }: NavItemProps) => {
  return (
    <li
      onClick={handleNavToggle}
      className={className}
    >
      <Anchor
        to={href}
        ariaLabel={`${ariaLabel} section`}
      >
        {children}
      </Anchor>
    </li>
  );
};

const LangButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 23px;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    border-color: var(--accent-color);
  }
`;

const Navbar = () => {
  const { t, i18n } = useTranslation('navbar');
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

  const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh-TW' : 'en');
  };

  return (
    <Header ref={headerRef}>
      <Hamburger aria-label={t('ToggleNavigationMenu')}>
        <HamburgerCheckbox
          type='checkbox'
          ref={inputRef}
        ></HamburgerCheckbox>
      </Hamburger>
      <NavWrapper $gap='40px'>
        <NavList>
          {navbarData.map(({ name, path }) => {
            return (
              <NavItem
                key={name}
                href={path}
                handleNavToggle={handleNavToggle}
                className={hash.includes(name.toLowerCase()) ? 'active' : undefined}
                ariaLabel={t(name)}
              >
                {t(name)}
              </NavItem>
            );
          })}
        </NavList>
        <LangButton onClick={handleChangeLang}>
          <AiOutlineGlobal />
          {i18n.language === 'en' ? LANGUAGES[1].text : LANGUAGES[0].text}
        </LangButton>
      </NavWrapper>
    </Header>
  );
};

export default Navbar;
