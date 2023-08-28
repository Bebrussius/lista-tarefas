const db = require("./dataBase");

class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static async listarUsuarios() {
        const usuarios = await db.query("SELECT * FROM usuario");
        return usuarios;
    }

    async salvar() {
        const sql = `INSERT INTO usuario (nome, email, senha) VALUES ('${this.nome}', '${this.email}', '${this.senha}')`;
        await db.query(sql);
        console.log("Usuário salvo com sucesso!");
    }
}

module.exports = Usuario;
