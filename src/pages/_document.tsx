import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script dangerouslySetInnerHTML={{__html:`window.googletag = window.googletag || { cmd: [] }`}}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
