<template>
  <nav>
    <router-link to="/login">login</router-link> |
    <router-link to="/signin">regester</router-link> |
    <router-link to="/branch">branch</router-link> |
    <router-link to="/SallesBills">SallesBills</router-link> |
    <router-link to="/SalesTax">SalesTax</router-link> |
    <router-link to="/ProductsPurchases">ProductsPurchases</router-link> |
    <router-link to="/SundryPurchases">SundryPurchases</router-link> |
    <router-link to="/ExpensesTax">ExpensesTax</router-link> |
    <router-link to="/ExpensesNotTax">ExpensesNotTax</router-link> |
    <router-link to="/TaxReports">TaxReports</router-link> |
    <router-link to="/TotalCommissions">TotalCommissions</router-link> |
    <router-link to="/ClosingAccounts">ClosingAccounts</router-link> |
    <router-link to="/ClearingCommissions">ClearingCommissions</router-link> |

    <router-link to="/ShowReservations">ShowReservations</router-link> |
    <router-link to="/NewReservation2">NewReservation2</router-link> |
    <router-link to="/NewReservation3">NewReservation3</router-link> |
    <router-link to="/NewReservation4">NewReservation4</router-link> |
    <router-link to="/FundMovement">FundMovement</router-link> |
    <router-link to="/CashierWithdrawals">CashierWithdrawals</router-link> |
    <router-link to="/CashierFeed">CashierFeed</router-link> |
    <router-link to="/AddNewEmployee">AddNewEmployee</router-link> |
    <router-link to="/CashierBox">CashierBox</router-link> |
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
