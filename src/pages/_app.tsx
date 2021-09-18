import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { SearchProvider } from 'contexts/SearchContext'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchProvider results={pageProps.response?.results}>
        <Component {...pageProps} />
      </SearchProvider>
    </ThemeProvider>
  )
}
