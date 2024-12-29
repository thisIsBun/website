import { FooterP } from '../components/fonts/P.style';
import SocialMedia from '../components/others/SocialMedia.style';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('footer');
  return (
    <FooterContainer>
      <SocialMedia />
      <FooterP>{t('title')}</FooterP>
    </FooterContainer>
  );
};

export default Footer;
