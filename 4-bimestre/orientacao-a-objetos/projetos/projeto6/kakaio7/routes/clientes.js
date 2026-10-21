const express = require('express')

const router = express.Router()

const clientes = [
  {
    id: 1,
    nome: 'Ana',
    contato: '9999-2020'
  },
  {
    id: 2,
    nome: 'Bruno',
    contato: '9999-2121'
  }
]

router.get('/', (req, res) => {
  res.status(200).json(clientes)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: clientes.length
  })
})

module.exports = router
