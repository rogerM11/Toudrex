import MensajeList from "@/interfaces/MensajeList";
import MensajeStore from "@/interfaces/MensajeStore";
import axios from "axios";

export default class MensajeService {
    async obtenerTodos(): Promise<MensajeList[]> {
        try {

            const response = await axios.get('http://127.0.0.1:8000/api/mensaje/select');

            let res = response.data;

            if (res.code != 200){
                throw new Error('Error al listar mensajes');
            }
            const list: MensajeList[] = res.data;
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

    async agregar(mensaje: MensajeStore): Promise<string> {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/mensaje/store', 
                mensaje
            );

            let res = response.data;

            if (res.code != 200) {
                throw new Error('Error al insertar: ' + res.message);
            }
            const msg: string = res.data;
            return msg;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error en la solicitud Axios: ", error.response?.data || error.message);
            } else {
                console.error("Error desconocido: ", error);
            }
            throw error;
        }
    }
}
