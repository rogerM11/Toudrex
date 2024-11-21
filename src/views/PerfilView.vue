<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Perfil</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="profile-background">
            <div class="profile-container">
                <!-- Foto de perfil -->
                <div class="profile-image-container">
                    <ion-avatar>
                        <img src="" alt="Foto de perfil" />
                    </ion-avatar>
                </div>

                <div class="user-info">
                    <div class="info-item">
                        <ion-icon  :icon="personCircleOutline" class="info-icon"></ion-icon>
                        <h3>Roger Morales</h3>
                    </div>

                    <div class="info-item">
                        <ion-icon :icon="mailOutline" class="info-icon"></ion-icon>
                        <p>juan.perez@example.com</p>
                    </div>

                    <div class="info-item">
                        <ion-icon  :icon="calendarOutline" class="info-icon"></ion-icon>
                        <p>Miembro desde Enero 2023</p>
                    </div>

                    <div class="info-item">
                        <ion-icon  :icon="locationOutline" class="info-icon"></ion-icon>
                        <p>Quezalte</p>
                    </div>
                </div>

                <!-- Botones de acción -->
                <div class="action-buttons">
                    <ion-button expand="block" @click="editProfile" color="primary">
                        <ion-icon slot="start" :icon="createOutline" ></ion-icon>
                        Editar perfil
                    </ion-button>

                    <ion-button expand="block" @click="logout" color="danger">
                        <ion-icon slot="start" :icon="logOutOutline" ></ion-icon>
                        Cerrar sesión
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { personCircleOutline, mailOutline,calendarOutline,locationOutline, createOutline, logOutOutline } from 'ionicons/icons';

const router = useRouter();

function editProfile() {
    router.push('/edit-profile');
}

function logout() {
    router.push('/login');
}
</script>

<style scoped>
.profile-background {
    background-color: #f4f7fc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.profile-container {
    text-align: center;
    width: 90%;
    max-width: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-image-container {
    margin-bottom: 20px;
}

ion-avatar img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.user-info {
    width: 100%;
    margin-bottom: 20px;
}

.info-item {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #555;
}

.info-icon {
    margin-right: 10px;
    font-size: 1.5rem;
    color: #4caf50;
}

h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

p {
    font-size: 1rem;
    color: #555;
}

.action-buttons {
    margin-top: 20px;
    width: 100%;
}

ion-button {
    margin-bottom: 10px;
}
</style>
