<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Publicaciones</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="post-container">
                <div class="post">
                    <div class="post-header">
                        <img src="" alt="user-profile" class="profile-pic" />
                        <div class="user-info">
                            <h3>Roger Morales</h3>
                            <p class="post-time">Hace 2 horas</p>
                        </div>
                    </div>
                    <div class="post-body">
                        <p>¡Este es un ejemplo de publicación! Aquí va el contenido de la publicación.</p>
                        <img src="" alt="post-image" class="post-image" />
                    </div>
                    <div class="post-footer">
                        <div class="interaction-icons">
                            <ion-button fill="clear" @click="likePost">
                                <ion-icon :icon="thumbsUpOutline"></ion-icon>
                            </ion-button>
                            <ion-button fill="clear" @click="commentPost">
                                <ion-icon :icon="chatbubbleOutline"></ion-icon>
                            </ion-button>
                            <ion-button fill="clear" @click="sharePost">
                                <ion-icon :icon="shareSocialOutline"></ion-icon>
                            </ion-button>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                        <img src="" alt="user-profile" class="profile-pic" />
                        <div class="user-info">
                            <h3>Alexis Morales</h3>
                            <p class="post-time">Hace 2 horas</p>
                        </div>
                    </div>
                    <div class="post-body">
                        <p>¡Este es un ejemplo de publicación! Aquí va el contenido de la publicación.</p>
                        <img src="" alt="post-image" class="post-image" />
                    </div>
                    <div class="post-footer">
                        <div class="interaction-icons">
                            <ion-button fill="clear" @click="likePost">
                                <ion-icon :icon="thumbsUpOutline"></ion-icon>
                            </ion-button>
                            <ion-button fill="clear" @click="commentPost">
                                <ion-icon :icon="chatbubbleOutline"></ion-icon>
                            </ion-button>
                            <ion-button fill="clear" @click="sharePost">
                                <ion-icon :icon="shareSocialOutline"></ion-icon>
                            </ion-button>
                        </div>
                    </div>
                </div>

                
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonIcon, IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/vue';
import { thumbsUpOutline, chatbubbleOutline,shareSocialOutline } from 'ionicons/icons';

function likePost() {
    console.log('Me gusta');
}

function commentPost() {
    console.log('Comentar');
}

function sharePost() {
    console.log('Compartir');
}
</script>

<style scoped>
.post-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.post {
    background-color: white;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
}

.post-header {
    display: flex;
    align-items: center;
}

.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}

.user-info h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
}

.post-time {
    font-size: 0.9rem;
    color: #777;
}

.post-body {
    margin-top: 10px;
}

.post-image {
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    object-fit: cover;
}

.post-footer {
    margin-top: 10px;
}

.interaction-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

ion-button {
    --border-radius: 50%;
    --padding: 0;
}

ion-icon {
    font-size: 24px;
    color: #555;
}

ion-button:hover ion-icon {
    color: #4CAF50;
}
</style>
