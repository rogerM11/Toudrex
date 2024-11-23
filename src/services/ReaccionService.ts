import { ReaccionList, ReaccionStore } from "@/interfaces/Reaccion";
import axios from "axios";

export class ReaccionService {
  async obtenerTodos(): Promise<ReaccionList[]> {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/reaccion/select');
      let res = response.data;

      if (res.code != 200) {
        throw new Error('Error al listar las reacciones');
      }
      const list: ReaccionList[] = res.data;
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

  async agregar(reaccion: ReaccionStore): Promise<string> {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/reaccion/store', 
        reaccion
      );
      
      let res = response.data;

      if (res.code != 200) {
        throw new Error('Error al insertar la reacción');
      }
      const msg: string = res.data;
      return msg;
    } catch (error) {
      throw error;
    }
  }
}
