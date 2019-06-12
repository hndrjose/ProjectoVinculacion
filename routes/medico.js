var express = require('express');

var app = express();
var Medico = require('../models/medico');
var mdauntentic = require('../midlewares/autenticacion');

//========================================================================
// OBTENER MEDICOS
//========================================================================
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);

    Medico.find({}, 'nombre img usuario hospital')
        .populate('usuario', 'nombre email')
        .populate('hospital')
        .skip(desde)
        .limit(5)
        .exec(
            (err, medico) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error Cargando Medicos',
                        errors: err

                    });
                }
                Medico.countDocuments({}, (err, conteo) => {
                    res.status(200).json({
                        ok: true,
                        medicos: medico,
                        total: conteo

                    });
                });

            });
});
// ====================================================================
// FIN OBTENER MEDICOS
// ====================================================================

// ====================================================================
// CREAR MEDICOS
// ====================================================================
app.post('/', mdauntentic.verificatoken, (req, res) => {

    var body = req.body;

    var medico = new Medico({
        nombre: body.nombre,
        usuario: req.usuario._id,
        hospital: body.hospital

    });

    medico.save((err, medicoguardado) => {
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


//========================================================================
// OBTENER MEDICO POR ID
//========================================================================
app.get('/:id', (req, res) => {
    var id = req.params.id;

    Medico.findById(id)
        .populate('usuario', 'id nombre email img')
        .populate('hospital')
        .exec((err, medico) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error Cargando Medico',
                    errors: err

                });
            }

            if (!medico) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El medico con el id ' + id + 'no existe',
                    errors: { message: 'No existe un medico con ese ID' }

                });
            }

            res.status(200).json({
                ok: true,
                medicos: medico

            });
        });
});
// ====================================================================
// FIN OBTENER MEDICO POR ID
// ====================================================================


//========================================================================
// ACTUALIZAR 
//========================================================================
app.put('/:id', mdauntentic.verificatoken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    Medico.findById(id, (err, medico) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar Hospital',
                errors: err

            });
        }
        if (!medico) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El medico ' + id + ' no existe',
                errors: { message: 'no existe el medico' }

            });
        }
        medico.nombre = body.nombre;
        medico.usuario = req.usuario._id;
        medico.hospital = body.hospital;


        medico.save((err, medicoguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el Medico',
                    errors: err

                });


            }

            res.status(200).json({
                ok: true,
                medicos: medicoguardado
            });

            //         usuarioguardado.password = ';)';

        });
    });
});


//========================================================================
// FIN DE ACTUALIZAR USUARIOS
//========================================================================

//========================================================================
// INICIO DE ELIMIAR HOSPITAL POT ID
//========================================================================
app.delete('/:id', mdauntentic.verificatoken, (req, res) => {

    var id = req.params.id;

    Medico.findByIdAndRemove(id, (err, borrarmedico) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al Borrar Medico',
                errors: err

            });
        }

        if (!borrarmedico) {
            return res.status(500).json({
                ok: false,
                mensaje: 'No existe el Medico con ese Id',
                errors: { message: 'El Medico no fue Encontrado' }

            });
        }
        res.status(200).json({
            ok: true,
            medicos: borrarmedico
        });

    });
});
//========================================================================
// FIN DE ELIMINAR USUARIOS
//========================================================================
module.exports = app;