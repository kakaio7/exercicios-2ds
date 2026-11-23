const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_COMPRAS || "compras.json"

async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")
        return JSON.parse(conteudo)
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }

        throw erro
    }
}

async function gravar(compras) {
    await fs.writeFile(ARQUIVO, JSON.stringify(compras, null, 2))
}

async function salvar(compra) {
    const compras = await listar()
    compras.push(compra)
    await gravar(compras)
    return compra
}

async function atualizar(id, dados) {
    const compras = await listar()
    const indice = compras.findIndex(compra => compra.id === id)

    if (indice === -1) {
        return null
    }

    compras[indice] = { ...compras[indice], ...dados }
    await gravar(compras)
    return compras[indice]
}

async function remover(id) {
    const compras = await listar()
    const restantes = compras.filter(compra => compra.id !== id)

    if (restantes.length === compras.length) {
        return false
    }

    await gravar(restantes)
    return true
}

module.exports = { listar, salvar, atualizar, remover }
