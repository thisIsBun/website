import { H1, H2, H3 } from "../components/Hero.style";
import SectionContainer from "../components/containers/SectionContainer.style";
import { HeroP } from "../components/fonts/P.style";
import Anchor from "../components/others/Anchor.style";
import SocialMedia from "../components/others/SocialMedia";

const Hero = () => {
  return (
    <SectionContainer>
      <H1>Hi, my name is</H1>
      <H2>Bun Chen.</H2>
      <H3>I build things for the web.</H3>
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
