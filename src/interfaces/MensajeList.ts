export default interface MensajeList {
    id: number;
    usuario_emisor_id: number;
    usuario_emisor_nombre: string;
    usuario_receptor_id: number;
    usuario_receptor_nombre: string;
    contenido: string;
    estado: 'pendiente' | 'leido';
    tipo_mensaje: 'texto' | 'imagen' | 'archivo';
    referencia_mensaje: number | null;
    fecha_envio: string;
}
