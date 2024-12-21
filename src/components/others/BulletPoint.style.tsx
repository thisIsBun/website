import styled from 'styled-components';
import { CSSProperties } from 'react';

type BulletPointProps = {
  $fontFamily?: CSSProperties['fontFamily'];
  $fontSize?: CSSProperties['fontSize'];
  $color?: CSSProperties['color'];
};

const BulletPoint = styled.span<BulletPointProps>`
  --bullet-font-size: ${({ $fontSize }) => $fontSize};
  position: relative;
  padding-left: 20px;
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
  font-size: var(--bullet-font-size);
  color: ${({ $color }) => $color || 'var(--secondary-font)'};

  &::before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: var(--accent-color);
    line-height: 1.1;
  }

  @media (max-width: 576px) {
    padding-left: 12px;
    font-size: calc(var(--bullet-font-size) - 2px);
  }
`;

export default BulletPoint;
