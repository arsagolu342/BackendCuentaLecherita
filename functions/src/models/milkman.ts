export interface Milkman {
    idmilkman?: string,
    nombre: string,
    apellido: string,
    ci: string,
    direccion: string,
    photo: string
}

export function Milkman(data: any, id?: string) {
    const { nombre, apellido, ci, direccion, photo } = data;
    let object: Milkman = {
        idmilkman: id,
        nombre: nombre,
        apellido: apellido,
        ci: ci,
        direccion: direccion,
        photo: photo
    };
    return object;
}

