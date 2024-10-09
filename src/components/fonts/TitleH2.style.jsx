import styled from "styled-components";

const TitleH2 = styled.h2`
  display: flex;
  align-items: flex-end;
  font-size: 32px;
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
    width: 300px;
    height: 1px;
    margin: 20px;
    background-color: var(--lightest-navy);
  }

  @media (max-width: 1200px) {
    font-size: 30px;
    margin-bottom: 35px;
  }

  @media (max-width: 992px) {
    font-size: 28px;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    &::after {
      content: none;
    }
  }

  @media (max-width: 576px) {
    font-size: 26px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export default TitleH2;
