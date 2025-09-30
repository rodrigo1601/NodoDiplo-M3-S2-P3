import {obtenerSuperheroePorId, obtenerTodosLosSuperheroes, obtenerSuperheroesMayoresDe30, buscarSuperheroesPorAtributo} from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarSuperheroes } from "../views/responseView.mjs";

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);

        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }

        const superheroesFormateados = renderizarSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes mayores de 30', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;

        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: `No se encontraron superhéroes con ${atributo} igual a ${valor}` });
        }

        const superheroesFormateados = renderizarSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar superhéroes por atributo', error: error.message });
    }
}