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
                        <ion-input type="text" placeholder="Usuario"></ion-input>
                        <ion-input type="password" placeholder="Contraseña"></ion-input>
                        <router-link to="tabs/tab1">
                            <ion-button expand="full">Iniciar Sesión</ion-button>
                        </router-link>
                        <p>¿No tienes una cuenta?</p>
                        <a href="#">Regístrate</a>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
</script>

<style scoped>
.login-background {
    background-color: #f0f2f5; /* Fondo suave */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Esto asegura que ocupe toda la pantalla */
    margin: 0;
}

.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px; /* Ancho máximo para que el formulario no sea demasiado ancho */
}

.login-card {
    width: 100%;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    text-align: center;
    background-color: #e2e7ac;
}

.logo-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    object-fit: cover;
}

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

ion-input {
    margin-top: 1rem;
    --padding-start: 10px;
    --padding-end: 10px;
}

ion-button {
    margin-top: 1rem;
}

p {
    margin-top: 1rem;
    color: #666;
}

a {
    color: #007bff;
    text-decoration: none;
}
</style>
