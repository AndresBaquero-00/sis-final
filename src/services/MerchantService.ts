import { Service } from "./Service";
import { Merchant, User, Response, LoginResponse } from "../interfaces";

export class MerchantService extends Service {

    public registrar(customer: Merchant): Promise<Response> {
        return this.post(customer, 'restaurante/registro');
    }

    public estaIniciado(): boolean {
        return !!localStorage.getItem('restaurante-token');
    }

    public async iniciarSesion(usuario: User): Promise<LoginResponse> {
        const res = await this.post(usuario, 'restaurante/inicio-sesion') as LoginResponse;
        if (res.ok) {
            localStorage.setItem('restaurante-token', String(res.restauranteId));
        }
        
        return res;
    }

    public parse(data: any): Merchant {
        return ({
            NIT: Number(data.NIT),
            nombre: data.nombre,
            direccion: data.direccion,
            especialidad: data.especialidad,
            telefono: Number(data.telefono),
            usuario: {
                email: data.email,
                password: data.password
            }
        });
    }
}