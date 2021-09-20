import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body, input, textarea, button {
    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
  }
`

export default GlobalStyle
