import { useEffect, useMemo, useRef, useState } from "react"

const AdSlot = ({
  id,
  lazy = true,
  virtualized = false
}: {id: string, lazy?:boolean, virtualized?: boolean}) => {
  const [adSlot, setAdSlot] = useState<googletag.Slot | undefined>(undefined)
  const [isIntersecting, setIsintersecting] = useState(false)
  const adRef = useRef<HTMLDivElement>(null)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIsintersecting(entry.isIntersecting)
  ), [adRef])

  useEffect(() => {
    if (adRef != null) {
      observer.observe(adRef.current)
  
      return () => observer.disconnect()
    }
  }, [adRef])

  useEffect(() => {
    let slot:googletag.Slot

    console.log('Lazy Ad - ' + id);
    
    googletag.cmd.push(() => {
      // const adUnitPath = '/6355419/Travel/Europe/France/Paris'
      // const size: googletag.GeneralSize = [300, 250]
  
      // slot = googletag.defineSlot(adUnitPath, size, id)!.addService(googletag.pubads())

      // setAdSlot(slot)

      // if (lazy) {
      //   googletag.pubads().enableLazyLoad({
      //     fetchMarginPercent: 300,
      //     renderMarginPercent: 200,
      //     mobileScaling: 2.0
      //   })
      // }

      if (virtualized) {
        googletag.pubads().enableSingleRequest()
        // googletag.pubads().disableInitialLoad()
      }

      googletag.enableServices()
  
        // googletag.display(id)
        // googletag.pubads().refresh([slot])
    })
  }, [])

  // useEffect(() => {
  //   let slot:googletag.Slot | null = null
    
  //   if (virtualized && adRef !== null) {
  //     googletag.cmd.push(() => {
  //       const adUnitPath = '/6355419/Travel/Europe/France/Paris'
  //       const size: googletag.GeneralSize = [300, 250]
    
  //       slot = googletag.defineSlot(adUnitPath, size, id)!.addService(googletag.pubads())

  //       googletag.display(slot)
  //     })
  //   }

  //   return () => {
  //     if (slot != null) {
  //       googletag.cmd.push(() => {
  //         const adDestroyed = googletag.destroySlots([slot as googletag.Slot])
  
  //         if (adDestroyed) {
  //           console.log('Destroy Ad - ' + id);
  //         }
  //       })
  //     }
  //   }
  // }, [adRef])

  
  useEffect(() => {
    if (isIntersecting) {
      let slot:googletag.Slot | null = null
    
    if (virtualized && adRef !== null) {
      googletag.cmd.push(() => {
        const adUnitPath = '/6355419/Travel/Europe/France/Paris'
        const size: googletag.GeneralSize = [300, 250]
    
        slot = googletag.defineSlot(adUnitPath, size, id)!.addService(googletag.pubads())

        googletag.display(slot)
      })
    }

    return () => {
      if (slot != null) {
        googletag.cmd.push(() => {
          const adDestroyed = googletag.destroySlots([slot as googletag.Slot])
  
          if (adDestroyed) {
            console.log('Destroy Ad - ' + id);
          }
        })
      }
    }
    }
    
  }, [isIntersecting])

  return <div ref={adRef} id={id} style={{width: '300px', height: '250px'}}/>
}

export default AdSlot