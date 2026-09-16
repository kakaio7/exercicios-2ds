const Personagem = require("./Personagem")

class Arqueiro extends Personagem {
    descricao() {
        return "Arqueiro pronto para a batalha"
    }
}

module.exports = Arqueiro