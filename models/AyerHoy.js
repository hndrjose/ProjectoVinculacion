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

var ayer_hoyShema = new Schema({
    llego_moto: { type: String, required: [false, 'Fiebre de la Empresa es requerido'] },
    llego_bus: { type: String, required: [false, 'Consulta_Oidos es Requerida'] },
    griparot: { type: String, required: [false, 'Operacion_O es Requerida'] },
    ruido_f: { type: String, required: [false, 'Conciencia es nesesaria'] },
    fiesta: { type: String, required: [false, 'Paperas es nesesario'] },
    otros: { type: String, required: [false, 'Escarlatina es requerida'] },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleado' }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Ayer_Hoy', ayer_hoyShema);