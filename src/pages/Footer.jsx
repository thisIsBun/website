import SectionContainer from "../components/containers/SectionContainer.style";
import { FooterP } from "../components/fonts/P.style";
import Anchor from "../components/others/Link.style";

const Footer = () => {
  return (
    <SectionContainer style={{ alignItems: "center", paddingBottom: "30px" }}>
      <FooterP>Although it’s the end of website.</FooterP>
      <FooterP>
        Don’t let this page be the end,
        <Anchor to="/#contact">let’s start something!</Anchor>
      </FooterP>
    </SectionContainer>
  );
};

export default Footer;
