<template>
    <ion-page class="contenedorGlobal">
      <ion-header>
        <ion-toolbar>
          <ion-segment v-model="selectedSegment" value="publicaciones" @ionChange="segmentChanged">
            <ion-segment-button value="publicaciones">
              <ion-icon :icon="homeSharp"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="agregarPubli">
              <ion-icon :icon="newspaperSharp"></ion-icon>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <div v-if="selectedSegment === 'publicaciones'" class="post-container">
          <!-- Mostrar publicaciones -->
          <div class="post" v-for="post in posts" :key="post.id">
            <div class="post-header">
              <img :src="post.userProfilePic" alt="user-profile" class="profile-pic" />
              <div class="user-info">
                <h3>{{ post.userName }}</h3>
                <p class="post-time">{{ post.timeAgo }}</p>
              </div>
            </div>
            <div class="post-body">
              <p>{{ post.content }}</p>
              <img :src="post.image" alt="post-image" class="post-image" />
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
  
        <div v-if="selectedSegment === 'agregarPubli'" class="add-post">
            <h2>Agregar nueva publicación</h2>
        <form @submit.prevent="">
          <ion-item>
            <ion-input  type="text" placeholder="Escribe algo..."></ion-input>
          </ion-item>

          <ion-item>
            <ion-input  type="text" placeholder="Agrega una imagen"></ion-input>
          </ion-item>

          <ion-button expand="full" type="submit">Publicar</ion-button>
        </form>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonButton, IonIcon, IonContent, IonHeader, IonPage, IonToolbar, IonSegment, IonSegmentButton,IonInput,IonItem } from '@ionic/vue';
  import { thumbsUpOutline, chatbubbleOutline, shareSocialOutline, homeSharp, newspaperSharp } from 'ionicons/icons';
  
 
  const selectedSegment = ref('publicaciones'); 

  const posts = ref([
    {
      id: 1,
      userName: 'Roger Morales',
      userProfilePic: 'https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg',
      timeAgo: 'Hace 2 horas',                 //ejemplos
      content: '¡Este es un ejemplo de publicación!',
      image: 'https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg',
    },
    {
      id: 2,
      userName: 'Alexis Morales',
      userProfilePic: 'https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg',
      timeAgo: 'Hace 3 horas',
      content: 'Otra publicación de ejemplo.',
      image: 'https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg',
    },
  ]);

  function segmentChanged(event: any) {
    console.log('Segment changed:', event.detail.value);
 
  }
  

  function likePost() {
    console.log('Me gusta');
  }
  
  function commentPost() {
    console.log('Comentar');
  }
  
  function sharePost() {
    console.log('Compartir');
  }
 
  function addPost() {
    console.log('Agregar nueva publicación');
  }
  </script>
  
  <style scoped>
  ion-toolbar {
    --background: #02f17a;
  }
  
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
  
  .add-post {
    padding: 20px;
  }
  </style>
  