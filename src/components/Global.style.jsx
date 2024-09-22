import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  :root {
    --lightest-navy: #233554;
    --navy: #0a192f;
    --green: #64ffda;
    --lightest-slate: #ccd6f6;
    --slate: #8892b0;
    --fz-heading: 32px;
    --fz-xl: 20px;
    --fz-lg: 18px;
    --fz-md: 16px;
    --fz-sm: 14px;
    --fz-xs: 13px;
    --font-sans: 'Inter', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  }

  body {
    margin: 0;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
  }
`;

export default GlobalStyle;
