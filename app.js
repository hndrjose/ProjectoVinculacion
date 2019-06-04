// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// Inicializar Variable
var app = express();

// enable-cors.org, expressjs  mideware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // me permitira hacer peticiones http al server
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});



// Body Parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//server index config
//sirve para mostrar las imagenes de todas las carpetas dendro del directorio ouploads
//localhost:3000/uploads
var serveIndex = require('serve-index');
app.use(express.static(__dirname + '/'))
app.use('/uploads', serveIndex(__dirname + '/uploads'));



//Inicializar Rutas
var appRutas = require('./routes/app');
var usuarioRutas = require('./routes/usuario');
var hospitalRutas = require('./routes/hospital');
var medicoRutas = require('./routes/medico');
var busquedaRutas = require('./routes/busqueda');
var uploadRutas = require('./routes/upload');
var imagenesRutas = require('./routes/imagenes');
var loginRutas = require('./routes/login');
var empleadoRutas = require('./routes/empleado')
var ayerhoyRutas = require('./routes/ayerhoy')
var durantevidaRutas = require('./routes/durantevida')
var ultimomesesRutas = require('./routes/ultimomeses')


// Conexion a la base de datos
// 'mongodb://localhost:27017/hospitaldb'
mongoose.connection.openUri('mongodb://userjose:systemas123@ds153824.mlab.com:53824/hospitaldb', (err, res) => {
    if (err) throw err;

    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
})


// Rutas
app.use('/ayerhoy', ayerhoyRutas);
app.use('/durantevida', durantevidaRutas);
app.use('/ultimomeses', ultimomesesRutas);
app.use('/empleado', empleadoRutas);
app.use('/usuario', usuarioRutas);
app.use('/hospital', hospitalRutas);
app.use('/medico', medicoRutas);
app.use('/login', loginRutas);
app.use('/busqueda', busquedaRutas);
app.use('/upload', uploadRutas);
app.use('/imagenes', imagenesRutas);
app.use('/', appRutas);



// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})