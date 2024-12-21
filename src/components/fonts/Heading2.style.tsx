import styled from 'styled-components';
import { CSSProperties } from 'react';
type Heading2Props = {
  $marginBottom?: CSSProperties['marginBottom'];
};

const Heading2 = styled.h2<Heading2Props>`
  margin: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: var(--secondary-font);
  font-size: 68px;
  line-height: 1;

  @media (max-width: 1200px) {
    font-size: 62px;
  }

  @media (max-width: 992px) {
    font-size: 54px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

export default Heading2;
