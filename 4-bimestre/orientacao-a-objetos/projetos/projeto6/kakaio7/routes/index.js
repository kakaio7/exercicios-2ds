const express = require('express')

const router = express.Router()

const docesRouter = require('./doces')
const clientesRouter = require('./clientes')

router.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API de Doceria'
  })
})

router.use('/doces', docesRouter)
router.use('/clientes', clientesRouter)

module.exports = router