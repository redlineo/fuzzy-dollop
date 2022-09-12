<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="presentAlert">
        Hello
      </ion-button>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, alertController } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  setup(){
    const presentAlert = async() => {
        const alert = await alertController.create({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
      };
    return{
      presentAlert
    }
  }
});
</script>
