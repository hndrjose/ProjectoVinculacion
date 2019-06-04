var express = require('express');
var Empleado = require('../models/Empleado');
var app = express();

//========================================================================
// OBTENER EMPLEADOS
//========================================================================
app.get('/', (req, res, next) => {

    // var desde = req.query.desde || 0;
    // desde = Number(desde);

    Empleado.find({})
        // .skip(desde)
        // .limit(5)
        .exec(
            (err, empleado) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando Empleado',
                        errors: err

                    });
                }

                // Usuario.countDocuments({}, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    empleados: empleado,
                    // total: conteo
                });
                // });



            });

});
// ====================================================================
// FIN OBTENER EMPLEADOS
// ====================
module.exports = app;