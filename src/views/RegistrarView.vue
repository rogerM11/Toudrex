<template>
    <ion-page>
      <ion-content :fullscreen="true" class="register-background">
        <div class="register-container">
          <ion-card class="register-card">
            <div class="logo-container">
              <img src="/public/logo.jpeg" alt="logo" class="logo-image" />
            </div>
  
            <ion-card-header>
              <ion-card-title>Crear cuenta</ion-card-title>
              <ion-card-subtitle>Regístrate para comenzar</ion-card-subtitle>
            </ion-card-header>
  
            <ion-card-content>
              <!-- Datos personales -->
              <h3>Datos personales</h3>
              <ion-input v-model="form.nombre" type="text" placeholder="Nombre" required></ion-input>
              <ion-input v-model="form.apellido" type="text" placeholder="Apellido" required></ion-input>
              <ion-input v-model="form.nombre_usuario" type="text" placeholder="Nombre de usuario" required></ion-input>
  
              <!-- Datos de contacto -->
              <h3>Datos de contacto</h3>
              <ion-input v-model="form.email" type="email" placeholder="Correo electrónico" required></ion-input>
              <ion-input v-model="form.telefono" type="text" placeholder="Teléfono" required></ion-input>
              <ion-input v-model="form.direccion" type="text" placeholder="Dirección" required></ion-input>
              <ion-input v-model="form.fecha_nacimiento" type="date" placeholder="Fecha de nacimiento" required></ion-input>
  
              <!-- Género -->
              <h3>Género</h3>
              <ion-select v-model="form.genero" placeholder="Selecciona tu género" required>
                <ion-select-option value="masculino">Masculino</ion-select-option>
                <ion-select-option value="femenino">Femenino</ion-select-option>
                <ion-select-option value="otro">Otro</ion-select-option>
              </ion-select>
  
              <h3>Seguridad</h3>
              <ion-input v-model="form.password" type="password" placeholder="Contraseña" required></ion-input>
              
              <ion-button expand="full" @click="validar()">Registrarse</ion-button>
            </ion-card-content>
          </ion-card>
        </div>
        <ion-toast
                :is-open="showToast"
                :message="toastMessage"
                :color="toastColor"
                duration="2000"
                @did-dismiss="showToast = false">
            </ion-toast>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonPage, IonContent, IonInput, IonButton, IonSelect, IonSelectOption, IonToast } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import UsuarioService from '@/services/UsuarioService';
  const usuarioservice = new UsuarioService();
  const form = ref({
    nombre: "",
    apellido: "",
    nombre_usuario: "",
    email: "",
    password: "",
    fecha_nacimiento: "",
    direccion: "",
    telefono: "",
    genero: "",
    foto_perfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DSW54utMSZ6J1F9luVr6YYDoRZ-FQYCL3w&s",
    foto_portada: "https://losprincipios.org/images/default.jpg",
  });
  
  const router = useRouter();
  const showToast = ref(false);
  const toastMessage = ref('');
  const toastColor = ref('success');
  
  async function validar() {
    // Verifica si todos los campos obligatorios están completos
    if (!form.value.nombre || !form.value.apellido || !form.value.nombre_usuario || !form.value.email || !form.value.password || !form.value.fecha_nacimiento || !form.value.direccion || !form.value.telefono || !form.value.genero) {
      toastMessage.value = 'Por favor, complete todos los campos';
      toastColor.value = 'warning';
      showToast.value = true;
      return;
    }
  
    try {
      // Llama a la función `Registrar` con todos los datos del formulario
      const registroExitoso = await usuarioservice.Registrar(form.value);
      
      if (registroExitoso) {
        toastMessage.value = 'Bienvenido a Toudrex';
        toastColor.value = 'success';
        showToast.value = true;
  
        setTimeout(() => {
          router.push({ path: '/login' });
        }, 500);
      } else {
        toastMessage.value = 'Necesitas agregar más información';
        toastColor.value = 'danger';
        showToast.value = true;
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      toastMessage.value = 'Ocurrió un error al registrar';
      toastColor.value = 'danger';
      showToast.value = true;
    }
  }
  </script>
  
  
  <style scoped>
  .register-background {
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    box-sizing: border-box;
  }
  
  .register-card {
    width: 100%;
    padding: 2rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: #ffffff;
    color: #000;
    margin: 0 auto;
  }
  
  .logo-container {
    margin-bottom: 2rem;
  }
  
  .logo-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  ion-card-title {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  ion-card-subtitle {
    font-size: 1rem;
    color: #777;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #333;
    text-align: left;
  }
  
  ion-input, ion-select {
    margin-top: 1rem;
    width: 100%;
    --padding-start: 10px;
    --padding-end: 10px;
  }
  
  ion-button {
    margin-top: 2rem;
  }
  
  ion-input[type="file"] {
    text-align: left;
  }
  
  ion-button {
    background-color: #4CAF50;
    color: white;
  }
  </style>
  