import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;

export default FlexColumn;
