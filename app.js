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
var empleadoRuta = require('./routes/empleado');
var ayerhoyRuta = require('./routes/ayerhoy');
var durantevidaRuta = require('./routes/durantevida');
var ultimomesesRuta = require('./routes/ultimomeses');
var empresaRuta = require('./routes/empresa');
// var otoscopiaRuta = require('./routes/otoscopia');
// var audiogramaRuta = require('./routes/audiograma');
// var recomendacionesRuta = require('./routes/recomendaciones');


// Conexion a la base de datos
// 'mongodb://localhost:27017/hospitaldb'
mongoose.connection.openUri('mongodb://hndrjose:audiometria1@ds131747.mlab.com:31747/audiometria', (err, res) => {
    if (err) throw err;

    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
})


// Rutas
// app.use('/recomendaciones', recomendacionesRuta);
// app.use('/audiograma', audiogramaRuta);
// app.use('/otoscopia', otoscopiaRuta);
app.use('/empresa', empresaRuta);
app.use('/ultimomeses', ultimomesesRuta);
app.use('/durantevida', durantevidaRuta);
app.use('/ayerhoy', ayerhoyRuta);
app.use('/empleado', empleadoRuta);
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