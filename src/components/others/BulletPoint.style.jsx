import styled from "styled-components";

const BulletPoint = styled.span`
  position: relative;
  padding-left: 20px;
  font-family: ${({ $fontFamily }) => $fontFamily || "inherit"};
  font-size: ${({ $fontSize }) => $fontSize};

  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
    font-size: ${({ $beforeFontSize }) => $beforeFontSize};
    line-height: ${({ $beforeLineHeight }) => $beforeLineHeight};
  }
`;

export default BulletPoint;
