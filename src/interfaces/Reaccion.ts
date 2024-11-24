export interface ReaccionList {
  id: number;
  usuario_id: number;
  usuario_nombre: string;
  publicacion_id: number;
  contenido: string;
  tipo_reaccion: string;
  fecha_reaccion: string;
}

export interface ReaccionStore {
  fk_usuario_id: number;
  fk_publicacion_id: number;
  fk_tipoReaccion_id: number;
}
