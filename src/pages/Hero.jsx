import { H1, H2, H3, IconWrapper } from "../components/Hero.style";
import SectionContainer from "../components/containers/SectionContainer.style";
import { HeroP } from "../components/fonts/P.style";
import Anchor from "../components/others/Link.style";
import heroData from "../data/hero.data";

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
          target="_blank"
        >
          Castles
        </Anchor>
        , ensuring user-friendly experiences through clean and maintainable
        code.
      </HeroP>
      <IconWrapper>
        {heroData.map(({ path, element }, index) => {
          return (
            <Anchor to={path} key={index} target="_blank">
              {element}
            </Anchor>
          );
        })}
      </IconWrapper>
    </SectionContainer>
  );
};

export default Hero;
