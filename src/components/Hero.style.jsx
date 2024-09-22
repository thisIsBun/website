import styled from "styled-components";

const H1 = styled.h1`
  margin: 0 0 0 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
`;

const H2 = styled.h2`
  margin: 0;
  color: var(--lightest-slate);
  font-size: clamp(40px, 8vw, 80px);
`;

const H3 = styled.h3`
  margin: 0;
  color: var(--slate);
  font-size: clamp(40px, 8vw, 80px);
  line-height: 0.9;
`;

const P = styled.p`
  margin: 30px 0 0 0;
  max-width: 640px;
  color: var(--slate);
  font-size: var(--fz-lg);
  font-weight: 300;
  line-height: 1.6;
`;

export { H1, H2, H3, P };
