class Equipe {
    constructor(nome) {
        this.nome = nome
        this.categorias = []
        this.membros = []
    }

    adicionarCategoria(habilidade) {
        this.categorias.push(habilidade)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}

module.exports = Equipe