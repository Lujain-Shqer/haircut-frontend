<template>
  <nav>
    <router-link to="/control">control</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/signin">regester</router-link> |
    <router-link to="/branch">branch</router-link> |
    <router-link to="/client">client</router-link> |
    <router-link to="/updateClient">updat client</router-link> |
    <router-link to="/addClient">add client</router-link> |
    <router-link to="/employeeComissions">employeeComissions</router-link> |
    <router-link to="/employeeSalary">employeeSalary</router-link> |
    <router-link to="/salafiyatDiscounts">salafiyatDiscounts</router-link> |
    <router-link to="/EmployeeReport2">employeeReport2</router-link> |
    <router-link to="/SundryProducts">SundryProducts</router-link> |
    <router-link to="/GeneralExpenses">GeneralExpenses</router-link> |
    <router-link to="/UpdateSundry">UpdateSundry</router-link> |
    <router-link to="/UpdateExpenses">UpdateExpenses</router-link> |
    <router-link to="/AddSundry">AddSundry</router-link> |
    <router-link to="/AddExpenses">AddExpenses</router-link> |
    <router-link to="/AddTaxable">AddTaxable</router-link> |
    <router-link to="/AddNotTaxable">AddNotTaxable</router-link> |
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
    <router-link to="/PointOfSales">PointOfSales</router-link> |
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
</script>
