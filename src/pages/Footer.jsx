import { FooterP } from "../components/fonts/P.style";
import Anchor from "../components/others/Anchor.style";
import SocialMedia from "../components/others/SocialMedia";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 120px;

  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 992px) {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia />
      <FooterP>
        Don’t let this be the end,
        <Anchor to="/website/#contact">let’s start something.</Anchor>
      </FooterP>
    </FooterContainer>
  );
};

export default Footer;
