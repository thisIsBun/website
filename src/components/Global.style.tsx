import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  :root {
    --lightest-navy: #233554;
    --light-navy: #112240;
    --navy: #0a192f;
    --light-teal: #64d3ff;
    --green: #64ffda;
    --white: #ffffff;
    --lightest-slate: #ccd6f6;
    --slate: #8892b0;
    --badge-color: #50c0cc;
    --badge-bg: #152d47;
    --fz-heading: 32px;
    --fz-xxl: 28px;
    --fz-xl: 20px;
    --fz-lg: 18px;
    --fz-md: 16px;
    --fz-sm: 14px;
    --fz-xs: 13px;
    --font-sans: 'Inter', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    --tab-height: 42px;
    --nav-height: 100px;
    --bar-width: 60px;
    --bar-height: 5px;
    --hamburger-gap: 10px;
    --hamburger-margin: 4vw;
    --animation-timing: 200ms ease-in-out;
    --hamburger-height: calc(3*var(--bar-height) + 2*var(--hamburger-gap));

      @media (max-width: 576px) {
        --bar-width: 36px;
        --bar-height: 3px;
        --hamburger-gap: 6px;
      }
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
