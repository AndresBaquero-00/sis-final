import { Service } from "./Service";
import { Customer, Response, User, LoginResponse } from "../interfaces";

export class CustomerService extends Service {

    public registrar(customer: Customer): Promise<Response> {
        return this.post(customer, 'cliente/registro');
    }

    public async iniciarSesion(usuario: User): Promise<LoginResponse> {
        const res = await this.post(usuario, 'cliente/inicio-sesion') as LoginResponse;
        if (res.ok) {
            localStorage.setItem('cliente-token', String(res.clienteId));
        }
        
        return res;
    }

    public parse(data: any): Customer {
        return ({
            cedula: Number(data.cedula),
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: Number(data.telefono),
            usuario: {
                email: data.email,
                password: data.password
            }
        });
    }
}