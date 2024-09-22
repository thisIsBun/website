import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeadShotImg = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;

const ToolSpan = styled.span`
  position: relative;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  padding-left: 20px;

  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
  }
`;

export { ImgContainer, HeadShotImg, ToolSpan };
