import styled from "styled-components";

const GridColumn = styled.div`
  display: grid;
  grid-template-columns: ${({ $template }) => $template};
  gap: ${({ $gap }) => $gap};
`;

export default GridColumn;
