import Layaut from "../../components/Layaut";
import {useRouter} from "next/router"
import { useEffect } from "react";

export default function cliente(){

  const router = useRouter()

  useEffect(() =>{
    console.log(router)
  },[])

  return(
    <Layaut>
    <div>
      <h1>Cliente {router.query.codigo}</h1>
      <h2>Filial {router.query.filial}</h2>
    </div>
    </Layaut>
  )
}