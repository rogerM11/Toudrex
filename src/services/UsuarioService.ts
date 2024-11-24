import { Usuario } from "@/interfaces/UsuarioInterface";
export default class UsuarioService {
 

    async Autenticacion(email: string, password: string): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:8000/api/usuario/autentificacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
 
            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }
 
            const result = await response.json();
            console.log(result);
            return result.code === 200;
        } catch (error) {
            throw error;
        }
    }
    async Registrar(usuarioData: Usuario): Promise<boolean> {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/usuario/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(usuarioData)
          });
    
          if (!response.ok) {
            throw new Error('Error al registrar el usuario');
          }
    
          const result = await response.json();
          
          console.log(result);
          return result.code === 200;
        } catch (error) {
          console.error('Error en el registro:', error);
          throw error;
        }
      }
 
 
 
}