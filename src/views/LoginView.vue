<template>
    <ion-page>
        <ion-content :fullscreen="true" class="login-background">
            <div class="login-container">
                <ion-card class="login-card">
                    <img src="/public/logo.jpeg" alt="logo" class="logo-image">
                    <ion-card-header>
                        <ion-card-title>Login</ion-card-title>
                        <ion-card-subtitle>Bienvenido a Toudrex</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-input type="text" placeholder="Correo" required v-model="email"></ion-input>
                        <ion-input type="password" placeholder="Contraseña" required v-model="password"></ion-input>
                        
                            <ion-button expand="full"  @click="validar">Iniciar Sesión</ion-button>
                       
                        <p>¿No tienes una cuenta?</p>
                        <a href="#">Regístrate</a>
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
import { IonCard,IonToast, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UsuarioService from '@/services/UsuarioService';
const email = ref('');
const password = ref('');
const router = useRouter();
const loginService = new UsuarioService();
 
const showToast = ref(false);
const toastMessage = ref('');
const toastColor = ref('success');

async function validar() {
  if (!email.value || !password.value) {
    toastMessage.value = 'Por favor, complete todos los campos';
    toastColor.value = 'warning';
    showToast.value = true;
    return;
  }
 
  try {
    console.log(email.value,password.value)
    const loginExitoso = await loginService.Autenticacion(email.value, password.value);
    if (loginExitoso) {
      toastMessage.value = 'Bienvenido a Toudrex';
      toastColor.value = 'success';
      showToast.value = true;
 
      setTimeout(() => {
        router.push({ path: '/tabs/tab1' });
      }, 500);
    } else {
      toastMessage.value = 'Los datos de validación son incorrectos';
      toastColor.value = 'danger';
      showToast.value = true;
    }
  } catch (error) {
    toastMessage.value = 'Credenciales Incorrectas';
    toastColor.value = 'danger';
    showToast.value = true;
  }
}
</script>

<style scoped>
/* Fondo del login que ocupa toda la pantalla */
.login-background {
    background-color: #f0f2f5; /* Fondo suave */
    display: flex;
    align-items: center; /* Centrado vertical */
    justify-content: center; /* Centrado horizontal */
    height: 100vh; /* Asegura que el contenido ocupe toda la altura */
    margin: 0;
}

/* Contenedor principal para el formulario */
.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px; /* Limita el ancho máximo de la tarjeta */
    padding: 2rem; /* Espaciado alrededor del card */
    box-sizing: border-box;
    background: linear-gradient(to bottom, #fff 50%, #e2e7ac 50%);
    height: 100%; /* Se asegura de que ocupe todo el espacio disponible */
}

/* Estilos de la tarjeta de login */
.login-card {
    width: 100%;
    padding: 2rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    background-color: #e2e7ac;
    color: #000;
    height: auto;
    margin: 0 auto;
}

/* Estilo del logo */
.logo-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    object-fit: cover;
}

/* Estilo del título y subtítulo */
ion-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

ion-card-subtitle {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
}

/* Estilo de los campos de texto */
ion-input {
    margin-top: 1rem;
    --padding-start: 10px;
    --padding-end: 10px;
}

/* Estilo del botón */
ion-button {
    margin-top: 1rem;
}

/* Estilo del párrafo y enlace */
p {
    margin-top: 1rem;
    color: #666;
}

a {
    color: #007bff;
    text-decoration: none;
}
</style>
