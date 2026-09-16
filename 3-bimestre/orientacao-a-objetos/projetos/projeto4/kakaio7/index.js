const PersonagemFactory = require("./class/PersonagemFactory")
const Habilidade = require("./class/Habilidade")
const Equipe = require("./class/Equipe")
const Batalha = require("./class/Batalha")

const membro = PersonagemFactory.criar("guerreiro", "Thoran", 8)

const item = new Habilidade("Fúria", 50)

const grupo = new Equipe("Equipe Alfa")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

const registro = new Batalha(120, item)

membro.adicionarRegistro(registro)

console.log(membro.nome)
console.log(membro.nivel)
console.log(membro.descricao())

console.log(grupo)

console.log(membro.registros)