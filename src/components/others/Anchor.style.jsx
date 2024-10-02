import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--lightest-slate);

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
        background-color: var(--green);
        opacity: 0.5;
        transition: all 0.16s ease-in;
      }

      &:hover::after {
        width: 100%;
      }
    `}

  &:hover {
    color: var(--green);
  }
`;

const Anchor = ({ to, underline, target, children }) => {
  return (
    <StyleLink
      to={to}
      $underline={underline}
      target={target ? "_blank" : "_self"}
    >
      {children}
    </StyleLink>
  );
};

export default Anchor;
