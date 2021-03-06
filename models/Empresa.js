// instalacion de del mongoose
var mongoose = require('mongoose');

// se instala el mongoose-unique-validator previamente
var uniqueValidation = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var empresaShema = new Schema({
    nombre: { type: String, required: [true, 'El Nombre de la Empresa es requerido'] },
    nombreEmpresa: { type: String, required: [false, 'El nombre de la empresa es requerida'] },
    direccionEmpresa: { type: String, required: [false, 'La direccion de empresa es requerida'] },
    numeroTelefono: { type: Number, unique: true, required: [false, 'El numero de Telefono es requerido'] },
    numeroTelefono2: { type: String, required: false },

});
// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula

empresaShema.plugin(uniqueValidation, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Empresa', empresaShema);