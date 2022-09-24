<template>
  <ion-app>
    <ion-router-outlet/>
  </ion-app>
</template>

<script>
import {IonApp, IonRouterOutlet, loadingController} from '@ionic/vue';
import {defineComponent, onMounted, ref} from 'vue';
import {useIncomesStore} from "@/store/incomes";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const incomesStore = useIncomesStore();
    const loadingApp = ref(true);
    const initalizeApp = async () => {
      const loading = await loadingController.create({
        message: 'Loading',
      });
      await loading.present();
      await incomesStore.fetchIncomes().then(
          async () => {
            await loading.dismiss();
            loadingApp.value = false;
          }
      );
    }
    onMounted(initalizeApp);
    return {
      loadingApp,
    }
  }
});
</script>