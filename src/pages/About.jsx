import { useMemo } from "react";
import SectionContainer from "../components/containers/SectionContainer.style";
import ColumnContainer from "../components/containers/FlexColumn.style";
import { AboutP } from "../components/fonts/P.style";
import GridColumn from "../components/containers/GridColumn.style";
import aboutData from "../data/about.data";
import TitleH2 from "../components/fonts/TitleH2.style";
import BulletPoint from "../components/others/BulletPoint.style";
import Anchor from "../components/others/Anchor.style";
import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 65%;
    align-self: center;
  }
`;

const HeadShotImg = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .toolsWrapper {
      padding-right: 240px;
    }
  }
`;

const About = () => {
  const tools = useMemo(() => {
    return aboutData.tools;
  }, []);

  return (
    <SectionContainer id="about">
      <TitleH2 $number="1">About Me</TitleH2>
      <AboutWrapper>
        <ColumnContainer $gap="15px">
          <AboutP>
            Hello! My name is Bun and I enjoy building things on the web.
          </AboutP>
          <AboutP>
            I discovered my passion for coding while working as a software PM. I
            joined Alpha Camp’s web development course, and I found coding is
            like a detective who piecing clues together to solve puzzles. After
            graduated from Alpha Camp, I successfully transitioned into a
            front-end engineer role.
          </AboutP>
          <AboutP>
            Recently, I’ve been focused on delivering features that meet
            customer needs while maintaining clean, readable code.
          </AboutP>
          <AboutP>
            In my spare time, I love to write{" "}
            <Anchor to="https://medium.com/@bun.coding" target underline>
              blogs
            </Anchor>{" "}
            to share and consolidate the skills I’ve picked up.
          </AboutP>
          <AboutP>Here are a few tools I’ve been working with recently:</AboutP>
          <GridColumn $template="1fr 1fr" $gap="10px" className="toolsWrapper">
            {tools.map((tool, index) => {
              return (
                <BulletPoint
                  key={index}
                  $fontFamily="var(--font-mono)"
                  $fontSize="var(--fz-xs)"
                  $beforeFontSize="var(--fz-sm)"
                  $beforeLineHeight="12px"
                >
                  {tool}
                </BulletPoint>
              );
            })}
          </GridColumn>
        </ColumnContainer>
        <ImgContainer>
          <HeadShotImg src="/headShot.jpg" alt="headShot" />
        </ImgContainer>
      </AboutWrapper>
    </SectionContainer>
  );
};

export default About;
