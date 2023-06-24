import styles from "@/styles/Home.module.css";
import { Virtuoso, LogLevel } from 'react-virtuoso'
import AdSlot from "@/AdSlot";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { textArray } from "@/helpers/largeText";

type ListData = {
  page: number
  index: number
  text: string
  ad?: boolean
}

export default function VirtualizedList() {
  const [data, setData] = useState<ListData[]>([])
  const [page, setPage] = useState(1)

  const loadMore = () => {
    return setTimeout(() => {
      const newData:ListData[] = textArray.map((text, index) => {
        return {page ,index, text}
      })

      const adInsertionInterval = 10

      for (let i = 10; i < newData.length; i += adInsertionInterval) {
        newData.splice(i, 0, {...newData[0], ad: true}) 
      }
      
      setPage(prevPage => prevPage += 1)

      setData((prevData) => [...prevData, ...newData])
    }, 200)
  }

  useEffect(() => {
    const timeout = loadMore()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <p>Virtuoso List</p>
        <Link href={"/"}> HOME </Link>
      </div>

      <br />
      <br />

      <Virtuoso
        style={{ height: 500, width: 500}}
        data={data}
        endReached={loadMore}
        overscan={{main: 300, reverse: 300}}
        useWindowScroll
        
        itemContent={(index, data) => {
          if (data.ad) {
            // console.log('If de anuncio ' + index);
            
            return (
              <AdSlot 
                id={`virtualized ${data.page + data.index + Math.floor(Math.random() * 100000000)}`}
                lazy={false}
                virtualized={true}
              />
            )
          } 

          // console.log('else conteudo normal ' + index);

          return (
            <div >
              <br />
              <h3>{`Page:${data.page} - Element: ${data.index + 1}`}</h3>
              <p>{data.text}</p>
              <br />
            </div>
          )
          
        }}
        components={{ Footer }}
      />     
    </main>
  );
}

const Footer = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Loading...
    </div>
  )
}