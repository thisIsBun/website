import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap || "10px"};
  margin: ${({ $margin }) => $margin};
`;

export default FlexRow;
