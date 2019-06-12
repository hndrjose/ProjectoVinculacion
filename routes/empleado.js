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

//========================================================================
// OBTENER MEDICO POR ID
//========================================================================
app.get('/:id', (req, res) => {
    var id = req.params.id;

    Empleado.findById(id)
        // .populate('usuario', 'id nombre email img')
        // .populate('hospital')
        .exec((err, empleado) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error Cargando Empleado',
                    errors: err

                });
            }

            if (!empleado) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El Empleado con el id ' + cedula + 'no existe',
                    errors: { message: 'No existe un empleado con ese ID' }

                });
            }

            res.status(200).json({
                ok: true,
                empleados: empleado

            });
        });
});
// ====================================================================
// FIN OBTENER MEDICO POR ID
// ====================================================================




//========================================================================
// CREAR NUEVO EMPLEADOS
// libreria de ayuda: buscar en google 'body parser node'
// npm install body-parser
// libreria var bodyParser = require('body-parser')
//========================================================================
app.post('/', (req, res) => {
    var body = req.body;
    var empleado = new Empleado({
        nombreEmpresa: body.nombreEmpresa,
        fechaing: body.fechaing,
        fecha: body.fecha,
        cedula: body.cedula,
        nombre: body.nombre,
        edad: body.edad,
        genero: body.genero,
        img: body.img,
        fcontract: body.fcontract,
        puestot: body.puestot,
        turno: body.turno,
        nhoras: body.nhoras,
        nruidodba: body.nruidodba,
        protaudit: body.protaudit,
        molestias: body.molestias

    });

    empleado.save((err, empleadoguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error Guardando Empleados',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            empleado: empleadoguardado

        });
    });
});
// ====================================================================
// FIN CREAR NUEVOS EMPLEADOS
// ====================================================================

//========================================================================
// ACTUALIZAR EMPLEADOS
//========================================================================
app.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;

    Empleado.findById(id, (err, empleado) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar empleado',
                errors: err

            });
        }
        if (empleado) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El empleado ' + id + ' no existe',
                errors: { message: 'no existe el empleado' }

            });
        }
        empleado.nombreEmpresa = body.nombreEmpresa;
        empleado.fechaing = body.fechaing;
        empleado.fecha = body.fecha;
        empleado.cedula = body.cedula;
        empleado.nombre = body.nombre;
        empleado.edad = body.edad;
        empleado.genero = body.genero;
        empleado.img = body.img;
        empleado.fcontract = body.fcontract;
        empleado.puestot = body.puestot;
        empleado.turno = body.turno;
        empleado.nhoras = body.nhoras;
        empleado.nruidodba = body.nruidodba;
        empleado.protaudit = body.protaudit;
        empleado.molestias = body.molestia;

        empleado.save((err, empleadoguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el empleado',
                    errors: err

                });
            }


            res.status(200).json({
                ok: true,
                empleado: empleadoguardado
            });

        });

    });

});
//========================================================================
// FIN DE ACTUALIZAR EMPLEADOS
//========================================================================

module.exports = app;