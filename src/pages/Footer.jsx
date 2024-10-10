import { FooterP } from "../components/fonts/P.style";
import SocialMedia from "../components/others/SocialMedia";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <FooterP>Crafted with care by Bun Chen © 2024</FooterP>
    </FooterContainer>
  );
};

export default Footer;
