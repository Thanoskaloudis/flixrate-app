import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './styles/page.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Next JS 👋🏼</h2>
    </main>
  )
}
