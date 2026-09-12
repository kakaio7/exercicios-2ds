class Titulo {
  constructor(personagem) {
    this.personagem = personagem
  }

  emitir() {
    throw new Error("Método emitir() deve ser implementado")
  }
}

class Cavaleiro extends Titulo {
  emitir() {
    return `Título de cavaleiro concedido a: ${this.personagem}`
  }
}

class Mago extends Titulo {
  emitir() {
    return `Título de mago concedido a: ${this.personagem}`
  }
}

class Campeao extends Titulo {
  emitir() {
    return `Título de campeão concedido a: ${this.personagem}`
  }
}

Titulo.Cavaleiro = Cavaleiro
Titulo.Mago = Mago
Titulo.Campeao = Campeao

module.exports = Titulo