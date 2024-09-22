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

export { H1, H2, H3 };
