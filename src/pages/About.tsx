import React, { useMemo } from 'react';
import SectionContainer from '../components/containers/SectionContainer.style';
import ColumnContainer from '../components/containers/FlexColumn.style';
import { AboutP } from '../components/fonts/P.style';
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
  const [isIntersecting, elementRef] = useIntersectionObserver();

  const tools = useMemo(() => {
    return aboutData.tools;
  }, []);

  return (
    <SectionContainer
      id='about'
      ref={elementRef}
      className={isIntersecting ? 'loaded' : undefined}
    >
      <TitleH2 $number={1}>About Me</TitleH2>
      <AboutWrapper>
        <ColumnContainer $gap='0.5em'>
          <AboutP>Hello, I’m Bun 🙂</AboutP>
          <AboutP>
            I’m a self-taught Front-End Developer with a passion for creating intuitive and
            user-friendly web experiences.
          </AboutP>
          <AboutP>
            My coding journey began during my time as a software PM. I had a passion for figuring
            out the logic behind apps and especially interested in how apps interact with users.
            This led me to pursue a career in front-end development.
          </AboutP>
          <AboutP>
            Currently, I’m focused on developing systems at{' '}
            <Anchor
              to='https://www.castlestech.com/payment-solutions/cashub/'
              target
              underline
              ariaLabel="CasHUB website"
            >
              Castles
            </Anchor>
            , ensuring user-friendly experiences with clean, maintainable code.
          </AboutP>
          <AboutP>
            In my spare time, I enjoy writing articles in{' '}
            <Anchor
              to='https://medium.com/@bun.coding'
              target
              underline
              ariaLabel="Bun's Medium link"
            >
              Medium
            </Anchor>{' '}
            to refine and share the skills I’ve picked up.{' '}
          </AboutP>
          <AboutP>Here are a few tools I’ve been working with recently:</AboutP>
          <GridColumn
            $template='1fr 1fr'
            $gap='10px'
          >
            {tools.map((tool, index) => {
              return (
                <BulletPoint
                  key={index}
                  $fontFamily='var(--font-mono)'
                  $fontSize='var(--fz-sm)'
                  $beforeFontSize='var(--fz-xs)'
                  $beforeLineHeight='13px'
                >
                  {tool}
                </BulletPoint>
              );
            })}
          </GridColumn>
        </ColumnContainer>
        <ImgContainer>
          <HeadShotImg
            src='/website/headShot.jpg'
            alt='headShot'
          />
        </ImgContainer>
      </AboutWrapper>
    </SectionContainer>
  );
};

export default About;
