import SectionContainer from "../components/containers/SectionContainer.style";
import Heading3 from "../components/fonts/Heading3.style";
import { HeroP } from "../components/fonts/P.style";
import Anchor from "../components/others/Anchor.style";
import SocialMedia from "../components/others/SocialMedia";
import styled from "styled-components";

const HeroH1 = styled.p`
  margin: 0 0 0 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 992px) {
    font-size: 0.8rem;
    margin-left: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

const HeroH2 = styled.h2`
  margin: 0;
  color: var(--lightest-slate);
  font-size: 80px;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 70px;
    line-height: 1.1;
  }

  @media (max-width: 992px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 25vh 0;
  }

  @media (max-width: 576px) {
    margin: 18vh 0;
  }
`;

const Hero = () => {
  return (
    <SectionContainer>
      <HeroWrapper>
        <HeroH1>Hi, my name is</HeroH1>
        <HeroH2>Bun Chen.</HeroH2>
        <Heading3>I build things for the web.</Heading3>
        <HeroP>
          I’m a software engineer specializing in building exceptional digital
          experiences. Currently, I’m focused on developing system at{" "}
          <Anchor
            to="https://www.castlestech.com/payment-solutions/cashub/"
            target
            underline
          >
            Castles
          </Anchor>
          , ensuring user-friendly experiences through clean and maintainable
          code.
        </HeroP>
        <SocialMedia />
      </HeroWrapper>
    </SectionContainer>
  );
};

export default Hero;
