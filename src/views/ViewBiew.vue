<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>
 
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Login</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-grid>
                <ion-row class="login">
                    <ion-col>
                        <ion-label>Username</ion-label>
                        <ion-input placeholder="Digite su nombre" color="success" required
                            v-model="nombre"></ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-label>Password</ion-label>
                        <ion-input placeholder="Escriba su contraseña" color="success" type="password" required
                            v-model="contra"></ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-button color="secondary" @click="validar" expand="full">INICIAR SESION</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
 
            <ion-toast
                :is-open="showToast"
                :message="toastMessage"
                :color="toastColor"
                duration="2000"
                @did-dismiss="showToast = false">
            </ion-toast>
        </ion-content>
    </ion-page>
</template>
 
<script setup lang="ts">
import { IonLabel, IonButton, IonGrid, IonRow, IonCol, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UsuarioService from '@/services/UsuarioService';
 
const nombre = ref('');
const contra = ref('');
const router = useRouter();
const usuarioService = new UsuarioService();
 
const showToast = ref(false);
const toastMessage = ref('');
const toastColor = ref('success');
 
async function validar() {
  if (!nombre.value || !contra.value) {
    toastMessage.value = 'Por favor, complete todos los campos';
    toastColor.value = 'warning';
    showToast.value = true;
    return;
  }
 
  try {
    const loginExitoso = await usuarioService.login(nombre.value, contra.value);
    if (loginExitoso) {
      toastMessage.value = 'Login exitoso. Redirigiendo...';
      toastColor.value = 'success';
      showToast.value = true;
 
      setTimeout(() => {
        router.push({ path: `/registrarMoto/${nombre.value}` });
      }, 2000);
    } else {
      toastMessage.value = 'Los datos de validación son incorrectos';
      toastColor.value = 'danger';
      showToast.value = true;
    }
  } catch (error) {
    toastMessage.value = 'Credenciales Incorrectas';
    toastColor.value = 'danger';
    showToast.value = true;
  }
}
</script>
 
<style scoped>
 
.login {
    margin: 200px auto;
}
</style>