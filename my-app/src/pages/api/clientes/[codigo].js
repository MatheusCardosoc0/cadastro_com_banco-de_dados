export default function handler(req, res){

  const codigo = req.query.codigo

  res.status(200).json({
    id: codigo,
    message: 'success',
    life: true,
    foodFavorite: `hot Dog ${codigo}`
  })
}