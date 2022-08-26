import { handleWebpackExtenalForEdgeRuntime } from "next/dist/build/webpack/plugins/middleware-plugin";

export default function cliente(req, res){
  
  if(req.method == 'GET'){
    handleGet(req, res)
  }else{
    res.status(405).send()
  }
}

function handleGet(req, res){
  res.status(200).json({
    id: 23,
    name: 'Bob Shalder',
    profission: 'Police officer',
    params: JSON.stringify(req.query)
  })
}