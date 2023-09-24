import Image from 'next/image'
import styles from './page.module.css'
import WordAudio from '@/components/WordAudio'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>NhumLingo Pronunciation</h1>
        <WordAudio/>
      </div>

    </main>
  )
}
