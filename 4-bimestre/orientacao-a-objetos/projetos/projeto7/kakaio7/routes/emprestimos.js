const express = require("express")
const validarEmprestimo = require("../middlewares/validarEmprestimo")

const router = express.Router()

const emprestimos = [
    { id: 1, leitor: "Ana", livro: "Dom Casmurro", dias: 7, situacao: "devolvido" },
    { id: 2, leitor: "Bruno", livro: "O Cortico", dias: 14, situacao: "retirado" },
    { id: 3, leitor: "Carla", livro: "Memorias Postumas", dias: 10, situacao: "retirado" }
]

router.get("/", (req, res) => {
    let resultado = emprestimos

    if (req.query.situacao !== undefined) {
        resultado = resultado.filter(emprestimo => emprestimo.situacao === req.query.situacao)
    }

    if (req.query.diasMin !== undefined) {
        const diasMin = Number(req.query.diasMin)
        resultado = resultado.filter(emprestimo => emprestimo.dias >= diasMin)
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)
    const emprestimo = emprestimos.find(item => item.id === id)

    if (!emprestimo) {
        const erro = new Error("Emprestimo nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(emprestimo)
})

router.post("/", validarEmprestimo, (req, res) => {
    const maiorId = emprestimos.reduce((maior, emprestimo) => Math.max(maior, emprestimo.id), 0)
    emprestimos.push({
        id: maiorId + 1,
        leitor: req.body.leitor,
        livro: req.body.livro,
        dias: req.body.dias,
        situacao: "reservado"
    })

    res.status(201).json({ mensagem: "Registro de emprestimo criado" })
})

module.exports = router
