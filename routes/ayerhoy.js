var express = require('express');
var AyerHoy = require('../models/AyerHoy');
var app = express();

//========================================================================
// OBTENER AYER_HOY
//========================================================================
app.get('/', (req, res, next) => {

    // var desde = req.query.desde || 0;
    // desde = Number(desde);

    AyerHoy.find({})
        // .skip(desde)
        // .limit(5)
        .exec(
            (err, ayerhoy) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando AyerHoy',
                        errors: err

                    });
                }

                // Usuario.countDocuments({}, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    ayerhoys: ayerhoy,
                    // total: conteo
                });
                // });



            });

});
// ====================================================================
// FIN OBTENER AYER_HOY
// ====================
module.exports = app;