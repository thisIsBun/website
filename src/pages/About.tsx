import { useTranslation, Trans } from 'react-i18next';
import SectionContainer from '../components/containers/SectionContainer.style';
import ColumnContainer from '../components/containers/FlexColumn.style';
import { Paragraph } from '../components/fonts/P.style';
import GridColumn from '../components/containers/GridColumn.style';
import aboutData from '../data/about.data';
import TitleH2 from '../components/fonts/TitleH2.style';
import BulletPoint from '../components/others/BulletPoint.style';
import Anchor from '../components/others/Anchor.style';
import styled from 'styled-components';
import useIntersectionObserver from '../utils/useIntersectionObserver';

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
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  aspect-ratio: 16 / 16;
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;

  @media (max-width: 992px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const About = () => {
  const { t } = useTranslation('about');
  const [isIntersecting, elementRef] = useIntersectionObserver();
  const tools = aboutData.tools;

  return (
    <SectionContainer
      id='about'
      ref={elementRef}
      className={isIntersecting ? 'loaded' : undefined}
    >
      <TitleH2>{t('title')}</TitleH2>
      <AboutWrapper>
        <ColumnContainer $gap='0.5em'>
          <Paragraph>{t('content.partI')} 👋</Paragraph>
          <Paragraph>{t('content.partII')}</Paragraph>
          <Paragraph>{t('content.partIII')}</Paragraph>
          <Paragraph>
            <Trans
              i18nKey={t('content.partIV')}
              components={{
                anchor: (
                  <Anchor
                    to='https://www.castlestech.com/payment-solutions/cashub/'
                    target
                    underline
                    ariaLabel='CasHUB website'
                  />
                ),
              }}
            />
          </Paragraph>
          <Paragraph>
            <Trans
              i18nKey={t('content.partV')}
              components={{
                anchor: (
                  <Anchor
                    to='https://medium.com/@bun.coding'
                    target
                    underline
                    ariaLabel="Bun's Medium link"
                  />
                ),
              }}
            />
          </Paragraph>
          <Paragraph>{t('content.partVI')}</Paragraph>
          <GridColumn $template='1fr 1fr' $gap='10px'>
            {tools.map((tool, index) => {
              return (
                <BulletPoint
                  key={index}
                  $fontFamily='var(--font-mono)'
                  $fontSize='var(--fz-sm)'
                  $color='var(--primary-font)'
                >
                  {tool}
                </BulletPoint>
              );
            })}
          </GridColumn>
        </ColumnContainer>
        <ImgContainer>
          <HeadShotImg src='/website/headShot.webp' alt='headShot' />
        </ImgContainer>
      </AboutWrapper>
    </SectionContainer>
  );
};

export default About;
