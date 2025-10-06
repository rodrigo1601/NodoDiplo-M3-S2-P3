import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    nombreSociedad: { type: String, default: 'Desconocido' },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: [String],
    poderes: [String],
    habilidadEspecial: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: [String],
});

const SuperHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-19');
export default SuperHero;