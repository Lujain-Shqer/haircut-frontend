<template>
  <!-- <nav><router-link to="/LogIn">Login</router-link></nav> -->
  <NavBar v-if="enableNavigation" />
  <SideBar v-if="enableNavigation" />
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
  // mounted() {
  //   console.log(this.$router.currentRoute.name);
  // },
  computed: {
    enableNavigation() {
      const disabledNavRoutes = ["LogIn", "BranchPage"];
      return disabledNavRoutes.indexOf(this.$route.name) === -1;
    },
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
  background: #fff;
}
@media (max-width: 991px) {
  .table {
    width: 150% !important;
  }
  .extra-table {
    width: 130% !important;
  }
}
@media (max-width: 765px) {
  .table {
    width: 220% !important;
  }
  .extra-table {
    width: 200% !important;
  }
  .table .search {
    float: none !important;
    display: inline-block !important;
  }
  .extra-table button {
    float: none !important;
    margin: 0 5px;
  }
}
@media (max-width: 540px) {
  .extra-table {
    width: 260% !important;
  }
  .table {
    width: 280% !important;
  }
}
</style>
