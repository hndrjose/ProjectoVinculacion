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

var Ayer_HoyShema = new Schema({
    Llego_Moto: { type: String, required: [false, 'Fiebre de la Empresa es requerido'] },
    Llego_Bus: { type: String, required: [false, 'Consulta_Oidos es Requerida'] },
    Gripa_R_Ot: { type: String, required: [false, 'Operacion_O es Requerida'] },
    Ruido_F: { type: String, required: [false, 'Conciencia es nesesaria'] },
    Fiesta: { type: String, required: [false, 'Paperas es nesesario'] },
    Otros: { type: String, required: [false, 'Escarlatina es requerida'] },
    Empleado: { type: Schema.Types.ObjectId, ref: 'Empleado' }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Ayer_Hoy', Ayer_HoyShema);