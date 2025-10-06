export function renderizarSuperheroe(superheroe) {
    return {
        ID: superheroe.id,
        Nombre: superheroe.nombreSuperheroe,
        "Nombre Real": superheroe.nombreReal,
        "Nombre Sociedad": superheroe.nombreSociedad,
        Edad: superheroe.edad,
        "Planeta Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poder: superheroe.poderes,
        "Habilidad Especial": superheroe.habilidadEspecial,
        Aliado: superheroe.aliados,
        Enemigo: superheroe.enemigos,
    };
}

export function renderizarSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}