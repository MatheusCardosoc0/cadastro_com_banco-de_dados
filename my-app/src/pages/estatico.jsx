import Layaut from "./components/Layaut";

export function getStaticProps(){
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function estatico(props){
  return(
    <Layaut>
      <h1>Estatico</h1>
      <p>{props.numero}</p>
    </Layaut>
  )
}