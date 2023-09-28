import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ControlBoard from "../views/ControlBoard.vue";
import LogIn from "../views/LogIn.vue";
import SignIn from "../views/SignIn.vue";
import BranchPage from "../views/BranchPage.vue";
import ClientPage from "../views/ClientPage.vue";
import UpdateClient from "../views/UpdateClient.vue";
import AddClient from "../views/AddClient.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/control",
    name: "ControlBoard",
    component: ControlBoard,
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/branch",
    name: "BranchPage",
    component: BranchPage,
  },
  {
    path: "/client",
    name: "ClientPage",
    component: ClientPage,
  },
  {
    path: "/updateClient",
    name: "UpdateClient",
    component: UpdateClient,
  },
  {
    path: "/addClient",
    name: "AddClient",
    component: AddClient,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
