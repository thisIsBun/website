import SectionContainer from "../components/containers/SectionContainer.style";
import { FooterP } from "../components/fonts/P.style";
import Anchor from "../components/others/Anchor.style";
import SocialMedia from "../components/others/SocialMedia";

const Footer = () => {
  return (
    <SectionContainer $alignItemsCenter $marginBottom="1rem">
      <SocialMedia />
      <FooterP>
        Don’t let this be the end,
        <Anchor to="/website/#contact">let’s start something.</Anchor>
      </FooterP>
    </SectionContainer>
  );
};

export default Footer;
