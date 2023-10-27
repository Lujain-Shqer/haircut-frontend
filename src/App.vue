<template>
  <nav>
    <router-link to="/FundMovement">FundMovement</router-link> |
    <router-link to="/CashierWithdrawals">CashierWithdrawals</router-link> |
    <router-link to="/CashierFeed">CashierFeed</router-link> |
    <router-link to="/AddNewEmployee">AddNewEmployee</router-link> |
    <router-link to="/CashierBox">CashierBox</router-link> |
    <router-link to="/ServicesReports">ServicesReports</router-link> |
    <router-link to="/DiscountsPage">DiscountsPage</router-link> |
    <router-link to="/AdvancesPage">AdvancesPage</router-link> |
    <router-link to="/DiaryReport">DiaryReport</router-link> |
    <router-link to="/DiaryReport">DiaryReport</router-link> |
    <router-link to="/AddDiscounts">AddDiscounts</router-link> |
    <router-link to="/AddAdvances">AddAdvances</router-link> |
    <router-link to="/ServicesProviders">ServicesProviders</router-link> |
    <router-link to="/ProductsPage">ProductsPage</router-link> |
    <router-link to="/SuppliersPage">SuppliersPage</router-link> |
    <router-link to="/ServicesPage">ServicesPage</router-link> |
    <router-link to="/UsersPage">UsersPage</router-link> |
    <router-link to="/PowersPage">PowersPage</router-link> |
    <router-link to="/AddProviders">AddProviders</router-link> |
    <router-link to="/AddProducts">AddProducts</router-link> |
    <router-link to="/AddSuppliers">AddSuppliers</router-link> |
    <router-link to="/AddUser">AddUser</router-link> |
    <router-link to="/AddServices">AddServices</router-link> |
  </nav>
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
<style></style>
