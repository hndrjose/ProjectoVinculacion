var express = require('express');

var app = express();
var Prueba = require('../models/prueba');
var mdauntentic = require('../midlewares/autenticacion');

//========================================================================
// OBTENER MEDICOS
//========================================================================
// app.get('/', (req, res, next) => {

//     var desde = req.query.desde || 0;
//     desde = Number(desde);

//     Medico.find({}, 'nombre img usuario hospital')
//         .populate('usuario', 'nombre email')
//         .populate('hospital')
//         .skip(desde)
//         .limit(5)
//         .exec(
//             (err, medico) => {

//                 if (err) {
//                     return res.status(500).json({
//                         ok: false,
//                         mensaje: 'Error Cargando Medicos',
//                         errors: err

//                     });
//                 }
//                 Medico.countDocuments({}, (err, conteo) => {
//                     res.status(200).json({
//                         ok: true,
//                         medicos: medico,
//                         total: conteo

//                     });
//                 });

//             });
// });
// ====================================================================
// FIN OBTENER MEDICOS
// ====================================================================

// ====================================================================
// CREAR MEDICOS
// ====================================================================
app.post('/', (req, res) => {

    var body = req.body;

    var prueba = new Prueba({
        nombre: body.nombre,
        otros: body.otros


    });

    prueba.save((err, medicoguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al Crear Medicos',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            medicos: medicoguardado
        });
    });

});

module.exports = app;