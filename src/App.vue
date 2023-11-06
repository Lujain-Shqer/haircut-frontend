<template>
  <nav><router-link to="/LogIn">Login</router-link></nav>
  <NavBar />
  <SideBar />
  <ServicesPage />

  <router-view />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
// import ServicesPage from "@/components/ServicesPage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    // ServicesPage,
  },
};
// margin-left: 1vh;
//     background: #F7F7F7;
//     padding: 4px;
//     border-radius: 5px;
//     /* box-shadow: 0px 0px 4px -1px #14141412; */
//     box-shadow: 0px 0px 6px -1px #141414
</script>
<style>
#app {
  z-index: 10000000000000;
  position: relative;
}
</style>
