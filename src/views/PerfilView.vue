<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Perfil</ion-title>
                 
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="profile-background">
            <!-- Foto de portada -->
            <div class="cover-photo-container">
                <img src="https://i.pinimg.com/736x/51/ad/cc/51adcc701547d68960b50e01b4018b7d.jpg" alt="Foto de portada" class="cover-photo" />
            </div>

            <div class="profile-container">
                <!-- Foto de perfil -->
                <div class="profile-image-container">
                    <div class="profile-image">
                        <img src="https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg" alt="Foto de perfil" />
                    </div>
                </div>

                <div class="user-info">
                    <div class="info-item">
                        <ion-icon :icon="personCircleOutline" class="info-icon"></ion-icon>
                        <h3>Roger Morales</h3>
                    </div>

                    <div class="info-item">
                        <ion-icon :icon="mailOutline" class="info-icon"></ion-icon>
                        <p>el_bicho@siuu.com</p>
                    </div>
                    <div class="info-item">
                        <ion-icon :icon="locationOutline" class="info-icon"></ion-icon>
                        <p>Quezalte</p>
                    </div>
                </div>

                <div class="action-buttons">
                    <ion-button expand="block" @click="editProfile" color="primary">
                        <ion-icon slot="start" :icon="createOutline"></ion-icon>
                        Editar perfil
                    </ion-button>

                    <ion-button expand="block" @click="logout" color="danger">
                        <ion-icon slot="start" :icon="logOutOutline"></ion-icon>
                        Cerrar sesión
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { personCircleOutline, mailOutline, locationOutline, createOutline, logOutOutline } from 'ionicons/icons';

const router = useRouter();

function editProfile() {
    router.push('/edit-profile');
}

function logout() {
    router.push('/login');
}
</script>

<style scoped>
ion-toolbar {
    --background: #02f17a;
}

.profile-background {
    background-color: #f4f7fc;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

.cover-photo-container {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
}

.cover-photo {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.profile-container {
    text-align: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: -75px;
    z-index: 1;
    position: relative;
}

.profile-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    margin-bottom: 10px;
}

.profile-image img {
    width: 150px; 
    height: 150px;
    border-radius: 50%; 
    object-fit: cover;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    border: 4px solid white;
}

.user-info {
    width: 100%;
    margin-top: 15px;
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
    font-size: 1.6rem;
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
