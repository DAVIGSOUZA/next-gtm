import { useEffect, useMemo, useRef, useState } from "react"

const AdSlot = ({
  id,
  virtualized = false
}: {id: string, virtualized?: boolean}) => {
  const [isIntersecting, setIsintersecting] = useState(false)
  const [SRA, setSRA] = useState(false)
  const adRef = useRef<HTMLDivElement>(null)

  const observer = useMemo(() => {
    if (typeof window !== "undefined" && virtualized) {
      return new IntersectionObserver(
        ([entry]) => setIsintersecting(entry.isIntersecting)
      )
    }
  }, [adRef])

  useEffect(() => {
    if (adRef != null && observer !== undefined) {
      observer.observe(adRef.current as HTMLDivElement)
  
      return () => observer.disconnect()
    }
  }, [adRef, observer])

  useEffect(() => {
    let slot:googletag.Slot

    googletag.cmd.push(() => {
      if (virtualized) {
        googletag.pubads().enableSingleRequest()
      }
      
      googletag.enableServices()
      
      if (!virtualized) {
        console.log('New Lazy Ad - ' + id);

        googletag.pubads().enableLazyLoad({
          fetchMarginPercent: 300,
          renderMarginPercent: 200,
          mobileScaling: 2.0
        })

        const adUnitPath = '/6355419/Travel/Europe/France/Paris'
        const size: googletag.GeneralSize = [300, 250]
    
        slot = googletag.defineSlot(adUnitPath, size, id)!.addService(googletag.pubads())  
        
        googletag.display(id)
      }
    })

    if (!virtualized) {
      return () => {
        if (slot != null) {
          googletag.cmd.push(() => {
            const adDestroyed = googletag.destroySlots([slot as googletag.Slot])
    
            if (adDestroyed) {
              console.log('Destroy Lazy Ad - ' + id);
            }
          })
        }
      }
    }
  }, [])

  useEffect(() => {
    if (isIntersecting && virtualized) {
      let slot:googletag.Slot
    
      if (virtualized && adRef !== null) {
        googletag.cmd.push(() => {
          console.log('New Virtualized Ad - ' + id);

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
              console.log('Destroy Virtualized Ad - ' + id);
            }
          })
        }
      }
    }
  }, [isIntersecting])

  return <div ref={adRef} id={id} style={{width: '300px', height: '250px'}}/>
}

export default AdSlot