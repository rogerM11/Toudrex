export default interface MensajeStore {
    fk_usuario_emisor_id: number;
    fk_usuario_receptor_id: number;
    contenido: string;
    estado: 'pendiente' | 'leido';
    tipo_mensaje: 'texto' | 'imagen' | 'archivo';
    referencia_mensaje: number | null;
}