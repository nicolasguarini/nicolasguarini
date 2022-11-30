import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../public/css/animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
