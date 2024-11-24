import axios from "axios";
import { Foto } from "@/interfaces/Foto";

export class FotoService {
  async agregar(foto: Foto): Promise<string> {
    try {
      const formData = new FormData();
      formData.append("fk_usuario_id", foto.fk_usuario_id.toString());
      formData.append("fk_tipoFoto_id", "2");
      formData.append("contenido", foto.contenido);
      formData.append("photo", foto.photo);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/foto/crear",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const res = response.data;

      if (res.code !== 200) {
        throw new Error("Error al guardar la foto");
      }

      return "Foto guardada exitosamente";
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
