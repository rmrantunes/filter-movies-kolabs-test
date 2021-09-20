import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Nprogress from 'nprogress'
import Router from 'next/router'

import { SearchProvider } from 'contexts/SearchContext'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'

import 'nprogress/nprogress.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    function start() {
      Nprogress.start()
    }

    function done() {
      Nprogress.done()
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', done)
    Router.events.on('routeChangeError', done)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', done)
      Router.events.off('routeChangeError', done)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchProvider results={pageProps.response?.results}>
        <Component {...pageProps} />
      </SearchProvider>
    </ThemeProvider>
  )
}
