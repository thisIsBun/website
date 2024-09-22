import { H1, H2, H3, P } from "../components/Hero.style";
import SectionContainer from "../components/containers/Section.style";

const Hero = () => {
  return (
    <SectionContainer>
      <H1>Hi, my name is</H1>
      <H2>Bun Chen.</H2>
      <H3>I build things for the web.</H3>
      <P>
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently, I’m focused on developing system at Castles,
        ensuring user-friendly experiences through clean and maintainable code.
      </P>
    </SectionContainer>
  );
};

export default Hero;
