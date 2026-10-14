const { carregarConfig } = require("./config")

function handler(req, res) {
  const config = carregarConfig()

  if (req.url === "/") {
    res.statusCode = 200
    res.end(`Status do servico: ${config.servico}`)
    return
  }

  if (req.url === "/alo") {
    res.statusCode = 200
    res.end("alo")
    return
  }

  if (req.url === "/status") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(
      JSON.stringify({
        online: true,
        ...config,
      })
    )
    return
  }

  res.statusCode = 404
  res.end("Rota nao encontrada")
}

module.exports = handler