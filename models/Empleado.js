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

var empleadoShema = new Schema({
    nombreEmpresa: { type: String, required: [false, 'El Nombre de la Empresa es requerido'] },
    fechaing: { type: String, required: [false, 'La Fecha es Requerida'] },
    fecha: { type: String, required: [false, 'La Fecha es Requerida'] },
    cedula: { type: Number, unique: true, required: [false, 'Cedula es nesesaria'] },
    nombre: { type: String, required: [false, 'El nombre es nesesario'] },

    edad: { type: Number, required: [true, 'La edad es requerida'] },
    genero: { type: String, required: [true, 'El Genero es nesesario'] },
    img: { type: String, required: false },
    fcontract: { type: String, required: [false, 'El Fecha es nesesario'] },
    puestot: { type: String, required: [true, 'El Puesto es nesesario'] },
    turno: { type: String, required: [true, 'El Turno es nesesario'] },
    nhora: { type: Number, required: [false, 'El Turno es nesesario'] },
    nruidodba: { type: String, required: [true, 'El Dba es Requerido'] },
    protaudit: { type: String, required: [false, 'El Campo Procteccion es Requerido'] },
    molestias: { type: String, required: [true, 'Las molestias son Requeridas'] }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula
empleadoShema.plugin(uniqueValidation, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Empleado', empleadoShema);