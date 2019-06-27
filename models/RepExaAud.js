// instalacion de del mongoose
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

// aqui puedo declarar los item para que solo sean aceptado en un campo especifico
// var rolesvalidos = {
//     values: ['ADMIN', 'USER'],
//     message: '{VALUE} no es un Rol permitido'
// }

var repexaaudShema = new Schema({
    nlumAudio: { type: Number, required: [false, 'El Nivel del Lumbral Auditivo'] },
    fhertz: { type: String, required: [false, 'Frecuencia en Hertz'] },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleado' }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Repexaaud', repexaaudShema);