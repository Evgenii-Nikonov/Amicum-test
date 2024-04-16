// import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import WorkPage from "@/pages/WorkPage.vue";
import AhievementsPage from "@/pages/AchievementsPage.vue";
import EducationPage from "@/pages/EducationPage.vue";
import NotificationsPage from "@/pages/NotificationsPage.vue";
import VueRouter from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/work",
      component: WorkPage,
    },
    {
      path: "/notifications",
      component: NotificationsPage,
    },
    {
      path: "/education",
      component: EducationPage,
    },
    {
      path: "/achievements",
      component: AhievementsPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
  ],
});
