import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'

import SiteWrapper from '../components/SiteWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SiteWrapper>
        <Component {...pageProps} />
      </SiteWrapper>
    </ThemeProvider>
  )
}

export default MyApp
