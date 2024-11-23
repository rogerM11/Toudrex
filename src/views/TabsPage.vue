<template>
  <ion-page>
    
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" >
        <ion-tab-button tab="tab1" href="/tabs/tab1" class="tabs">
          <ion-icon aria-hidden="true" :icon="todaySharp"  class="icono"/>
          <ion-label>Publicaciones</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2" class="tabs">
          <ion-icon aria-hidden="true" :icon="chatbubbleSharp"  class="icono"/>
          <ion-label>Mensajes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3" class="tabs">
          <ion-icon aria-hidden="true" :icon="peopleSharp"  class="icono"/>
          <ion-label>Amigos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4" class="tabs">
          <ion-icon aria-hidden="true" :icon="personCircleSharp"  class="icono"/>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { todaySharp, chatbubbleSharp,personCircleSharp, peopleSharp } from 'ionicons/icons';
</script>
<style scoped>
.tabs{
  background-color: #02f17a;
}
.icono, ion-label{
 color: #fff;
}


</style>

