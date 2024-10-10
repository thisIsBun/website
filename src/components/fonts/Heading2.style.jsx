import styled from "styled-components";

const Heading2 = styled.h2`
  margin: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: var(--slate);
  font-size: 66px;
  line-height: 0.8;

  @media (max-width: 1200px) {
    font-size: 60px;
  }

  @media (max-width: 992px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export default Heading2;
