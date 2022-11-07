
export interface User {
    email: string;
    password: string;
}

export interface Customer {
    cedula: number;
    nombre: string;
    apellido: string;
    telefono: number;
    usuario: User;
}

export interface Merchant {
    NIT: number;
    nombre: string;
    direccion: string;
    especialidad: string;
    telefono: number;
    usuario: User;
}

export interface Response {
    ok: boolean;
    error?: string;
    message?: string;
}

export interface LoginResponse extends Response {
    clienteId?: number;
    restauranteId?: number;
}