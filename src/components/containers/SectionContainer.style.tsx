import styled from 'styled-components';
import { CSSProperties } from 'react';

type SectionContainerProps = {
  $marginBottom?: CSSProperties['marginBottom'];
  $alignItemsCenter?: CSSProperties['alignItems'];
  $paddingBottom?: CSSProperties['paddingBottom'];
};

const SectionContainer = styled.section<SectionContainerProps>`
  display: flex;
  flex-direction: column;
  scroll-margin-top: var(--nav-height-desktop);
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '80px'};
  width: 100%;
  max-width: 1000px;
  align-items: ${({ $alignItemsCenter }) => ($alignItemsCenter ? 'center' : 'stretch')};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  visibility: hidden;
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.loaded {
    transform: translateY(0px);
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    scroll-margin-top: var(--nav-height-992px);
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px 4vw;
  }

  @media (max-width: 576px) {
    scroll-margin-top: var(--nav-height-576px);
  }
`;

export default SectionContainer;
