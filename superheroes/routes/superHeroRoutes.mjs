import express from 'express';
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, obtenerSuperheroesMayoresDe30Controller, buscarSuperheroesPorAtributoController } from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/mayor/mayores30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

export default router;