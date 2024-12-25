import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type StyleLinkType = {
  $underline?: boolean;
};

const StyleLink = styled(Link)<StyleLinkType>`
  position: relative;
  text-decoration: none;
  color: var(--primary-font);

  ${({ $underline }) =>
    !$underline &&
    `
      display: flex;
      align-items: center;
    `}

  ${({ $underline }) =>
    $underline &&
    ` 
      &::after {
        content: "";
        display: block;
        width: 0px;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: var(--accent-color);
        opacity: 0.5;
        transition: all 0.16s ease-in;
      }

      &:hover::after {
        width: 100%;
      }
    `}

  &:hover {
    color: var(--accent-color);
  }
`;

type AnchorProps = {
  to: string;
  underline?: boolean;
  target?: boolean;
  children?: React.ReactNode;
  ariaLabel: string;
};

const Anchor = ({ to, underline, target, children, ariaLabel }: AnchorProps): React.ReactNode => {
  return (
    <StyleLink
      to={to}
      $underline={underline}
      target={target ? '_blank' : '_self'}
      aria-label={ariaLabel}
    >
      {children}
    </StyleLink>
  );
};

export default Anchor;
