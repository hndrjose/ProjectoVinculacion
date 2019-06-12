var express = require('express');
var Empresa = require('../models/Empresa');
var app = express();

//========================================================================
// OBTENER EMPRESA
//========================================================================
app.get('/', (req, res, next) => {

    // var desde = req.query.desde || 0;
    // desde = Number(desde);

    Empresa.find({})
        // .skip(desde)
        // .limit(5)
        .exec(
            (err, empresa) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando Empresa',
                        errors: err

                    });
                }

                // Usuario.countDocuments({}, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    empresas: empresa,
                    // total: conteo
                });
                // });



            });

});
// ====================================================================
// FIN OBTENER EMPRESA
// ====================

//========================================================================
// CREAR NUEVO EMPRESA
// libreria de ayuda: buscar en google 'body parser node'
// npm install body-parser
// libreria var bodyParser = require('body-parser')
//========================================================================
app.post('/', (req, res) => {
    var body = req.body;
    var empresa = new Empresa({
        nombre: body.nombre

    });

    empresa.save((err, empresaguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error Guardando Empresa',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            empresa: empresaguardado,

        });
    });
});
// ====================================================================
// FIN CREAR NUEVOS EMPRESA
// ====================================================================

//========================================================================
// ACTUALIZAR EMPRESA
//========================================================================
app.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;

    Empresa.findById(id, (err, empresa) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar empresa',
                errors: err

            });
        }
        if (!empresa) {
            return res.status(400).json({
                ok: false,
                mensaje: 'La empresa ' + id + ' no existe',
                errors: { message: 'no existe la empresa' }

            });
        }
        empresa.nombre = body.nombre;
       

        empresa.save((err, empresaguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar la empresa',
                    errors: err

                });
            }


            res.status(200).json({
                ok: true,
                empresa: empresaguardado
            });

        });

    });

});
//========================================================================
// FIN DE ACTUALIZAR EMPRESA
//========================================================================

module.exports = app;