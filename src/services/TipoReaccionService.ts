import { TipoReaccionList, TipoReaccionStore } from "@/interfaces/TipoReaccion";
import axios from "axios";

export default class TipoReaccionService {
    async obtenerTodos(): Promise<TipoReaccionList[]> {
        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/api/tipo_reaccion/select"
            );

            let res = response.data;

            if (res.code != 200) {
                throw new Error("Error al listar tipos de reacción");
            }
            const list: TipoReaccionList[] = res.data;
            return list;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error en la solicitud Axios: ", error.message);
            } else {
                console.error("Error desconocido: ", error);
            }
            throw error;
        }
    }

    async agregar(tipoReaccion: TipoReaccionStore): Promise<string> {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/tipo_reaccion/store",
                tipoReaccion
            );

            let res = response.data;

            if (res.code != 200) {
                throw new Error("Error al insertar tipo de reacción");
            }
            const msg: string = res.data;
            return msg;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(
                "Error en la solicitud Axios: ",
                error.response?.data || error.message
                );
            } else {
                console.error("Error desconocido: ", error);
            }
            throw error;
        }
    }
}