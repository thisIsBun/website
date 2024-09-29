import styled from "styled-components";

const P = styled.p`
  font-weight: 300;
  line-height: 1.6;
`;

const HeroP = styled(P)`
  margin: 30px 0 0 0;
  max-width: 640px;
  color: var(--slate);
  font-size: var(--fz-lg);
`;

const AboutP = styled(P)`
  margin: 0;
`;

const FooterP = styled(P)`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--lightest-slate);
  margin: 0;
`;

export { HeroP, AboutP, FooterP };
