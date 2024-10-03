import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import experienceData from "../data/experiences.data";
import FlexColumn from "../components/containers/FlexColumn.style";
import FlexRow from "../components/containers/FlexRow.style";
import BulletPoint from "../components/others/BulletPoint.style";
import CardWrapper from "../components/others/CardWrapper.style";
import styled from "styled-components";

const CardPeriod = styled.div`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  flex-basis: 18%;
  flex-shrink: 0;
  padding-top: 4px;
`;

const CardContent = styled.div``;

const Badge = styled.span`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  padding: 8px 16px;
  border-radius: 50px;
  background-color: var(--badge-bg);
  color: var(--badge-color);
`;

const Heading3 = styled.h3`
  margin: 0 0 10px 0;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1.3;
  color: var(--lightest-slate);
`;

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
