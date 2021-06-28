const db_conection = require('../config/database.js');

exports.gets = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            // create Request object
            var request = new db_conection.sql.Request();
            // query to the database and get the records
            request.query(`SELECT * FROM [dbo].[clasificador]`, 
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