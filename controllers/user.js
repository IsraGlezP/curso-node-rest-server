const { request, response } = require('express')

const usuarioGet = (req = request, res = response) => {
  const { q, nombre = 'No name', apikey } = req.query
  res.json({
    msg: 'get API - Controller',
    q,
    nombre,
    apikey
  })
}

const usuarioPut = (req = request, res = response) => {
  const id = req.params.id
  res.json({
    msg: 'put API - Controller',
    id
  })
}

const usuarioPost = (req = request, res = response) => {
  const { hola } = req.body
  res.json({
    msg: 'post API - Controller',
    hola
  })
}

const usuarioDelete = (req = request, res = response) => {
  res.json({
    msg: 'delete API - Controller'
  })
}

module.exports = {
  usuarioGet,
  usuarioPut,
  usuarioPost,
  usuarioDelete
}
