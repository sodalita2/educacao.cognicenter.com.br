import { createRouter, createWebHistory } from "vue-router";
import SessionPinia from '../stores/ProfileSession';
import { LoadingPinia } from "../stores/LoadingPinia";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: () => import('../views/PerfilView.vue'),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: "/dashboard",
          name: "Dashboard_Home",
          component: () => import('../views/Dashboard/Home.vue')
        },
        {
          path: "/dashboard/seqmat",
          name: "Atividade_Seqmat",
          component: () => import('../views/Atividades/SEQMAT/SeqMat.vue')
        },
        {
          path: "/dashboard/memoria",
          name: "Atividade_Memoria",
          component: () => import('../views/Atividades/MEMORIA/Memoria.vue')
        },
      ],
    }
  ],
});


router.beforeEach( (to) => {

  const Loading = LoadingPinia();

  Loading.isLoading = true;

  const ProfileSession = SessionPinia();

  if ( to.path == '/dashboard' && ProfileSession.profileID == '' ) {
    return '/perfil';
  }

  return true;
});



export default router;
