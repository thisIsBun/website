import styled from "styled-components";

const Heading4 = styled.h4`
  margin: 0;
  font-size: var(--fz-xl);
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: var(--fz-lg);
    line-height: 1.4;
  }
`;

export default Heading4;
