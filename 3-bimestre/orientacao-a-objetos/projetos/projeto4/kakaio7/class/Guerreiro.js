const Personagem = require("./Personagem")

class Guerreiro extends Personagem {
    constructor(nome, nivel) {
        super(nome, nivel)
        this.registros = []
    }

    descricao() {
        return "Guerreiro pronto para a batalha"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Guerreiro