import { createRouter, createWebHistory } from "vue-router";




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
    }
  ],
});

export default router;
