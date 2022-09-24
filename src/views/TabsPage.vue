<template>
  <ion-page>
    <ion-fab horizontal="center" vertical="bottom">
      <ion-fab-button id="open-modal" @click="openAddModal">
        <ion-icon :icon="addCircle"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button href="/tabs/expenses" tab="expenses">
          <ion-label>Расходы</ion-label>
        </ion-tab-button>
        <ion-tab-button href="/tabs/incomes" tab="incomes">
          <ion-label>Доходы</ion-label>
        </ion-tab-button>
        <ion-tab-button href="/tabs/analysis" tab="analysis">
          <ion-label>Анализ</ion-label>
        </ion-tab-button>
        <ion-tab-button href="/tabs/notifications" tab="notifications">
          <ion-label>Напоминания</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, modalController
} from '@ionic/vue';
import {addCircle} from "ionicons/icons"
import addIncomesExpenses from "@/components/addIncomesExpenses";

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonRouterOutlet,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    const openAddModal=async()=> {
      const modal = await modalController.create({
        component: addIncomesExpenses,
      });
      await modal.present();
      const { data, role } = await modal.onWillDismiss();
      if (role === 'confirm') {
        console.log(`Hello, ${data}!`);
      }
    }
    return {
      addCircle,
      openAddModal,
    }
  }
});
</script>

<style>
</style>