import { useState } from "react"
import styles from './Counter.module.scss'

export const Counter = () => {
  const [state, setState] = useState(0)

  return <button className={styles.btn} onClick={() => setState(prev => prev + 1)}>{state}</button>
}