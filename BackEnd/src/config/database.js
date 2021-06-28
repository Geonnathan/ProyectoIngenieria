const sql = require('mssql');

const config = {
    user: 'admin',
    password: 'admin',
    server: 'DESKTOP-2O1E6I7',
    database: 'base_boleta_legal',
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

exports.config = config;
exports.sql = sql;