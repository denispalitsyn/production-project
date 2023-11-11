import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
  const [state, setState] = useState(0)

  return <button onClick={() => setState(prev => prev + 1)}>{state}</button>
}