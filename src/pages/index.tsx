import styles from '@/styles/Home.module.css'
import AdSlot from '@/AdSlot'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
      </div>

      <AdSlot id='1'/>

      <h2> Some Content </h2>

      <AdSlot id='2'/>

      <h2> Another Content </h2>

      <AdSlot id='3'/>

      <Link href={'/another-page'}> Another Page </Link>

      <Link href={'/virtuoso'}> Virtuoso List </Link>
    </main>
  )
}
