export interface Foto {
    fk_usuario_id: number;
    fk_tipoFoto_id: number;
    contenido: string;
    photo: File;
}
