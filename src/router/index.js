import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ControlBoard from "../views/ControlBoard.vue";
import LogIn from "../views/LogIn.vue";
import SignIn from "../views/SignIn.vue";
import BranchPage from "../views/BranchPage.vue";
import ClientPage from "../views/ClientPage.vue";
import UpdateClient from "../views/UpdateClient.vue";
import AddClient from "../views/AddClient.vue";
import EmployeeCommissions from "../views/EmployeeCommissions.vue";
import EmployeeSalary from "../views/EmployeeSalary.vue";
import EmployeeReport2 from "../views/EmployeeReport2.vue";
import SalafiyatDiscounts from "../views/SalafiyatDiscounts.vue";
import SundryProducts from "../views/SundryProducts.vue";
import GeneralExpenses from "../views/GeneralExpenses.vue";
import UpdateSundry from "../views/UpdateSundry.vue";
import UpdateExpenses from "../views/UpdateExpenses.vue";
import AddSundry from "../views/AddSundry.vue";
import AddExpenses from "../views/AddExpenses.vue";
import AddTaxable from "../views/AddTaxable.vue";
import AddNotTaxable from "../views/AddNotTaxable.vue";
import SallesBills from "../views/SallesBills.vue";
import SalesTax from "../views/SalesTax.vue";
import ProductsPurchases from "../views/ProductsPurchases.vue";
import SundryPurchases from "../views/SundryPurchases.vue";
import ExpensesTax from "../views/ExpensesTax.vue";
import ExpensesNotTax from "../views/ExpensesNotTax.vue";
import TaxReports from "../views/TaxReports.vue";
import TotalCommissions from "../views/TotalCommissions.vue";
import ClosingAccounts from "../views/ClosingAccounts.vue";
import ClearingCommissions from "../views/ClearingCommissions.vue";
import PointOfSales from "../views/PointOfSales.vue";

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
    _name: "AddClient",
    get name() {
      return this._name;
    },
    set name(value) {
      this._name = value;
    },
    component: AddClient,
  },
  {
    path: "/employeeComissions",
    name: "EmployeeCommissions",
    component: EmployeeCommissions,
  },
  {
    path: "/employeeSalary",
    name: "EmployeeSalary",
    component: EmployeeSalary,
  },
  {
    path: "/salafiyatDiscounts",
    name: "SalafiyatDiscounts",
    component: SalafiyatDiscounts,
  },
  {
    path: "/EmployeeReport2",
    name: "EmployeeReport2",
    component: EmployeeReport2,
  },
  {
    path: "/SundryProducts",
    name: "SundryProducts",
    component: SundryProducts,
  },
  {
    path: "/GeneralExpenses",
    name: "GeneralExpenses",
    component: GeneralExpenses,
  },
  {
    path: "/UpdateSundry",
    name: "UpdateSundry",
    component: UpdateSundry,
  },
  {
    path: "/UpdateExpenses",
    name: "UpdateExpenses",
    component: UpdateExpenses,
  },
  {
    path: "/AddSundry",
    name: "AddSundry",
    component: AddSundry,
  },
  {
    path: "/AddExpenses",
    name: "AddExpenses",
    component: AddExpenses,
  },
  {
    path: "/AddTaxable",
    name: "AddTaxable",
    component: AddTaxable,
  },
  {
    path: "/AddNotTaxable",
    name: "AddNotTaxable",
    component: AddNotTaxable,
  },
  {
    path: "/SallesBills",
    name: "SallesBills",
    component: SallesBills,
  },
  {
    path: "/SalesTax",
    name: "SalesTax",
    component: SalesTax,
  },
  {
    path: "/ProductsPurchases",
    name: "ProductsPurchases",
    component: ProductsPurchases,
  },
  {
    path: "/SundryPurchases",
    name: "SundryPurchases",
    component: SundryPurchases,
  },
  {
    path: "/ExpensesTax",
    name: "ExpensesTax",
    component: ExpensesTax,
  },
  {
    path: "/ExpensesNotTax",
    name: "ExpensesNotTax",
    component: ExpensesNotTax,
  },
  {
    path: "/TaxReports",
    name: "TaxReports",
    component: TaxReports,
  },
  {
    path: "/TotalCommissions",
    name: "TotalCommissions",
    component: TotalCommissions,
  },
  {
    path: "/ClosingAccounts",
    name: "ClosingAccounts",
    component: ClosingAccounts,
  },
  {
    path: "/ClearingCommissions",
    name: "ClearingCommissions",
    component: ClearingCommissions,
  },
  {
    path: "/PointOfSales",
    name: "PointOfSales",
    component: PointOfSales,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
