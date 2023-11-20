"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Calculator from './pages/index/components/calculator-component'
import Result from './pages/index/components/result-component'
import { useEffect, useState } from 'react'

export default function Home() {
  const [dataResult, setDataResult] = useState<any>(null);
  useEffect(() =>{
    console.log("Tela de resultado", dataResult);
  })

  useEffect(() =>{
      console.log("Tela de resultado", dataResult);
  }, [dataResult])
  
  const dataFromChild = (dataResult: any) => {
    console.log("Resultado na página HOME", dataResult)
    setDataResult(dataResult);
  }
  
  return (
    <main className={styles.main}>
      <Calculator onObjectChange={dataFromChild}/>
      <Result result={dataResult}/>
    </main>
  )
}
