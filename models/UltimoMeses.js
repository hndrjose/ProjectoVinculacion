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

var ultimo_mesesShema = new Schema({
    olor_O: { type: String, required: [false, 'El Dolor_O de la Empresa es requerido'] },
    supuracion_s: { type: String, required: [false, 'La Supuracion_S es Requerida'] },
    ruido_t_z: { type: String, required: [false, 'La Ruido_T_Z es Requerida'] },
    mareo_v: { type: String, required: [false, 'Mareo_V es nesesaria'] },
    sordera_s: { type: String, required: [false, 'El Sordera_S es nesesario'] },
    tapado_m_ll: { type: String, required: [false, 'Tapado_M_Ll es requerida'] },
    solor_m_ru: { type: String, required: [false, 'Dolor_M_Ru es nesesario'] },
    golpes_s_f_o: { type: String, required: [false, 'Golpes_S_F_Oes nesesario'] },
    presion_a_a: { type: String, required: [false, 'Presion_A_A es nesesario'] },
    medicinas: { type: String, required: [true, 'Medicinas es nesesario'] },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleado' }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Ultimo_Meses', ultimo_mesesShema);