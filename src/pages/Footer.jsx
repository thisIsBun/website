import SectionContainer from "../components/containers/SectionContainer.style";
import { FooterP } from "../components/fonts/P.style";
import { NavLink } from "../components/Navbar.style";

const Footer = () => {
  return (
    <SectionContainer style={{ alignItems: "center", paddingBottom: "30px" }}>
      <FooterP>Although it’s the end of website.</FooterP>
      <FooterP>
        Don’t let this page be the end,
        <NavLink to="/#contact">let’s start something!</NavLink>
      </FooterP>
    </SectionContainer>
  );
};

export default Footer;
