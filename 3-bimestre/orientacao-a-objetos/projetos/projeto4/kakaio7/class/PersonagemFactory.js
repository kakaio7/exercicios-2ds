const Guerreiro = require("./Guerreiro")
const Mago = require("./Mago")
const Arqueiro = require("./Arqueiro")

class PersonagemFactory {
    static criar(tipo, nome, nivel) {
        switch (tipo) {
            case "guerreiro":
                return new Guerreiro(nome, nivel)

            case "mago":
                return new Mago(nome, nivel)

            case "arqueiro":
                return new Arqueiro(nome, nivel)

            default:
                throw new Error("Tipo de personagem inválido")
        }
    }
}

module.exports = PersonagemFactory