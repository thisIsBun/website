import { useMemo } from "react";
import SectionContainer from "../components/containers/SectionContainer.style";
import ColumnContainer from "../components/containers/FlexColumn.style";
import { AboutP } from "../components/fonts/P.style";
import GridColumn from "../components/containers/GridColumn.style";
import aboutData from "../data/about.data";
import TitleH2 from "../components/fonts/TitleH2.style";
import { ImgContainer, HeadShotImg } from "../components/About.style";
import BulletPoint from "../components/others/BulletPoint.style";

const About = () => {
  const content = useMemo(() => {
    return aboutData.content.split("&&").map((data) => data.trim());
  }, []);

  const tools = useMemo(() => {
    return aboutData.tools;
  }, []);

  return (
    <SectionContainer>
      <TitleH2 $number="1">About Me</TitleH2>
      <GridColumn $template="3fr 2fr" $gap="30px">
        <ColumnContainer $gap="15px">
          {content.map((data, index) => {
            return <AboutP key={index}>{data}</AboutP>;
          })}
          <GridColumn $template="1fr 1fr" $gap="10px">
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
      </GridColumn>
    </SectionContainer>
  );
};

export default About;
