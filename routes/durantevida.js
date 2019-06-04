var express = require('express');
var DuranteVida = require('../models/DuranteVida');
var app = express();

//========================================================================
// OBTENER DURANTE_VIDA
//========================================================================
app.get('/', (req, res, next) => {

    // var desde = req.query.desde || 0;
    // desde = Number(desde);

    DuranteVida.find({})
        // .skip(desde)
        // .limit(5)
        .exec(
            (err, durantevida) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando DuranteVida',
                        errors: err

                    });
                }

                // Usuario.countDocuments({}, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    adurantevidas: durantevida,
                    // total: conteo
                });
                // });



            });

});
// ====================================================================
// FIN OBTENER DURANTE_VIDA
// ====================
module.exports = app;