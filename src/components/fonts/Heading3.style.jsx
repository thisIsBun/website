import styled from "styled-components";

const Heading3 = styled.h3`
  margin: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: var(--slate);
  font-size: 80px;
  line-height: 1.1;

  @media (max-width: 1200px) {
    font-size: 70px;
    line-height: 1;
  }

  @media (max-width: 992px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

export default Heading3;
