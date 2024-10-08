import styled from "styled-components";

const Heading3 = styled.h3`
  margin: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: var(--slate);
  font-size: 80px;

  @media (max-width: 1200px) {
    font-size: 70px;
  }

  @media (max-width: 992px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

export default Heading3;
