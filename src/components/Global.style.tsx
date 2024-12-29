import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-display: swap;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      src: url('/website/fonts/inter-v18-latin-300.woff2') format('woff2');
    }
    @font-face {
      font-display: swap;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      src: url('/website/fonts/inter-v18-latin-regular.woff2') format('woff2');
    }
    @font-face {
      font-display: swap;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      src: url('/website/fonts/inter-v18-latin-500.woff2') format('woff2');
    }
    @font-face {
      font-display: swap;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      src: url('/website/fonts/inter-v18-latin-600.woff2') format('woff2');
    }

  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  :root {
    --primary-background: #003e52;
    --header-background: #002f3f;
    --primary-font: #fff;
    --secondary-font: #a7a8a9;
    --info-font: #809ea8;
    --accent-color: #bc955c;
    --fz-xxl: 28px;
    --fz-xl: 20px;
    --fz-lg: 18px;
    --fz-md: 16px;
    --fz-sm: 14px;
    --fz-xs: 13px;
    --font-sans: 'Inter', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    --tab-height: 42px;
    --nav-height-desktop: 100px;
    --nav-height-992px: 80px;
    --nav-height-576px: 50px;
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

  html[data-lang='zh-TW'] body {
    letter-spacing: 0.075em;
  }

  body {
    margin: 0;
    background-color: var(--primary-background);
    color: var(--primary-font);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
  }
`;

export default GlobalStyle;
