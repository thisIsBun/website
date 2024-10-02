import styled from "styled-components";

const HeroH1 = styled.h1`
  margin: 0 0 0 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
`;

const HeroH2 = styled.h2`
  margin: 0;
  color: var(--lightest-slate);
  font-size: clamp(40px, 8vw, 80px);
`;

const IconWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;
  font-size: var(--fz-xxl);
`;

export { HeroH1, HeroH2, IconWrapper };
