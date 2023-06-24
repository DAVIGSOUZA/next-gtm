import styles from "@/styles/Home.module.css";
import AdSlot from "@/AdSlot";
import Link from "next/link";
import { largeText } from "../helpers/largeText";

export default function AnotherPage() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <p>Another Page</p>
        <Link href={"/"}> HOME </Link>
      </div>

      <br />
      <br />

      <AdSlot id="4" />

      <h2> Some Content </h2>

      <AdSlot id="5" />

      <h2> Another Content </h2>

      <AdSlot id="6" />

      <h2>Large Content</h2>

      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>

      <AdSlot id="7" />

      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>

      <AdSlot id="8" />
      
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      <p>{largeText}</p>
      
      <AdSlot id="9" />

    </main>
  );
}
