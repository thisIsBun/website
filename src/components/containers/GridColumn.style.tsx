import styled from 'styled-components';
import { CSSProperties } from 'react';

type GridColumnProps = {
  $template?: CSSProperties['gridTemplateColumns'];
  $gap?: CSSProperties['gap'];
};

const GridColumn = styled.div<GridColumnProps>`
  display: grid;
  grid-template-columns: ${({ $template }) => $template};
  gap: ${({ $gap }) => $gap};
`;

export default GridColumn;
