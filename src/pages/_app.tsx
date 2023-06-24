import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.googletag = window.googletag || { cmd: [] }

      console.log("GPT INICIALIZADO")

      googletag.cmd.push(() => {
        googletag.pubads().addEventListener('slotRequested', (e) => {
          console.log('Fetch Ad ' + e.slot.getSlotElementId() )
        })
    
        googletag.pubads().addEventListener('slotOnload', (e) => {
          console.log('Rendered Ad ' + e.slot.getSlotElementId() )
        })
      })
    }

  }, [])

  return <Component {...pageProps} />
}
