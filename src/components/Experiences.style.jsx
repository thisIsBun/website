import styled from "styled-components";

const CardPeriod = styled.div`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  flex-basis: 18%;
  flex-shrink: 0;
  padding-top: 4px;
`;

const CardContent = styled.div``;

const Badge = styled.span`
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  padding: 8px 16px;
  border-radius: 50px;
  background-color: var(--badge-bg);
  color: var(--badge-color);
`;

export { CardPeriod, CardContent, Badge };
