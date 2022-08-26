import { useState } from 'react'
import Layaut from './components/Layaut.jsx'

export default function Integracao() {

  const[codigo, setCodigo] = useState(1)
  const [cliente, setCliente] = useState({})

  async function obterCliente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const dados = await resp.json()
    setCliente(dados)
  }

  return (
    <Layaut>
      <div>
        <input type={"number"} value={codigo} placeholder="Digite o número do cliente" onChange={e => setCodigo(e.target.value)}></input>
        <button onClick={obterCliente}
        >Obter dadso do cliente</button>
      </div>
      <h1>Integração</h1>
      <div>
        <ul>
          <li>Name: {cliente.name} </li>
          <li>id: {cliente.id}</li>
          <li>profissão: {cliente.profission}</li>
          <li>Comida favorita: {cliente.foodFavorite}</li>
        </ul>
      </div>
    </Layaut>
  )
}
