var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pruebaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    otros: { type: String, required: false },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleado', required: true }

});

module.exports = mongoose.model('Prueba', pruebaSchema);