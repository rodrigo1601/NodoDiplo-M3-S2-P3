import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

const repo = new SuperHeroRepository();

export async function obtenerTodosLosSuperheroes() {
    return await repo.obtenerTodos();
}

export async function obtenerSuperheroePorId(id) {
    return await repo.obtenerPorId(id);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await repo.obtenerMayoresDe30();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await repo.buscarPorAtributo(atributo, valor);
}