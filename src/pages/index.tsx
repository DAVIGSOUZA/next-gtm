import styles from '@/styles/Home.module.css'
import AdSlot from '@/AdSlot'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <p>HOME</p>
          
        <Link href={'/another-page'}> Another Page </Link>

        <Link href={'/virtualized'}> Virtuoso List </Link>
      </div>

      <br />
      <br />

      <AdSlot id='1'/>

      <h2> Some Content </h2>

      <AdSlot id='2'/>

      <h2> Another Content </h2>

      <AdSlot id='3'/>

    </main>
  )
}
