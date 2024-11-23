export interface PublicacionFotoList {
  publicacion_id: number;
  usuario_publicacion_id: number;
  contenido: string;
  fecha_publicacion: string;
  foto_id: number;
  usuario_foto_id: number;
  tipo_foto_id: number;
  url_foto: string;
  fecha_foto: string;
}

export interface PublicacionFotoStore {
  fk_publicacion_id: number;
  fk_foto_id: number;
}
