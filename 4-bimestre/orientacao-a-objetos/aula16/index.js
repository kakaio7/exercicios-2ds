const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_CONTATOS || "contatos.json"

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

async function gravar(contatos) {
    await fs.writeFile(ARQUIVO, JSON.stringify(contatos, null, 2))
}

async function salvar(contato) {
    const contatos = await listar()
    contatos.push(contato)
    await gravar(contatos)
    return contato
}

async function remover(id) {
    const contatos = await listar()
    const restantes = contatos.filter(contato => contato.id !== id)

    if (restantes.length === contatos.length) {
        return false
    }

    await gravar(restantes)
    return true
}

async function limpar() {
    try {
        await fs.unlink(ARQUIVO)
        return true
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return false
        }

        throw erro
    }
}

module.exports = { listar, salvar, remover, limpar }
