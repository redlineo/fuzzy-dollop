import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '@/views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '/tabs/tab1',
        redirect: '/tabs/analysis'
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: ()=>import('@/views/TabAnalysis.vue')
      },
      {
        path: 'incomes',
        name: 'incomes',
        component: () => import('@/views/TabIncomes.vue')
      },
      {
        path: 'expenses',
        name: 'expenses',
        component: () => import('@/views/TabExpenses.vue')
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import('@/views/TabNotifications.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
