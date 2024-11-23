<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-segment v-model="selectedSegment">
                    <ion-segment-button value="amigos">
                        <ion-icon :icon="peopleSharp"></ion-icon>
                        <ion-label>Amigos</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="agregarAmigo">
                        <ion-icon :icon="personAddSharp"></ion-icon>
                        <ion-label>Agregar</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div v-if="selectedSegment === 'amigos'" class="friends-list">
                <ion-list>
                    <ion-item v-for="friend in friends" :key="friend.id" class="friend-item">
                        <ion-avatar slot="start">
                            <img :src="friend.avatar" alt="Amigo" />
                        </ion-avatar>
                        <ion-label>
                            <h2>{{ friend.name }}</h2>
                            <p>{{ friend.status }}</p>
                        </ion-label>
                        
                        <ion-button color="danger" @click="">
                            <ion-icon :icon="personRemoveSharp" slot="icon-only"></ion-icon>
                        </ion-button>
                    </ion-item>
                </ion-list>
            </div>

            <div v-if="selectedSegment === 'agregarAmigo'" class="add-friend-list">
                <ion-list>
                    <ion-item v-for="person in peopleToAdd" :key="person.id" class="person-item">
                        <ion-avatar slot="start">
                            <img :src="person.avatar" alt="Persona" />
                        </ion-avatar>
                        <ion-label>
                            <h2>{{ person.name }}</h2>
                            <p>{{ person.mutualFriends }} amigos en común</p>
                        </ion-label>
                        <ion-button color="medium" @click="">
                            <ion-icon :icon="personAddSharp" slot="icon-only"></ion-icon>
                        </ion-button>
                       
                    </ion-item>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonSegment, IonSegmentButton, IonItem, IonAvatar, IonLabel, IonButton, IonIcon, IonList } from '@ionic/vue';
import { ref } from 'vue';
import { peopleSharp, personAddSharp, personRemoveSharp } from 'ionicons/icons';

const selectedSegment = ref('amigos');
const friends = ref([
    { id: 1, name: 'Roger GOAT', status: 'Amigos', avatar: 'https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg' },
    { id: 2, name: 'Walter Qlero', status: 'Amigos', avatar: 'https://i.pinimg.com/736x/51/ad/cc/51adcc701547d68960b50e01b4018b7d.jpg' },
]);
const peopleToAdd = ref([
    { id: 1, name: 'Jaqueline Pérez', mutualFriends: 3, avatar: 'https://i.pinimg.com/736x/28/e6/79/28e6799b85751b1e664efe21c457d0ea.jpg' },
    { id: 2, name: 'Ana Solis', mutualFriends: 1, avatar: 'https://i.pinimg.com/736x/51/ad/cc/51adcc701547d68960b50e01b4018b7d.jpg' },
]);


</script>

<style scoped>
ion-toolbar {
    --background: #02f17a;
}

.friends-list,
.add-friend-list {
    padding: 10px;
}

.friend-item,
.person-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
}

ion-avatar img {
    width: 60px;
    height: 50px;
    border-radius: 50%;
}

ion-label h2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin: 0;
}

ion-label p {
    font-size: 0.9rem;
    color: #666;
    margin: 5px 0 0;
}

ion-button {
    --padding: 0;
    margin-left: 5px;
}

ion-button[color="primary"] {
    --background: #4caf50;
}

ion-button[color="danger"] {
    --background: #e74c3c;
}

ion-button[color="medium"] {
    --background: #f39c12;
}

ion-button[color="success"] {
    --background: #3498db;
}
</style>
