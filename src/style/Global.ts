import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(https://wallpaperaccess.com/full/1116905.jpg);
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
