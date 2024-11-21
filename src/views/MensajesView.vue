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
                        <img src="" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Ana Martínez</h2>
                        <p>Hola, ¿cómo estás?</p>
                    </ion-label>
                    <ion-icon slot="end" name="chatbubbles-outline"></ion-icon>
                </ion-item>

                <ion-item button @click="goToChat">
                    <ion-avatar slot="start">
                        <img src="" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Juan Pérez</h2>
                        <p>¿Nos vemos mañana?</p>
                    </ion-label>
                    <ion-icon slot="end" name="chatbubbles-outline"></ion-icon>
                </ion-item>

                <ion-item button @click="goToChat">
                    <ion-avatar slot="start">
                        <img src="" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <h2>Maria López</h2>
                        <p>¡Genial! Confirmado para la reunión.</p>
                    </ion-label>
                    <ion-icon slot="end" name="chatbubbles-outline"></ion-icon>
                </ion-item>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToChat() {
    router.push('/chat-detail'); 
}
</script>

<style scoped>
.chat-list {
    padding: 10px;
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
</style>
