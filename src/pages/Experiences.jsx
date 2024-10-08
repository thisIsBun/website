import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import experienceData from "../data/experiences.data";
import FlexColumn from "../components/containers/FlexColumn.style";
import FlexRow from "../components/containers/FlexRow.style";
import BulletPoint from "../components/others/BulletPoint.style";
import styled from "styled-components";

const CardPeriod = styled.div`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  flex-basis: 18%;
  flex-shrink: 0;
  padding-top: 9px;

  @media (max-width: 1200px) {
    padding-top: 8px;
  }

  @media (max-width: 992px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    font-size: var(--fz-md);
  }

  @media (max-width: 576px) {
    font-size: var(--fz-sm);
  }
`;

const CardContent = styled.div``;

const Badge = styled.span`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  padding: 8px 16px;
  border-radius: 50px;
  background-color: var(--badge-bg);
  color: var(--badge-color);

  @media (max-width: 576px) {
    font-size: var(--fz-xs);
    padding: 6px 12px;
  }
`;

const Heading3 = styled.h3`
  margin: 0 0 10px 0;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1.3;
  color: var(--lightest-slate);

  @media (max-width: 1200px) {
    font-size: 26px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin: 0 0 8px 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  border-radius: 8px;

  &:hover {
    background-color: var(--light-navy);
  }

  @media (max-width: 1200px) {
    .experienceItem {
      font-size: 17px;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 10px;

    .experienceItem {
      margin-bottom: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 576px) {
    gap: 10px;
    padding: 10px;
    .experienceItem {
      font-size: 16px;
      margin-bottom: 0.5rem;

      &::before {
        font-size: var(--fz-sm);
      }
    }
    .badgeWrapper {
      margin-left: 0;
    }
  }
`;

const Experiences = () => {
  return (
    <SectionContainer id="experiences">
      <TitleH2 $number="2">Where I’ve Worked</TitleH2>
      <FlexColumn $gap="20px" className="cardContainer">
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
                          className="experienceItem"
                        >
                          {item}
                        </BulletPoint>
                      );
                    })}
                  </FlexColumn>
                  {tools?.length > 0 && (
                    <FlexRow $margin="10px 0 0 20px" className="badgeWrapper">
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
