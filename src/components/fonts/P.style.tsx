import styled from 'styled-components';
import { CSSProperties } from 'react';

const P = styled.p`
  font-weight: 300;
  line-height: 1.6;
`;

const HeroP = styled(P)`
  max-width: 50vw;
  color: var(--secondary-font);
  font-size: var(--fz-md);
  margin: 0;
  line-height: 1.5;

  @media (max-width: 1200px) {
    max-width: 65vw;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
  }

  @media (max-width: 576px) {
    max-width: 100vw;
    font-size: var(--fz-sm);
  }
`;

type ParagraphType = {
  $color?: CSSProperties['color'];
};

const Paragraph = styled(P)<ParagraphType>`
  margin: 0;
  color: ${({ $color }) => $color};

  @media (max-width: 1200px) {
    font-size: var(--fz-lg);
  }

  @media (max-width: 992px) {
    font-size: var(--fz-md);
  }

  @media (max-width: 576px) {
    line-height: 1.4;
    font-size: var(--fz-sm);
  }
`;

const FooterP = styled(P)`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--info-font);

  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

export { HeroP, Paragraph, FooterP };
