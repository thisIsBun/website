import styled from "styled-components";

const Heading3 = styled.h3`
  margin: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: var(--slate);
  font-size: clamp(40px, 8vw, 80px);
  line-height: 0.9;
`;

export default Heading3;
