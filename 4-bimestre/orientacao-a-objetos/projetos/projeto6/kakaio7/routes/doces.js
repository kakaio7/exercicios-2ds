const express = require('express')

const router = express.Router()

const doces = [
  {
    id: 1,
    nome: 'Brigadeiro',
    categoria: 'festa',
    preco: 3,
    disponivel: true
  },
  {
    id: 2,
    nome: 'Bolo de Pote',
    categoria: 'individual',
    preco: 15,
    disponivel: true
  },
  {
    id: 3,
    nome: 'Torta',
    categoria: 'encomenda',
    preco: 90,
    disponivel: false
  }
]

router.get('/', (req, res) => {
  res.status(200).json(doces);
})

router.get('/disponiveis', (req, res) => {
  const disponiveis = doces.filter(
    doce => doce.disponivel === true
  )

  res.status(200).json(disponiveis)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: doces.length
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    mensagem: 'Cadastro de doce realizado'
  })
})

module.exports = router