import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import LoginView from '@/views/LoginView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import MensajeDetalle from '@/views/MensajeDetalle.vue';
import RegistrarView from '@/views/RegistrarView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/registrarse',
    component: RegistrarView
  },
  {
    path: '/',
    component: WelcomeView
  },
  {
    path: '/chat-detail',
    component: MensajeDetalle
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/PublicacionesView.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/MensajesView.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/AmigosView.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/PerfilView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
