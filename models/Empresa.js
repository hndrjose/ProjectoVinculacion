// instalacion de del mongoose
var mongoose = require('mongoose');

// se instala el mongoose-unique-validator previamente
var uniqueValidation = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

// aqui puedo declarar los item para que solo sean aceptado en un campo especifico
// var rolesvalidos = {
//     values: ['ADMIN', 'USER'],
//     message: '{VALUE} no es un Rol permitido'
// }

var empresaShema = new Schema({
    nombre: { type: String, required: [true, 'El Nombre de la Empresa es requerido'] }

});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula
empresaShema.plugin(uniqueValidation, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Empresa', empresaShema);