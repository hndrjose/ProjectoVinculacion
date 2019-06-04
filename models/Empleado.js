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
    Nombre_Empresa: { type: String, required: [true, 'El Nombre de la Empresa es requerido'] },
    Fecha_Ing: { type: String, required: [true, 'La Fecha es Requerida'] },
    Fecha: { type: String, required: [true, 'La Fecha es Requerida'] },
    cedula: { type: Number, unique: true, required: [true, 'Cedula es nesesaria'] },
    nombre: { type: String, required: [true, 'El nombre es nesesario'] },
    edad: { type: Number, required: [true, 'La edad es requerida'] },
    Genero: { type: String, required: [true, 'El Genero es nesesario'] },
    img: { type: String, required: false },
    F_Contract: { type: String, required: [false, 'El Fecha es nesesario'] },
    Puesto_T: { type: String, required: [true, 'El Puesto es nesesario'] },
    Turno: { type: String, required: [true, 'El Turno es nesesario'] },
    N_Horas: { type: Number, required: [false, 'El Turno es nesesario'] },
    N_Ruido_dba: { type: String, required: [true, 'El Dba es Requerido'] },
    Prot_Audit: { type: String, required: [false, 'El Campo Procteccion es Requerido'] },
    Molestias: { type: String, required: [true, 'Las molestias son Requeridas'] }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula
empleadoShema.plugin(uniqueValidation, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Empleado', empleadoShema);