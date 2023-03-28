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
      meta: { RequiresAuth: false },
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: () => import('../views/PerfilView.vue'),
      meta: { RequiresAuth: false },
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: () => import('../views/CadastroView.vue'),
      meta: { RequiresAuth: false },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../views/DashboardView.vue'),
      meta: { RequiresAuth: true },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard_Home",
          component: () => import('../views/Dashboard/Home.vue'),
          meta: { RequiresAuth: true }
        },
        {
          path: "/dashboard/seqmat",
          name: "Atividade_Seqmat",
          component: () => import('../views/Atividades/SEQMAT/SeqMat.vue'),
          meta: { RequiresAuth: true }
        },
        {
          path: "/dashboard/memoria",
          name: "Atividade_Memoria",
          component: () => import('../views/Atividades/MEMORIA/Memoria.vue'),
          meta: { RequiresAuth: true }
        },
      ],
    }
  ],
});


router.beforeEach( (to) => {

  const Loading = LoadingPinia();

  Loading.isLoading = true;

  const ProfileSession = SessionPinia();

  if ( to.meta.RequiresAuth && ProfileSession.profileID == '' ) {
    return '/perfil';
  }

  return true;
});



export default router;
