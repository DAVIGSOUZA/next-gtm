import styles from "@/styles/Home.module.css";
import AdSlot from "@/AdSlot";
import Link from "next/link";

export default function Virtuoso() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <p>Lista Virtualizada</p>
      </div>

      <br />
      <br />
      <Link href={"/"}> HOME </Link>
      <br />
      <br />

      
    </main>
  );
}
