const db_conection = require('../config/database.js');

exports.login = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            var { correo, pass } = req.body;
            console.log(req.body);
            // create Request object
            var request = new db_conection.sql.Request();
            // query to the database and get the records
            request.query(`EXEC [dbo].[sp_Login] @correo = '${correo}', @pass = '${pass}'`, 
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result.recordsets[0]);
                }
            });
        }
    });
};