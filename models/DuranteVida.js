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

var Durante_VidaShema = new Schema({
    Fiebre: { type: String, required: [false, 'Fiebre de la Empresa es requerido'] },
    Consulta_Oidos: { type: String, required: [false, 'Consulta_Oidos es Requerida'] },
    Operacion_O: { type: String, required: [false, 'Operacion_O es Requerida'] },
    Conciencia: { type: String, required: [false, 'Conciencia es nesesaria'] },
    Paperas: { type: String, required: [false, 'Paperas es nesesario'] },
    Escarlatina: { type: String, required: [false, 'Escarlatina es requerida'] },
    Sarampion: { type: String, required: [false, 'Sarampion es nesesario'] },
    Meningitis: { type: String, required: [false, 'Meningitis es nesesario'] },
    Diabetes: { type: String, required: [false, 'Diabetes es nesesario'] },
    Riñon: { type: String, required: [false, 'Riñon es nesesario'] },
    Alergias: { type: String, required: [false, 'Alergias es nesesario'] },
    Instrumentos_M: { type: String, required: [false, 'Instrumentos_M es nesesario'] },
    Sordera_Familia: { type: String, required: [false, 'Sordera_Familia es nesesario'] },
    S_Militar: { type: String, required: [false, 'S_Militar es nesesario'] },
    Casa_M_R: { type: String, required: [false, 'Casa_M_R es nesesario'] },
    Musica: { type: String, required: [false, 'Musica es nesesario'] },
    Pasatiempos: { type: String, required: [false, 'Pasatiempos es nesesario'] },
    Cohetes: { type: String, required: [false, 'Cohetes es nesesario'] },
    Armas: { type: String, required: [false, 'Armas es nesesario'] },
    Usado_G_K: { type: String, required: [false, 'Usado_G_K es nesesario'] },
    Usado_Q_E: { type: String, required: [false, 'Usado_Q_E es nesesario'] },
    Quimicos_I: { type: String, required: [false, 'Quimicos_Ies nesesario'] },
    Trabajos_Ant: { type: String, required: [false, 'Trabajos_Antes nesesario'] },
    Empleado: { type: Schema.Types.ObjectId, ref: 'Empleado' }


});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Durante_Vida', Durante_VidaShema);
