const { query } = require('express');

class DataBase {
    // Método responsável pela conexão com o banco de dados
    static async connect() {
        if (global.connect && global.connection.state !== 'disconnected') {
            return global.connection;
        }

        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({
            host: 'localhost',
            port: '3000',
            user: 'root',
            password: 'my_sql',
            database: 'tarefas',
        });

        console.log("Conectou-se com Mysql!");
        global.connection = connection;
        return connection;
    }

    // Método responsável pela execução de uma query no banco de dados 
    static async query(sql) {
        const conn = await this.connect;
        const [rows] = await conn.query(sql);
        return rows;
    }
}

module.exports = {query};
