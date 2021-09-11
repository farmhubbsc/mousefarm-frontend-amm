import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(https://p4.wallpaperbetter.com/wallpaper/911/774/372/black-cubes-wallpaper-preview.jpg);
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
