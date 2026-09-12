const Titulo = require("./Titulo")

function criar(tipo, personagem) {
  if (tipo === "cavaleiro") {
    return new Titulo.Cavaleiro(personagem)
  }

  if (tipo === "mago") {
    return new Titulo.Mago(personagem)
  }

  if (tipo === "campeao") {
    return new Titulo.Campeao(personagem)
  }

  throw new Error("Tipo de título inválido")
}

module.exports = {
  criar
}