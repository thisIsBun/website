import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import experienceData from "../data/experiences.data";
import FlexColumn from "../components/containers/FlexColumn.style";
import FlexRow from "../components/containers/FlexRow.style";
import BulletPoint from "../components/others/BulletPoint.style";
import {
  CardContent,
  CardPeriod,
  Badge,
  Heading3,
} from "../components/Experiences.style";
import CardWrapper from "../components/others/CardWrapper.style";

const Experiences = () => {
  return (
    <SectionContainer id="experiences">
      <TitleH2 $number="2">Where I’ve Worked</TitleH2>
      <FlexColumn $gap="20px">
        {experienceData.map(
          ({ period, title, company, description, tools }, index) => {
            return (
              <CardWrapper key={index}>
                <CardPeriod>{period}</CardPeriod>
                <CardContent>
                  <Heading3>
                    {title} · {company}
                  </Heading3>
                  <FlexColumn $gap="5px">
                    {description.map((item, index) => {
                      return (
                        <BulletPoint
                          key={index}
                          $fontSize="var(--fz-lg)"
                          $beforeFontSize="var(--fz-lg)"
                          $beforeLineHeight="var(--fz-xl)"
                        >
                          {item}
                        </BulletPoint>
                      );
                    })}
                  </FlexColumn>
                  {tools?.length > 0 && (
                    <FlexRow $margin="10px 0 0 20px">
                      {tools.map((tool, index) => {
                        return <Badge key={index}>{tool}</Badge>;
                      })}
                    </FlexRow>
                  )}
                </CardContent>
              </CardWrapper>
            );
          }
        )}
      </FlexColumn>
    </SectionContainer>
  );
};

export default Experiences;
