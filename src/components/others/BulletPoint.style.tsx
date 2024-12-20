import styled from 'styled-components';
import { CSSProperties } from 'react';

type BulletPointProps = {
  $fontFamily?: CSSProperties['fontFamily'];
  $fontSize?: CSSProperties['fontSize'];
  $beforeFontSize?: CSSProperties['fontSize'];
  $beforeLineHeight?: CSSProperties['lineHeight'];
  $color?: CSSProperties['color'];
};

const BulletPoint = styled.span<BulletPointProps>`
  position: relative;
  padding-left: 20px;
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $color }) => $color || 'var(--secondary-font)'};

  &::before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: var(--accent-color);
    font-size: ${({ $beforeFontSize }) => $beforeFontSize};
    line-height: ${({ $beforeLineHeight }) => $beforeLineHeight};
  }

  @media (max-width: 576px) {
    padding-left: 12px;
  }
`;

export default BulletPoint;
