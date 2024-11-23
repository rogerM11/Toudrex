import { PublicacionFotoList, PublicacionFotoStore } from "@/interfaces/PublicacionFoto";
import axios from "axios";

export class PublicacionFotoService {
  async obtenerTodos(): Promise<PublicacionFotoList[]> {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/publicacion_foto/select"
      );
      let res = response.data;

      if (res.code != 200) {
        throw new Error("Error al listar las publicaciones con fotos");
      }
      const list: PublicacionFotoList[] = res.data;
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

  async agregar(publicacionFoto: PublicacionFotoStore): Promise<string> {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/publicacion_foto/store",
        publicacionFoto
      );

      let res = response.data;

      if (res.code != 200) {
        throw new Error("Error al insertar la relación publicacion_foto");
      }
      const msg: string = res.data;
      return msg;
    } catch (error) {
      throw error;
    }
  }
}
