var express = require('express');
var RepExa = require('../models/RepExaAud');
var app = express();

//========================================================================
// OBTENER AYER_HOY
//========================================================================
app.get('/', (req, res, next) => {

    // var desde = req.query.desde || 0;
    // desde = Number(desde);

    RepExa.find({})
        // .skip(desde)
        // .limit(5)
        .exec(
            (err, repexa) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando repexa',
                        errors: err

                    });
                }

                // Usuario.countDocuments({}, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    repexas: repexa,
                    // total: conteo
                });
                // });



            });

});
//========================================================================
// CREAR NUEVO AYER_HOY
// libreria de ayuda: buscar en google 'body parser node'
// npm install body-parser
// libreria var bodyParser = require('body-parser')
//========================================================================
app.post('/', (req, res) => {
    var body = req.body;
    var repexa = new RepExa({
        nlumAudio: body.nlumAudio,
        fhertz: body.fhertz,
        empleado: body.empleado

    });

    repexa.save((err, repexaguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error Guardando repexa',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            repexa: repexaguardado,

        });
    });
});
// ====================================================================
// FIN CREAR NUEVOS AYER_HOY
// ====================================================================

//========================================================================
// ACTUALIZAR AYER_HOY
//========================================================================
app.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;

    RepExa.findById(id, (err, repexa) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar repexa',
                errors: err

            });
        }
        if (!repexa) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El repexa ' + id + ' no existe',
                errors: { message: 'no existe el repexa' }

            });
        }
        repexa.nlumAudio = body.nlumAudio;
        repexa.fhertz = body.fhertz;
        repexa.empleado = body.empleado;

        repexa.save((err, repexaguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el repexa',
                    errors: err

                });
            }


            res.status(200).json({
                ok: true,
                repexa: repexaguardado
            });

        });

    });

});
//========================================================================
// FIN DE ACTUALIZAR AYER_HOY
//========================================================================
// ====================================================================
// FIN OBTENER AYER_HOY
// ====================
module.exports = app;