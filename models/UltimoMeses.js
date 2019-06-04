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

var Ultimo_MesesShema = new Schema({
    Dolor_O: { type: String, required: [false, 'El Dolor_O de la Empresa es requerido'] },
    Supuracion_S: { type: String, required: [false, 'La Supuracion_S es Requerida'] },
    Ruido_T_Z: { type: String, required: [false, 'La Ruido_T_Z es Requerida'] },
    Mareo_V: { type: String, required: [false, 'Mareo_V es nesesaria'] },
    Sordera_S: { type: String, required: [false, 'El Sordera_S es nesesario'] },
    Tapado_M_Ll: { type: String, required: [false, 'Tapado_M_Ll es requerida'] },
    Dolor_M_Ru: { type: String, required: [false, 'Dolor_M_Ru es nesesario'] },
    Golpes_S_F_O: { type: String, required: [false, 'Golpes_S_F_Oes nesesario'] },
    Presion_A_A: { type: String, required: [false, 'Presion_A_A es nesesario'] },
    Medicinas: { type: String, required: [true, 'Medicinas es nesesario'] },
    Empleado: { type: Schema.Types.ObjectId, ref: 'Empleado' }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Ultimo_Meses', Ultimo_MesesShema);