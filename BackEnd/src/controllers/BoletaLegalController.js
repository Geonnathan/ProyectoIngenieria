const db_conection = require('../config/database.js');

exports.save = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            var { idBoleta, idUsuario, idClasificador, idRespuesta, fechaHora, palabraClaveConsulta1, palabraClaveConsulta2, asuntoDetallado,
                ipComputadora, cantidadCambios, detalleRespuesta, fechaHoraRespuesta, idUsuarioRespuesta, ipComputadoraRespuesta, anio,
                evidenciaArchivo1, detalle1, evidenciaArchivo2, detalle2, respuestaArchivo1, respuestaArchivo2} = req.body;
            console.log(req.body);
            // create Request object
            var request = new db_conection.sql.Request();
            var n = "${palabraClaveConsulta1}";
            // query to the database and get the records
            request.query(`EXECUTE [dbo].[sp_insertBoleta] 
            @idBoleta=${idBoleta},
           @idUsuario=${idUsuario},
           @idClasificador=${idClasificador},
           @idRespuesta=${idRespuesta},
           @fechaHora='${fechaHora}',
           @palabraClaveConsulta1='${palabraClaveConsulta1}',
           @palabraClaveConsulta2='${palabraClaveConsulta2}',
           @asuntoDetallado='${asuntoDetallado}',
           @ipComputadora='${ipComputadora}',
           @cantidadCambios=${cantidadCambios},
           @detalleRespuesta='${detalleRespuesta}',
           @fechaHoraRespuesta='${fechaHoraRespuesta}',
           @idUsuarioRespuesta=${idUsuarioRespuesta},
           @ipComputadoraRespuesta='${ipComputadoraRespuesta}',
           @anio='${anio}',
           @evidenciaArchivo1='${evidenciaArchivo1}',
           @detalle1='${detalle1}',
           @evidenciaArchivo2='${evidenciaArchivo2}',
           @detalle2='${detalle2}',
           @respuestaArchivo1='${respuestaArchivo1}',
           @respuestaArchivo2='${respuestaArchivo2}'`,
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
