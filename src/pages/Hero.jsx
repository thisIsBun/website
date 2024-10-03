import SectionContainer from "../components/containers/SectionContainer.style";
import Heading3 from "../components/fonts/Heading3.style";
import { HeroP } from "../components/fonts/P.style";
import Anchor from "../components/others/Anchor.style";
import SocialMedia from "../components/others/SocialMedia";
import styled from "styled-components";

const HeroH1 = styled.h1`
  margin: 0 0 0 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
`;

const HeroH2 = styled.h2`
  margin: 0;
  color: var(--lightest-slate);
  font-size: clamp(40px, 8vw, 80px);
`;


const Hero = () => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

export default Hero;
