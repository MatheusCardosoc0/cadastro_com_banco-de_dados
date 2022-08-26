import { useState } from 'react'
import styles from '../styles/text.module.css'
import Cabeçalho from './components/cabeçalho'
import Layaut from './components/Layaut'

export default function text(){
  
  const titulo = <h1>jsx</h1>

  function random(){
    var a = Math.random()
    return a
  }
  const [count, setCount] = useState(1)

  const obj = {nome: 'Matheus', idade : 33}
  

  return( 
  <Layaut>
    <div className={styles.roxo}>
     
      {titulo}
      <h1>aula {count} do desenvolvimento do curso de next</h1>
      <span>{'eae'.toUpperCase()}</span>
      <p>
        {JSON.stringify({nome: 'Matheus', idade : 33}) }
      </p>
      <Cabeçalho text="eu sou indo"></Cabeçalho>
      <button
      onClick={e => setCount(count + 1)}>
        +1
      </button>
     
    </div>
 </Layaut>
  )
}