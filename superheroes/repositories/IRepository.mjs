class IRepository {
    obtenerTodos() {
        throw new Error("El método 'obtenerTodos' debe ser implementado.");
    }

    obtenerPorId(id) {
        throw new Error("El método 'obtenerPorId' debe ser implementado.");
    }

    obtenerMayoresDe30(){
        throw new Error("El método 'obtenerMayoresDe30' debe ser implementado.");
    }

    buscarPorAtributo(atributo, valor) {
        throw new Error("El método 'buscarPorAtributo' debe ser implementado.");
    }
}

export default IRepository;