export default function text(){
  
  const titulo = <h1>jsx</h1>

  function random(){
    var a = Math.random()
    return a
  }

  const obj = {nome: 'Matheus', idade : 33}
  

  return(
    <div>
      {titulo}
      <h1>aula 1 do desenvolvimento do curso</h1>
      <span>{'eae'.toUpperCase()}</span>
      <p>
        {JSON.stringify({nome: 'Matheus', idade : 33}) }
      </p>
    </div>
  )
}