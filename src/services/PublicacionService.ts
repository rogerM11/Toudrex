import axios from "axios";
import { Publicacion } from "@/interfaces/Publicacion";

export class PublicacionService {
  async obtenerTodas(): Promise<Publicacion[]> {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/publicacion/obtener"
      );
      const res = response.data;

      if (res.code !== 200) {
        throw new Error("Error al obtener las publicaciones");
      }
      const publicaciones: Publicacion[] = res.data;
      return publicaciones;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud Axios: ", error.message);
      } else {
        console.error("Error desconocido: ", error);
      }
      throw error;
    }
  }
}
