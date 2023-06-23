import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.googletag = window.googletag || { cmd: [] }

      console.log("GPT INICIALIZADO")
    }
  }, [])

  return <Component {...pageProps} />
}
