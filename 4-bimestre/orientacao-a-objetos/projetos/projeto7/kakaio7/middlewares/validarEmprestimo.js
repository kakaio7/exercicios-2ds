function validarEmprestimo(req, res, next) {
    if (!req.body || !req.body.leitor) {
        return res.status(400).json({ erro: "O campo leitor e obrigatorio" })
    }

    if (!req.body.livro) {
        return res.status(400).json({ erro: "O campo livro e obrigatorio" })
    }

    if (typeof req.body.dias !== "number") {
        return res.status(400).json({ erro: "O campo dias deve ser um numero" })
    }

    if (req.body.dias <= 0) {
        return res.status(400).json({ erro: "O campo dias deve ser maior que zero" })
    }

    next()
}

module.exports = validarEmprestimo
