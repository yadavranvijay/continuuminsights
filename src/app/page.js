import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
 
   <Link href="/CATI">go to home</Link>
    </main>
  )
}
