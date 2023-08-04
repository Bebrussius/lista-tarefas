const { query } = require("./dataBase");

class Tarefa {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    static listarTarefas() {
        const db = require("./dataBase");
        let tarefas = db.query("SELECT * FROM tarefas");
        return tarefas;
    }

    salvar() {
        const db = require("./dataBase");
        let resp = db.query("INSERT INTO tarefa (title) VALUES ('$(this.title), ");
        console.log(resp);
    }
}

module.exports = Tarefa;
