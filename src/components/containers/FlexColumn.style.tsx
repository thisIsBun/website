import styled from 'styled-components';
import { CSSProperties } from 'react';

type FlexColumnProps = {
  $gap?: CSSProperties['gap'];
};

const FlexColumn = styled.div<FlexColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;

export default FlexColumn;
