import { createGlobalStyle, th } from '@xstyled/styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  // CSS to normalize abnormalities across browsers (normalize.css | MIT License | github.com/necolas/normalize.css)
  ${normalize()}

  // Bootstrap
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: ${th.font('sansSerif')};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${th.color('text')};
    background-color: ${th.color('background')};
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }

  h2 {
    font-size: calc(1.325rem + .9vw);
  }

  h3 {
    font-size: calc(1.3rem + .6vw);
  }

  h4 {
    font-size: calc(1.275rem + .3vw);
  }

  h5 {
      font-size: 1.25rem;
  }
  
  h6 {
    font-size: 1rem;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
    &:hover {
      color: #0a58ca;
    }
  }
`