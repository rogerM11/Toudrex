<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="tab2"></ion-back-button>
                </ion-buttons>
                <ion-title>Chat con Ana Martínez</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="messages">
                <div class="message received">
                    <ion-avatar slot="start">
                        <img src="" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <p>¡Hola! ¿Cómo estás?</p>
                    </ion-label>
                </div>

                <div class="message sent">
                    <ion-avatar slot="start">
                        <img src="" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <p>Estoy bien, ¿y tú?</p>
                    </ion-label>
                </div>

                <div class="message received">
                    <ion-avatar slot="start">
                        <img src="" alt="user-avatar" />
                    </ion-avatar>
                    <ion-label>
                        <p>Todo bien, gracias por preguntar.</p>
                    </ion-label>
                </div>
            </div>

            <div class="send-message">
                <ion-input type="text" placeholder="Escribe un mensaje" v-model="newMessage"></ion-input>
                <ion-button @click="sendMessage" fill="clear">
                    <ion-icon name="send-outline"></ion-icon>
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonAvatar, IonLabel, IonInput, IonButton, IonIcon, IonBackButton } from '@ionic/vue';
import { ref } from 'vue';

const newMessage = ref('');

function sendMessage() {
    console.log('Nuevo mensaje enviado:', newMessage.value);
    newMessage.value = ''; // Limpiar campo de mensaje después de enviarlo
}
</script>

<style scoped>
.messages {
    padding: 10px;
}

.message {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.message.received {
    justify-content: flex-start;
}

.message.sent {
    justify-content: flex-end;
}

ion-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

ion-label p {
    font-size: 1rem;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 8px;
    max-width: 70%;
    word-wrap: break-word;
}

.message.sent ion-label p {
    background-color: #4CAF50;
    color: white;
}

.send-message {
    display: flex;
    align-items: center;
    padding: 10px;
}

ion-input {
    flex: 1;
    margin-right: 10px;
}

ion-button {
    --padding: 0;
}

ion-icon {
    font-size: 24px;
    color: #4CAF50;
}
</style>
