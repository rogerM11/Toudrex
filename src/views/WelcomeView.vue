<template>
    <ion-page>
        <ion-content :fullscreen="true" class="login-background">
            <div class="content-container">
                <div class="logo-container">
                    <img src="/public/logo.jpeg" alt="Logo" class="logo-image" />
                </div>

                <div class="info-container">
                    <h2>¡Bienvenido a Toudrex!</h2>
                    <p>La red social que te conecta con los tuyos</p>
                </div>

                <div class="footer-buttons">
                    <ion-button expand="block" @click="goToLogin" class="login-btn">
                        <ion-icon :icon="keyOutline" slot="start"></ion-icon>
                        Iniciar sesión
                    </ion-button>
                    <ion-button expand="block" color="light" @click="goToRegister" class="register-btn">
                        <ion-icon :icon="addCircleOutline" slot="start"></ion-icon>
                        Crear cuenta
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonIcon,IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { keyOutline, addCircleOutline } from 'ionicons/icons';

const router = useRouter();

function goToLogin() {
    router.push('/login'); 
}

function goToRegister() {
    router.push('/register'); 
}
</script>

<style scoped>


.content-container {
    background-color: #e2e7ac;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.logo-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    
}

.logo-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    object-fit: cover;
}

.info-container {
    text-align: center;
    margin: 1.2rem 0;
}

h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 3rem;
}

p {
    font-size: 1.1rem;
    color: #555;
}

.footer-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem 0;
    box-sizing: border-box;
}

ion-button {
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    flex: 1; 
}

.login-btn {
    background-color: #179744;
    color: white;
    border: none;
    box-shadow: 0 6px 15px rgba(76, 175, 80, 0.4);
}

.login-btn:hover {
    background-color: #45a049;
    transform: translateY(-3px);
}

.register-btn {
    background-color: #ffffff;
    color: #4caf50;
    border: 2px solid #4caf50;
    --box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.register-btn:hover {
    background-color: #f1f8e1;
    transform: translateY(-3px);
}

.register-btn:focus {
    box-shadow: 0 0 10px rgba(0, 150, 136, 0.5);
}
</style>
