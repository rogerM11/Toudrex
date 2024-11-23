<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chats</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="chat-list">
                <ion-item button @click="goToChat">
                    <ion-avatar slot="start">
                        <img src="https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Ana Martínez</h2>
                        <p>Hola, ¿cómo estás?</p>
                    </ion-label>
                    <ion-icon slot="end" :icon="chatbubbleOutline"></ion-icon>
                </ion-item>

                <ion-item button @click="goToChat">
                    <ion-avatar slot="start">
                        <img src="https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Juan Pérez</h2>
                        <p>¿Nos vemos mañana?</p>
                    </ion-label>
                    <ion-icon slot="end"  :icon="chatbubbleOutline" ></ion-icon>
                </ion-item>

                <ion-item button @click="goToChat">
                    <ion-avatar slot="start">
                        <img src="https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Maria López</h2>
                        <p>¡Genial! Confirmado para la reunión.</p>
                    </ion-label>
                    <ion-icon slot="end"  :icon="chatbubbleOutline"></ion-icon>
                </ion-item>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonAvatar, IonLabel, IonIcon, IonButtons, IonBackButton, IonImg } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { chatbubbleOutline} from 'ionicons/icons';

const router = useRouter();

function goToChat() {
    router.push('/chat-detail'); 
}
</script>

<style scoped>
.chat-list {
    padding: 10px;
}
ion-toolbar{
    --background:#02f17a;
}

ion-item {
    --min-height: 60px;
    --border-width: 0;
    --background: #fff;
    margin-bottom: 10px;
}

ion-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

ion-label h2 {
    font-size: 1.1rem;
    font-weight: bold;
}

ion-label p {
    font-size: 0.9rem;
    color: #777;
}

ion-icon {
    font-size: 24px;
    color: #4CAF50;
}

/* Estilo opcional para la imagen del logo */
ion-img {
    display: block;
    margin: 0 auto;
}
</style>
