import styled from 'styled-components';
import { CSSProperties } from 'react';

type CardWrapperProps = {
  $gap?: CSSProperties['gap'];
  $column?: CSSProperties['flexDirection'];
};

const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  gap: ${({ $gap }) => $gap || '20px'};
  padding: 30px;
  border-radius: 8px;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};

  &:hover {
    background-color: var(--light-navy);
  }
`;

export default CardWrapper;
