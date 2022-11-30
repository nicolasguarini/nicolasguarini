import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/animate.css"/>
      </Head>
      <body className='bg-black text-white font-robotomono'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
