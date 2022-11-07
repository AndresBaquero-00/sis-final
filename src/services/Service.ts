import axios from "axios";
import { Response } from "../interfaces";

export abstract class Service {
    protected readonly api = process.env.REACT_APP_API_URL;

    protected post(data: any, endpoint: string): Promise<Response> {
        return new Promise((resolve, reject) => {
            axios.post(`${this.api}/${endpoint}`, data)
                .then(res => {
                    const data = res.data as Response;
                    if (data.ok) {
                        resolve(data);
                        return;
                    }

                    reject(data.error);
                });
        });
    }
}