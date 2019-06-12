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

var durante_vidaShema = new Schema({
    fiebre: { type: String, required: [false, 'Fiebre de la Empresa es requerido'] },
    consultaOidos: { type: String, required: [false, 'Consulta_Oidos es Requerida'] },
    operacionO: { type: String, required: [false, 'Operacion_O es Requerida'] },
    conciencia: { type: String, required: [false, 'Conciencia es nesesaria'] },
    paperas: { type: String, required: [false, 'Paperas es nesesario'] },
    escarlatina: { type: String, required: [false, 'Escarlatina es requerida'] },
    sarampion: { type: String, required: [false, 'Sarampion es nesesario'] },
    meningitis: { type: String, required: [false, 'Meningitis es nesesario'] },
    diabetes: { type: String, required: [false, 'Diabetes es nesesario'] },
    riñon: { type: String, required: [false, 'Riñon es nesesario'] },
    alergias: { type: String, required: [false, 'Alergias es nesesario'] },
    instrumentos_M: { type: String, required: [false, 'Instrumentos_M es nesesario'] },
    sorderaFamilia: { type: String, required: [false, 'Sordera_Familia es nesesario'] },
    sMilitar: { type: String, required: [false, 'S_Militar es nesesario'] },
    casaMR: { type: String, required: [false, 'Casa_M_R es nesesario'] },
    musica: { type: String, required: [false, 'Musica es nesesario'] },
    pasatiempos: { type: String, required: [false, 'Pasatiempos es nesesario'] },
    cohetes: { type: String, required: [false, 'Cohetes es nesesario'] },
    armas: { type: String, required: [false, 'Armas es nesesario'] },
    usado_G_K: { type: String, required: [false, 'Usado_G_K es nesesario'] },
    usado_Q_E: { type: String, required: [false, 'Usado_Q_E es nesesario'] },
    quimicos_I: { type: String, required: [false, 'Quimicos_Ies nesesario'] },
    trabajos_Ant: { type: String, required: [false, 'Trabajos_Antes nesesario'] },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleado'}
    
});

// para mandar la variable que se esta validandao se pone entre llaves {} la palabra PATH en mayuscula


module.exports = mongoose.model('Durante_Vida', durante_vidaShema);