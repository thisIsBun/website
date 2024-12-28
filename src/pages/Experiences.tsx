import SectionContainer from '../components/containers/SectionContainer.style';
import TitleH2 from '../components/fonts/TitleH2.style';
import experienceData from '../data/experiences.data';
import FlexColumn from '../components/containers/FlexColumn.style';
import FlexRow from '../components/containers/FlexRow.style';
import BulletPoint from '../components/others/BulletPoint.style';
import styled from 'styled-components';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import Anchor from '../components/others/Anchor.style';
import Heading4 from '../components/fonts/Heading4.style';
import { ImArrowUpRight2 } from 'react-icons/im';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from '../components/fonts/P.style';

const ExperienceSection = styled(SectionContainer)`
  --card-padding: 30px;
  @media (max-width: 768px) {
    --card-padding: 20px;
  }
  @media (max-width: 576px) {
    --card-padding: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: var(--card-padding);
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 576px) {
    gap: 20px;
    .experienceItem {
      &::before {
        font-size: var(--fz-xs);
        font-family: var(--font-mono);
        line-height: 16px;
      }
    }
    .badgeWrapper {
      margin: 0;
      margin-top: 6px;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
`;

const PeriodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  flex-basis: 20%;
  flex-shrink: 0;
  color: var(--accent-color);
  height: 200px;

  @media (max-width: 992px) {
    flex-basis: 18%;
    font-size: var(--fz-xs);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
    scrollbar-width: none;
  }
`;

const Period = styled.div`
  padding-left: 1rem;
  width: 100%;
  height: 100%;
  border-left: 3px solid var(--header-background);
  align-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0 10px;
    border-left: none;
    height: 48px;
    min-width: max-content;
    border-bottom: 3px solid var(--header-background);
  }

  &.active {
    background-color: var(--header-background);
    border-color: var(--accent-color);
  }
`;

const CardContent = styled.div`
  min-height: 320px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Heading3 = styled.h3`
  margin: 0 0 10px 0;
  font-size: var(--fz-xl);
  font-weight: 500;
  line-height: 1.3;
  color: var(--primary-font);

  @media (max-width: 1200px) {
    font-size: 26px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin: 0 0 8px 0;
  }
`;

const Badge = styled.span`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  padding: 8px 16px;
  border-radius: 50px;
  background-color: var(--header-background);
  color: var(--accent-color);

  @media (max-width: 576px) {
    font-size: var(--fz-xs);
    padding: 6px 10px;
  }
`;

const Experiences = () => {
  const { t } = useTranslation('experiences');
  const [selectIndex, setSelectIndex] = useState(0);
  const [isIntersecting, elementRef] = useIntersectionObserver();

  const periods = experienceData.map((data) => data.period);
  const displayItem = experienceData[selectIndex];

  return (
    <ExperienceSection
      id='experiences'
      ref={elementRef}
      className={isIntersecting ? 'loaded' : undefined}
    >
      <TitleH2>{t('title')}</TitleH2>
      <FlexColumn $gap='20px' className='cardContainer'>
        <CardContainer>
          <PeriodWrapper>
            {periods.map((period, index) => (
              <Period
                key={index}
                onClick={() => setSelectIndex(index)}
                className={index === selectIndex ? 'active' : undefined}
              >
                {t(period)}
              </Period>
            ))}
          </PeriodWrapper>
          <CardContent>
            <Heading3>
              {t(displayItem.title)}
              <Paragraph>
                {t(displayItem.company)} · {t(displayItem.service)}
              </Paragraph>
            </Heading3>
            <FlexColumn $gap='5px'>
              {displayItem.description.map((item, index) => {
                return (
                  <BulletPoint
                    key={index}
                    $fontSize='var(--fz-md)'
                    className='experienceItem'
                  >
                    {t(item)}
                  </BulletPoint>
                );
              })}
            </FlexColumn>
            {displayItem.tools && displayItem.tools.length > 0 && (
              <FlexRow $margin='10px 0 0 20px' className='badgeWrapper'>
                {displayItem.tools.map((tool, index) => {
                  return <Badge key={index}>{t(tool)}</Badge>;
                })}
              </FlexRow>
            )}
          </CardContent>
        </CardContainer>
      </FlexColumn>
      <FlexRow $margin='1rem 0 0 var(--card-padding)'>
        <Anchor to='/website/resume.pdf' target ariaLabel='open Resume page'>
          <FlexRow>
            <Heading4>View English Resume</Heading4>
            <ImArrowUpRight2 className='arrowIcon' />
          </FlexRow>
        </Anchor>
      </FlexRow>
    </ExperienceSection>
  );
};

export default Experiences;
