var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;


//========================================================================
// VERIFICAR TOKEN
//========================================================================

exports.verificatoken = function(req, res, next) {
    var token = req.query.token;

    jwt.verify(token, SEED, (err, decode) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }
        req.usuario = decode.usuario;

        next();
        // res.status(201).json({
        //     ok: true,
        //     decode: decode
        // });

    });

}

//========================================================================
// FIN VERIFICAR TOKEN
//========================================================================

//========================================================================
// VERIFICAR ADMIN
//========================================================================

exports.verificaAdminRole = function(req, res, next) {
    var token = req.query.token;

    var usuario = req.usuario;

    if (usuario.role === 'ADMIN') {
        next();
        return;
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'No es Ususario Administrador',
            errors: { message: 'No es administrador' }
        });
    }




}

//========================================================================
// FIN VERIFICAR ADMIN
//========================================================================

//========================================================================
// VERIFICAR ADMIN O MISMO USUARIO
//========================================================================

exports.verificaAdminRole_Usuario = function(req, res, next) {
    var token = req.query.token;

    var usuario = req.usuario;
    var id = req.params.id;

    if (usuario.role === 'ADMIN' || usuario.id === id) {
        next();
        return;
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'No es el mismo usuario',
            errors: { message: 'No es administrador' }
        });
    }




}

//========================================================================
// FIN VERIFICAR ADMIN
//========================================================================