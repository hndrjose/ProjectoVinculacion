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
//========================================================================
// CREAR NUEVO ULTIMO_MESES
// libreria de ayuda: buscar en google 'body parser node'
// npm install body-parser
// libreria var bodyParser = require('body-parser')
//========================================================================
app.post('/', (req, res) => {
    var body = req.body;
    var ultimomeses = new UltimoMeses({
        olor_O: body.olor_O,
        supuracion_s: body.llego_moto,
        ruido_t_z: body.ruido_t_,
        mareo_v: body.mareo_v,
        sordera_s: body.sordera_s,
        tapado_m_ll: body.tapado_m_ll,
        solor_m_ru: body.solor_m_ru,
        golpes_s_f_o: body.golpes_s_f_o,
        presion_a_a: body.presion_a_a,
        medicinas:body.medicinas,
        empleado: body.empleado

    });

    ultimomeses.save((err, ultimomesesguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error Guardando ultimomeses',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            ultimomeses: ultimomesesguardado,

        });
    });
});
// ====================================================================
// FIN CREAR NUEVOS ULTIMO_MESES
// ====================================================================

//========================================================================
// ACTUALIZAR ULTIMO_MESES
//========================================================================
app.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;

    UltimoMeses.findById(id, (err, ultimomeses) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar ultimomeses',
                errors: err

            });
        }
        if (!ultimomeses) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El ultimomeses ' + id + ' no existe',
                errors: { message: 'no existe el ultimomeses' }

            });
        }
        ultimomeses.olor_O = body.olor_O,
        ultimomeses.supuracion_s = body.supuracion_s,
        ultimomeses.ruido_t_z = body.ruido_t_z,
        ultimomeses.mareo_v = body.mareo_v,
        ultimomeses.sordera_s = body.sordera_s,
        ultimomeses.tapado_m_ll= body.tapado_m_ll,
        ultimomeses.solor_m_ru = body.solor_m_ru ,
        ultimomeses.golpes_s_f_o = body.golpes_s_f_o ,
        ultimomeses.presion_a_a = body.presion_a_a ,
        ultimomeses.medicinas = body.medicinas ,
        ultimomeses.empleado = body.empleado

        ultimomeses.save((err, ultimomesesguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el ultimomeses',
                    errors: err

                });
            }


            res.status(200).json({
                ok: true,
                ultimomeses: ultimomesesguardado
            });

        });

    });

});
//========================================================================
// FIN DE ACTUALIZAR ULTIMO_MESES
//========================================================================
// ====================================================================
// FIN OBTENER ULTIMO_MESES
// ====================
module.exports = app;