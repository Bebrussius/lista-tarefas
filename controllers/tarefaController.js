
const Tarefa = require('../models/tarefaModel');

let tarefas = [];

async function getTarefas(req, res) {
    tarefas = await Tarefa.listarTarefas();
    console.log(tarefas);
    res.render('tarefas', { tarefas });
}

function addTarefa(req, res) {
    const { title } = req.body;

    const tarefa = new Tarefa(null, title, false);
    tarefa.salvar();
    res.redirect('/tarefas');
}

module.exports = { getTarefas, addTarefa, };
