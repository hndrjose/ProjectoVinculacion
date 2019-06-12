var express = require('express');
var app = express();

var Hospital = require('../models/hospital');
var Medico = require('../models/medico');
var Usuario = require('../models/usuario');
var Empleado = require('../models/Empleado');

//==========================================
// BUSQUEDA POR COLECCION
//==========================================

app.get('/coleccion/:tabla/:busqueda', (req, res) => {

    var busqueda = req.params.busqueda;
    var tabla = req.params.tabla;
    //crear una exprecion regular
    var regex = new RegExp(busqueda, 'i');
    var promesa;

    switch (tabla) {
        case 'empleados':
            promesa = busquedempleado(busqueda, regex);
            break;

        case 'hospitales':
            promesa = busquedaHospital(busqueda, regex);
            break;

        case 'medico':
            promesa = busquedamedico(busqueda, regex);
            break;

        default:
            return res.status(400).json({
                ok: false,
                mensaje: tabla + ' --- Los tipos de busqueda solo son: usuario, medico y hospitales',
                error: { message: 'paron de la busqueda no valido' }
            });
    }
    promesa.then(data => {
        res.status(200).json({
            ok: true,
            [tabla]: data
        });
    });

});




//==========================================
// BUSQUEDA GENERAL
//==========================================

// Rutas de la busqueda
app.get('/todo/:busqueda', (req, res, next) => {

    var busqueda = req.params.busqueda;
    //crear una exprecion regular
    var regex = new RegExp(busqueda, 'i');

    // esta es una Promesa mas optimisada donde resuvos las respuestas de las funciones de busqueda
    Promise.all([
        // busquedaHospital(busqueda, regex),
        // busquedamedico(busqueda, regex),
        // busquedusuario(busqueda, regex),
        busquedempleado(busqueda, regex)
    ]).then(respuestas => {
        res.status(200).json({
            ok: true,
            // hospitales: respuestas[0],
            // medico: respuestas[1],
            // usuario: respuestas[2],
            empleado: respuestas[0]
        });
    });

    //aqui me retruna el resultado de la promesa dentro de la funcion busquedahospitales
    // busquedaHospital(busqueda, regex)
    //     .then(hospitales => {
    //         res.status(300).json({
    //             ok: true,
    //             hospitales: hospitales
    //         });
    //     })

    // Funcion Basica para hacer una busqueda en unos de los modelos de kas base de datos
    // Hospital.find({ nombre: regex }, (err, hospitales) => {

    //     res.status(300).json({
    //         ok: true,
    //         hospitales: hospitales
    //     });
    // });

});

function busquedaHospital(busqueda, regex) {

    return new Promise((resolve, reject) => {

        Hospital.find({ nombre: regex })
            .populate('usuario', 'nombre email img')
            .exec((err, hospitales) => {
                if (err) {
                    reject('Error al cargar Hospitales', err);
                } else {
                    resolve(hospitales);
                }
            });
    });
}

function busquedamedico(busqueda, regex) {

    return new Promise((resolve, reject) => {

        Medico.find({ nombre: regex })
            .populate('usuario', 'nombre email img')
            .populate('hospital')
            .exec((err, medico) => {
                if (err) {
                    reject('Error al cargar Medicos', err);
                } else {
                    resolve(medico);
                }
            });

    });
}

function busquedusuario(busqueda, regex) {

    return new Promise((resolve, reject) => {

        Usuario.find({}, 'img nombre email role')
            .or([{ 'nombre': regex }, { 'email': regex }])
            .exec((err, usuario) => {

                if (err) {
                    reject('Error al cargar Usuario', err);
                } else {
                    resolve(usuario);
                }

            });

    });
}

function busquedempleado(busqueda, regex) {

    return new Promise((resolve, reject) => {

        Empleado.find({}, 'nombre edad')
            .or([{ 'nombre': regex }, { 'cedula': regex }])
            .exec((err, empleado) => {

                if (err) {
                    reject('Error al cargar empleado', err);
                } else {
                    resolve(empleado);
                }

            });

    });
}



module.exports = app;