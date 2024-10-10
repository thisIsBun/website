import SectionContainer from "../components/containers/SectionContainer.style";
import Heading3 from "../components/fonts/Heading2.style";
import { HeroP } from "../components/fonts/P.style";
import SocialMedia from "../components/others/SocialMedia";
import styled from "styled-components";

const HeroH1 = styled.h1`
  margin: 0;
  color: var(--lightest-slate);
  font-size: 80px;
  line-height: 0.8;

  @media (max-width: 1200px) {
    font-size: 74px;
  }

  @media (max-width: 992px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 576px) {
    font-size: 36px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  gap: 3vh;

  @media (max-width: 992px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 576px) {
    div a {
      font-size: 32px;
    }
  }
`;

const Hero = () => {
  return (
    <SectionContainer>
      <HeroWrapper>
        <HeroH1>Bun Chen</HeroH1>
        <Heading3>Self-taught Front-End Developer</Heading3>
        <HeroP>I enjoy crafting intuitive user interfaces on the web.</HeroP>
        <SocialMedia />
      </HeroWrapper>
    </SectionContainer>
  );
};

export default Hero;
