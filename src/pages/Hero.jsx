import { H1, H2, H3 } from "../components/Hero.style";
import SectionContainer from "../components/containers/SectionContainer.style";
import { HeroP } from "../components/fonts/P.style";

const Hero = () => {
  return (
    <SectionContainer>
      <H1>Hi, my name is</H1>
      <H2>Bun Chen.</H2>
      <H3>I build things for the web.</H3>
      <HeroP>
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently, I’m focused on developing system at Castles,
        ensuring user-friendly experiences through clean and maintainable code.
      </HeroP>
    </SectionContainer>
  );
};

export default Hero;
