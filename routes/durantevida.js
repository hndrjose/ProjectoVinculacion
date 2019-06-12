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

//========================================================================
// CREAR NUEVO 
// libreria de ayuda: buscar en google 'body parser node'
// npm install body-parser
// libreria var bodyParser = require('body-parser')
//========================================================================
app.post('/', (req, res) => {

    var body = req.body;

    var durantevida = new DuranteVida({
        fiebre: body.fiebre,
        consultaOidos: body.consultaOidos,
        operacionO: body.operacionO,
        conciencia: body.conciencia,
        paperas: body.paperas,
        escarlatina: body.escarlatina,
        sarampion: body.sarampion,
        meningitis: body.meningitis,
        diabetes: body.diabetes,
        riñon: body.riñon,
        alergias: body.alergias,
        instrumentos_M: body.instrumentos_M,
        sorderaFamilia: body.sorderaFamilia,
        sMilitar: body.sMilitar,
        casaMR: body.casaMR,
        musica: body.musica,
        pasatiempos: body.pasatiempos,
        cohetes: body.cohetes,
        armas: body.armas,
        usado_G_K: body.usado_G_K,
        usado_Q_E: body.usado_Q_E,
        quimicos_I: body.quimicos_I,
        trabajos_Ant: body.trabajos_Ant,
        empleado: body.empleado
    });

    durantevida.save((err, durantevidaguardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear durantevida',
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            durantevida: durantevidaguardado,

        });
    });
});
// ====================================================================
// FIN CREAR NUEVOS
// ====================================================================

//========================================================================
// ACTUALIZAR 
//========================================================================
app.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;

    DuranteVida.findById(id, (err, empleadodurantevida) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar empleadodurantevida',
                errors: err

            });
        }
        if (!empleadodurantevida) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El Registro ' + id + ' no existe',
                errors: { message: 'no existe el Registro' }

            });
        }
        empleadodurantevida.fiebre = body.fiebre;
        empleadodurantevida.consultaOidos = body.consultaOidos;
        empleadodurantevida.operacionO = body.operacionO;
        empleadodurantevida.concienci = body.conciencia;
        empleadodurantevida.paperas = body.paperas;
        empleadodurantevida.escarlatina = body.escarlatina;
        empleadodurantevida.sarampion = body.sarampion;
        empleadodurantevida.meningitis = body.meningitis;
        empleadodurantevida.diabetes = body.diabetes;
        empleadodurantevida.riñon = body.riñon;
        empleadodurantevida.alergias = body.alergias;
        empleadodurantevida.instrumentos_M = body.instrumentos_M;
        empleadodurantevida.sorderaFamilia = body.sorderaFamilia;
        empleadodurantevida.sMilitar = body.sMilitar;
        empleadodurantevida.casaMR = body.casaMR;
        empleadodurantevida.musica = body.musica;
        empleadodurantevida.pasatiempos = body.pasatiempos;
        empleadodurantevida.cohetes = body.cohetes;
        empleadodurantevida.armas = body.armas;
        empleadodurantevida.usado_G_K = body.usado_G_K;
        empleadodurantevida.usado_Q_E = body.usado_Q_E;
        empleadodurantevida.quimicos_I = body.quimicos_I;
        empleadodurantevida.trabajos_Ant = body.trabajos_Ant;
        empleadodurantevida.empleado = body.empleado;

        empleadodurantevida.save((err, durantevidaguardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el Registro',
                    errors: err

                });
            }


            res.status(200).json({
                ok: true,
                empleadodurantevida: durantevidaguardado
            });

        });

    });

});
//========================================================================
// FIN DE ACTUALIZAR
//========================================================================

//========================================================================
// INICIO DE ELIMIAR REGISTROS
//========================================================================
app.delete('/:id', (req, res) => {

    var id = req.params.id;

    DuranteVida.findByIdAndRemove(id, (err, borrarregistro) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al Borrar el Registro',
                errors: err

            });
        }

        if (!borrarregistro) {
            return res.status(500).json({
                ok: false,
                mensaje: 'No existe el Registro con ese Id',
                errors: { message: 'El Registro no fue Encontrado' }

            });
        }
        res.status(200).json({
            ok: true,
            registro: borrarregistro
        });

    });
});
//========================================================================
// FIN DE ELIMINAR REGISTROS
//========================================================================

module.exports = app;