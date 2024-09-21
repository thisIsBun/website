import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  :root {
    --navy: #0a192f;
    --green: #64ffda;
    --slate: #8892b0;
    --fz-xl: 20px;
    --fz-xs: 13px;
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
