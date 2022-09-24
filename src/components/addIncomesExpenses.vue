<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Отменить</ion-button>
      </ion-buttons>
      <ion-title>Добавить {{ (segMode === 'incomes') ? 'доходы' : 'расходы' }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirm">Добавить</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-segment value="expenses" @ionChange="segmentChanged($event)">
      <ion-segment-button value="expenses">
        <ion-label>Расходы</ion-label>
      </ion-segment-button>
      <ion-segment-button value="incomes">
        <ion-label>Доходы</ion-label>
      </ion-segment-button>
    </ion-segment>
    <ion-item>
      <ion-label>Выберите время</ion-label>
      <ion-datetime-button datetime="datetime"></ion-datetime-button>
      <ion-modal :keep-contents-mounted="true">
        <ion-datetime id="datetime" first-day-of-week="1" locale="ru-RU"/>
      </ion-modal>
    </ion-item>
  </ion-content>
</template>

<script>
import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  modalController,
} from '@ionic/vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'addIncomesExpenses',
  components: {
    IonContent,
    IonHeader,
    IonDatetimeButton,
    IonItem,
    IonTitle,
    IonModal,
    IonToolbar,
    IonDatetime,
    IonButtons,
    IonButton,
    IonLabel,
    IonSegment,
    IonSegmentButton
  },
  setup() {
    const name = ref('');
    const segMode = ref('expenses');
    const time = ref('');
    const segmentChanged = function (event) {
      segMode.value = event.detail.value;
    }
    const cancel = function () {
      return modalController.dismiss(null, 'cancel');
    }
    const confirm = function () {
      return modalController.dismiss(name.value, 'confirm');
    }
    return {
      time,
      cancel,
      confirm,
      segmentChanged,
      segMode
    }
  },
});
</script>
