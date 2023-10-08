import Image from 'next/image'
import styles from './page.module.css'
import Calculator from './pages/index/components/calculator-component'
import Result from './pages/index/components/result-component'

export default function Home() {
  return (
    <main className={styles.main}>
      <Calculator/>
      <Result/>
    </main>
  )
}
