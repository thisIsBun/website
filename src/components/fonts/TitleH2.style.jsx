import styled from "styled-components";

const TitleH2 = styled.h2`
  display: flex;
  align-items: flex-end;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  font-weight: 600;
  color: var(--lightest-slate);
  width: 100%;
  margin-top: var(--nav-height);
  margin-bottom: 40px;

  &::before {
    position: relative;
    bottom: 4px;
    counter-increment: title ${({ $number }) => $number};
    content: "0" counter(title) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }

  &::after {
    content: "";
    display: block;
    position: relative;
    top: -50%;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  }

  @media (max-width: 768px) {
    &::after {
      content: none;
    }
  }
`;

export default TitleH2;
