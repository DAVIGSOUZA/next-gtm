import { useEffect } from "react"

const AdSlot = ({id}: {id: string}) => {

  useEffect(() => {
    let slot:googletag.Slot

    console.log('Fecth Ad - ' + id);
    
    googletag.cmd.push(() => {
      const adUnitPath = '/6355419/Travel/Europe/France/Paris'
      const size: googletag.GeneralSize = [300, 250]
  
      slot = googletag.defineSlot(adUnitPath, size, id)!.addService(googletag.pubads())
  
      googletag.enableServices()
  
      googletag.display(id)
    })

    return () => {
      googletag.cmd.push(() => {
        const adDestroyed = googletag.destroySlots([slot])

        if (adDestroyed) {
          console.log('Destroy Ad - ' + id);
        }
      })
    }
  }, [])

  return <div id={id} style={{width: '300px', height: '250px'}}/>
}

export default AdSlot