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

const Heading3 = styled.h3`
  margin: 0 0 10px 0;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1.3;
  color: var(--lightest-slate);
`;

export { CardPeriod, CardContent, Badge, Heading3 };
