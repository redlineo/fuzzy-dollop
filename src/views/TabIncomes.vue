<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Доходы</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Доходы</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="addIncome">Добавить доход</ion-button>
      <ion-card v-for="item in incomes" :key="item.timestamp">
        <ion-card-header>
          <ion-card-subtitle>
            {{ item.timestamp }}
          </ion-card-subtitle>
          <ion-card-title>
            {{ item.cost + 'руб.' }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ item.tags }}
          {{ item.description }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {
  alertController,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import {useIncomesStore} from "@/store/incomes";

export default defineComponent({
  name: 'TabIncomes',
  components: {
    IonHeader,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
  setup() {
    const incomesStore = useIncomesStore();
    const item = ref({
      timestamp: '0',
      tags: [],
      cost: '0',
      currency: 'rubble', //dollar, euro
      description: '',
    })

    const presentAlert = async () => {
      const alert = await alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
      });

      await alert.present();
    };


    return {
      presentAlert,
      item,
      addIncome: incomesStore.addIncome,
      incomes: incomesStore.incomes
    }
  }
});
</script>
