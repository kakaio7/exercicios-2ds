const Personagem = require("./Personagem")

class Mago extends Personagem {
    descricao() {
        return "Mago pronto para a batalha"
    }
}

module.exports = Mago