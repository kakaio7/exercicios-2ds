class Personagem {
    #nome
    #nivel

    constructor(nome, nivel) {
        this.#nome = nome
        this.#nivel = nivel
    }

    get nome() {
        return this.#nome
    }

    get nivel() {
        return this.#nivel
    }

    descricao() {
        return "Personagem cadastrado no jogo"
    }
}

module.exports = Personagem