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
//========================================================================
// CREAR NUEVO AYER_HOY
// libreria de ayuda: buscar en google 'body parser node'
// npm install body-parser
// libreria var bodyParser = require('body-parser')
//========================================================================
app.post('/', (req, res) => {
    var body = req.body;
    var ayerhoy = new AyerHoy({
        llego_moto: body.llego_moto,
        llego_bus: body.llego_bus,
        griparot: body.griparot,
        ruido_f: body.ruido_f,
        fiesta: body.fiesta,
        otros: body.otros,
        empleado: body.empleado

    });

    ayerhoy.save((err, ayerhoyguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error Guardando AyerHoy',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            ayerhoy: ayerhoyguardado,

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

    AyerHoy.findById(id, (err, ayerhoy) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar AyerHoy',
                errors: err

            });
        }
        if (!ayerhoy) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El Ayerhoy ' + id + ' no existe',
                errors: { message: 'no existe el AyerHoy' }

            });
        }
        ayerhoy.llego_moto = body.llego_moto,
            ayerhoy.llego_bus = body.llego_bus,
            ayerhoy.griparot = body.griparot,
            ayerhoy.ruido_f = body.ruido_f,
            ayerhoy.fiesta = body.fiesta,
            ayerhoy.otros = body.otros,
            ayerhoy.empleado = body.empleado

        ayerhoy.save((err, ayerhoyguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el ayerhoy',
                    errors: err

                });
            }


            res.status(200).json({
                ok: true,
                ayerhoy: ayerhoyguardado
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