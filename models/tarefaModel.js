const { query } = require("./dataBase");

class Tarefa {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    static async listarTarefas() {
        const db = require("./dataBase");
        const tarefas = await db.query("SELECT * FROM tarefa");
        return tarefas;
    }

    async salvar() {
        const db = require("./dataBase");
        const sql = `INSERT INTO tarefa (tarefa) VALUES ('${this.title}')`;
        await db.query(sql);
        console.log("Tarefa salva com sucesso!");
    }

    static async deleteTarefa(id){
        const db = require('./dataBase');
        if(await db.query("DELETE FROM tarefa WHERE id = "+id)){
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports = Tarefa;
