import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Cube3d from "./views/Cube3D.vue";
import GalleryView from "./views/GalleryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cube3d",
      name: "cube3d",
      component: Cube3d,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
  ],
});

export default router;
