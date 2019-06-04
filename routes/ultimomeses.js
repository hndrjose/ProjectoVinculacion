var express = require('express');
var UltimoMeses = require('../models/UltimoMeses');
var app = express();

//========================================================================
// OBTENER ULTIMO_MESES
//========================================================================
app.get('/', (req, res, next) => {

    // var desde = req.query.desde || 0;
    // desde = Number(desde);

    UltimoMeses.find({})
        // .skip(desde)
        // .limit(5)
        .exec(
            (err, ultimomeses) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando UltimoMeses',
                        errors: err

                    });
                }

                // Usuario.countDocuments({}, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    ultimomesess: ultimomeses,
                    // total: conteo
                });
                // });



            });

});
// ====================================================================
// FIN OBTENER ULTIMO_MESES
// ====================
module.exports = app;