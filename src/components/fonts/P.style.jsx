import styled from "styled-components";

const P = styled.p`
  font-weight: 300;
  line-height: 1.6;
`;

const HeroP = styled(P)`
  max-width: 50vw;
  color: var(--slate);
  font-size: var(--fz-lg);

  @media (max-width: 1200px) {
    margin-top: 12px;
    max-width: 65vw;
  }

  @media (max-width: 992px) {
    font-size: var(--fz-md);
  }

  @media (max-width: 768px) {
    font-size: var(--fz-lg);
    max-width: 80vw;
  }

  @media (max-width: 576px) {
    font-size: var(--fz-md);
    max-width: 100vw;
  }
`;

const AboutP = styled(P)`
  margin: 0;

  @media (max-width: 1200px) {
    font-size: var(--fz-lg);
  }

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

const FooterP = styled(P)`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--lightest-slate);
  margin: 0;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export { HeroP, AboutP, FooterP };
