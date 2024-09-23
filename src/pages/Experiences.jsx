import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import experienceData from "../data/experiences.data";
import FlexColumn from "../components/containers/FlexColumn.style";
import BulletPoint from "../components/others/BulletPoint.style";
import {
  CardContent,
  CardPeriod,
  CardWrapper,
} from "../components/Experiences.style";
import H3 from "../components/fonts/H3.style";

const Experiences = () => {
  return (
    <SectionContainer>
      <TitleH2 $number="2">Where I’ve Worked</TitleH2>
      <FlexColumn $gap="20px">
        {experienceData.map((data, index) => {
          return (
            <CardWrapper key={index}>
              <CardPeriod>{data.period}</CardPeriod>
              <CardContent>
                <H3>
                  {data.title} · {data.company}
                </H3>
                <FlexColumn $gap="5px">
                  {data.description.map((item, index) => {
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
              </CardContent>
            </CardWrapper>
          );
        })}
      </FlexColumn>
    </SectionContainer>
  );
};

export default Experiences;
