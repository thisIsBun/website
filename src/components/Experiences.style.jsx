import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  border-radius: 8px;

  &:hover {
    background-color: var(--light-navy);
  }
`;

const CardPeriod = styled.div`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  flex-basis: 18%;
  flex-shrink: 0;
  padding-top: 4px;
`;

const CardContent = styled.div``;

export { CardWrapper, CardPeriod, CardContent };