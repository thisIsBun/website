import styled from 'styled-components';
import { CSSProperties } from 'react';
type Heading2Props = {
  $marginBottom?: CSSProperties['marginBottom'];
};

const Heading2 = styled.h2<Heading2Props>`
  margin: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: var(--slate);
  font-size: 70px;
  line-height: 0.8;

  @media (max-width: 1200px) {
    font-size: 64px;
  }

  @media (max-width: 992px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 576px) {
    font-size: 34px;
  }
`;

export default Heading2;
