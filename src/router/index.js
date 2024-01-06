import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import ControlBoard from "../views/ControlBoard/ControlBoard.vue";
import LogIn from "../views/LoginPages/LogIn.vue";
import SignIn from "../views/LoginPages/SignIn.vue";
import BranchPage from "../views/LoginPages/BranchPage.vue";
import ClientPage from "../views/Clients/ClientPage.vue";
import UpdateClient from "../views/Clients/UpdateClient.vue";
import AddClient from "../views/Clients/AddClient.vue";
import EmployeeCommissions from "../views/Employees/EmployeeCommissions.vue";
import EmployeeSalary from "../views/Employees/EmployeeSalary.vue";
import EmployeeReport2 from "../views/Employees/EmployeeReport2.vue";
import SalafiyatDiscounts from "../views/Employees/SalafiyatDiscounts.vue";
import SundryProducts from "../views/SundryProducts/SundryProducts.vue";
import GeneralExpenses from "../views/SundryProducts/GeneralExpenses.vue";
import UpdateSundry from "../views/SundryProducts/UpdateSundry.vue";
import UpdateExpenses from "../views/SundryProducts/UpdateExpenses.vue";
import AddSundry from "../views/SundryProducts/AddSundry.vue";
import AddExpenses from "../views/SundryProducts/AddExpenses.vue";
import AddTaxable from "../views/FinancialTransactions/AddTaxable.vue";
import AddNotTaxable from "../views/FinancialTransactions/AddNotTaxable.vue";
import UpdateTax from "../views/FinancialTransactions/UpdateTax.vue";
import UpdateNotTax from "../views/FinancialTransactions/UpdateNotTax.vue";
import SallesBills from "../views/FinancialTransactions/SallesBills.vue";
import SalesTax from "../views/FinancialTransactions/SalesTax.vue";
import ProductsPurchases from "../views/FinancialTransactions/ProductsPurchases.vue";
import SundryPurchases from "../views/FinancialTransactions/SundryPurchases.vue";
import AddSundryPurchases from "../views/FinancialTransactions/AddSundryPurchases.vue";
import AddProductsPurchases from "../views/FinancialTransactions/AddProductsPurchases.vue";

import ExpensesTax from "../views/FinancialTransactions/ExpensesTax.vue";
import ExpensesNotTax from "../views/FinancialTransactions/ExpensesNotTax.vue";
import TaxReports from "../views/FinancialTransactions/TaxReports.vue";
import SundryTaxReports from "../views/FinancialTransactions/ٍSundryTaxReports.vue";
import TotalCommissions from "../views/FinancialTransactions/TotalCommissions.vue";
import ClosingAccounts from "../views/FinancialTransactions/ClosingAccounts.vue";
import ClearingCommissions from "../views/FinancialTransactions/ClearingCommissions.vue";
import PointOfSales from "../views/SalesPoint/PointOfSales.vue";
import SalonAppointments from "../views/Reservations/SalonAppointments.vue";
import DisabledAppoinments from "../views/Reservations/DisabledAppoinments.vue";
import ShowReservations from "../views/Reservations/ShowReservations.vue";
import NewReservation1 from "../views/Reservations/NewReservation1.vue";
import NewReservation2 from "../views/Reservations/NewReservation2.vue";
import NewReservation3 from "../views/Reservations/NewReservation3.vue";
import NewReservation4 from "../views/Reservations/NewReservation4.vue";
import NewReservation from "../views/Reservations/NewReservation.vue";
import UpdateReservation from "../views/Reservations/UpdateReservation.vue";
import UpdateAppoinments from "../views/Reservations/UpdateAppoinments.vue";
import ShowDisabledAppoinments from "../views/Reservations/ShowDisabledAppoinments.vue";
import UpdateDisabledAppoinments from "../views/Reservations/UpdateDisabledAppoinments";
import CashierBox from "../views/FinancialTransactions/CashierBox.vue";
import FundMovement from "../views/Admin/AdministrativeDepartment/FundMovement.vue";
import CashierWithdrawals from "../views/Admin/AdministrativeDepartment/CashierWithdrawals.vue";
import CashierFeed from "../views/Admin/AdministrativeDepartment/CashierFeed.vue";
import ServicesReports from "../views/Admin/FinancialTransactions/ServicesReports.vue";
import DeletedBills from "../views/Admin/FinancialTransactions/DeletedBills.vue";
import DiscountsPage from "../views/Admin/FinancialTransactions/DiscountsPage.vue";
import AdvancesPage from "../views/Admin/FinancialTransactions/AdvancesPage.vue";
import UpdateDiscounts from "../views/Admin/FinancialTransactions/UpdateDiscounts.vue";
import UpdateAdvances from "../views/Admin/FinancialTransactions/UpdateAdvances.vue";
import DiaryReport from "../views/Admin/FinancialTransactions/DiaryReport.vue";
import AddDiscounts from "../views/Admin/FinancialTransactions/AddDiscounts.vue";
import AddAdvances from "../views/Admin/FinancialTransactions/AddAdvances.vue";
import ServicesProviders from "../views/Admin/BranchBox/ServicesProviders.vue";
import ProductsPage from "../views/Admin/BranchBox/ProductsPage.vue";
import SuppliersPage from "../views/Admin/BranchBox/SuppliersPage.vue";
import ServicesPage from "../views/Admin/BranchBox/ServicesPage.vue";
import UsersPage from "../views/Admin/BranchBox/UsersPage.vue";
import PowersPage from "../views/Admin/BranchBox/PowersPage.vue";
import AddProviders from "../views/Admin/BranchBox/AddProviders.vue";
import AddProducts from "../views/Admin/BranchBox/AddProducts.vue";
import AddSuppliers from "../views/Admin/BranchBox/AddSuppliers.vue";
import AddUser from "../views/Admin/BranchBox/AddUser.vue";
import AddServices from "../views/Admin/BranchBox/AddServices.vue";
import AddNewEmployee from "../views/Admin/EmployeePage/AddNewEmployee.vue";
import UpdateUsers from "../views/Admin/BranchBox/UpdateUsers.vue";
import UpdateProducts from "../views/Admin/BranchBox/UpdateProducts.vue";
import UpdateProviders from "../views/Admin/BranchBox/UpdateProviders.vue";
import UpdateSuppliers from "../views/Admin/BranchBox/UpdateSuppliers.vue";
import UpdateServices from "../views/Admin/BranchBox/UpdateServices.vue";
import ListOfEmployees from "../views/Admin/EmployeePage/ListOfEmployees.vue";
import EmployeesSalary from "../views/Admin/EmployeePage/EmployeesSalary.vue";
import UpdateEmployee from "../views/Admin/EmployeePage/UpdateEmployee.vue";
import SalaryPage from "../views/Admin/EmployeePage/SalaryPage.vue";
import LiquidationEmployee from "../views/Admin/EmployeePage/LiquidationEmployee.vue";
import TotalEmployee from "../views/Admin/EmployeePage/TotalEmployee.vue";
import store from "@/store/index";
import reservationMixin from "@/Mixins/ReservationMixin";
import orderMixin from "@/Mixins/OrderMixin";
const routes = [
  {
    path: "/",
    // name: "logIn",
    // component: LogIn,
    redirect: "/logIn",
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
    path: "/ControlBoard",
    name: "ControlBoard",
    component: ControlBoard,
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/ClientPage",
    name: "ClientPage",
    component: ClientPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/updateClient/:id",
    name: "UpdateClient",
    component: UpdateClient,
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/EmployeeCommissions",
    name: "EmployeeCommissions",
    component: EmployeeCommissions,
    meta: { requiresAuth: true },
  },
  {
    path: "/EmployeeSalary",
    name: "EmployeeSalary",
    component: EmployeeSalary,
    meta: { requiresAuth: true },
  },
  {
    path: "/SalafiyatDiscounts",
    name: "SalafiyatDiscounts",
    component: SalafiyatDiscounts,
    meta: { requiresAuth: true },
  },
  {
    path: "/EmployeeReport2",
    name: "EmployeeReport2",
    component: EmployeeReport2,
    meta: { requiresAuth: true },
  },
  {
    path: "/SundryProducts",
    name: "SundryProducts",
    component: SundryProducts,
    meta: { requiresAuth: true },
  },
  {
    path: "/GeneralExpenses",
    name: "GeneralExpenses",
    component: GeneralExpenses,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateSundry/:id",
    name: "UpdateSundry",
    component: UpdateSundry,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateExpenses/:id",
    name: "UpdateExpenses",
    component: UpdateExpenses,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddSundry",
    name: "AddSundry",
    component: AddSundry,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddExpenses",
    name: "AddExpenses",
    component: AddExpenses,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddTaxable",
    name: "AddTaxable",
    component: AddTaxable,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateTax/:id",
    name: "UpdateTax",
    component: UpdateTax,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddNotTaxable",
    name: "AddNotTaxable",
    component: AddNotTaxable,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateNotTax/:id",
    name: "UpdateNotTax",
    component: UpdateNotTax,
    meta: { requiresAuth: true },
  },
  {
    path: "/SallesBills",
    name: "SallesBills",
    component: SallesBills,
    meta: { requiresAuth: true },
  },
  {
    path: "/SalesTax",
    name: "SalesTax",
    component: SalesTax,
    meta: { requiresAuth: true },
  },
  {
    path: "/ProductsPurchases",
    name: "ProductsPurchases",
    component: ProductsPurchases,
    meta: { requiresAuth: true },
  },
  {
    path: "/SundryPurchases",
    name: "SundryPurchases",
    component: SundryPurchases,
    meta: { requiresAuth: true },
  },
  {
    path: "/ExpensesTax",
    name: "ExpensesTax",
    component: ExpensesTax,
    meta: { requiresAuth: true },
  },
  {
    path: "/ExpensesNotTax",
    name: "ExpensesNotTax",
    component: ExpensesNotTax,
    meta: { requiresAuth: true },
  },
  {
    path: "/TaxReports",
    name: "TaxReports",
    component: TaxReports,
    meta: { requiresAuth: true },
  },
  {
    path: "/SundryTaxReports",
    name: "SundryTaxReports",
    component: SundryTaxReports,
    meta: { requiresAuth: true },
  },
  {
    path: "/TotalCommissions",
    name: "TotalCommissions",
    component: TotalCommissions,
    meta: { requiresAuth: true },
  },
  {
    path: "/ClosingAccounts",
    name: "ClosingAccounts",
    component: ClosingAccounts,
    meta: { requiresAuth: true },
  },
  {
    path: "/ClearingCommissions",
    name: "ClearingCommissions",
    component: ClearingCommissions,
    meta: { requiresAuth: true },
  },
  {
    path: "/PointOfSales",
    name: "PointOfSales",
    component: PointOfSales,
    meta: { isOnOrderPage: true, requiresAuth: true },
  },
  {
    path: "/SalonAppointments",
    name: "SalonAppointments",
    component: SalonAppointments,
    meta: { requiresAuth: true },
  },
  {
    path: "/DisabledAppoinments",
    name: "DisabledAppoinments",
    component: DisabledAppoinments,
    meta: { requiresAuth: true },
  },
  {
    path: "/ShowDisabledAppoinments",
    name: "ShowDisabledAppoinments",
    component: ShowDisabledAppoinments,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateDisabledAppoinments/:id",
    name: "UpdateDisabledAppoinments",
    component: UpdateDisabledAppoinments,
    meta: { requiresAuth: true },
  },
  {
    path: "/ShowReservations",
    name: "ShowReservations",
    component: ShowReservations,
    meta: { requiresAuth: true },
  },
  {
    path: "/NewReservation1",
    name: "NewReservation1",
    component: NewReservation1,
    meta: { isOnReservationPage: true, requiresAuth: true },
  },
  {
    path: "/NewReservation2",
    name: "NewReservation2",
    component: NewReservation2,
    meta: { isOnReservationPage: true, requiresAuth: true },
  },
  {
    path: "/NewReservation3",
    name: "NewReservation3",
    component: NewReservation3,
    meta: { isOnReservationPage: true, requiresAuth: true },
  },
  {
    path: "/NewReservation4",
    name: "NewReservation4",
    component: NewReservation4,
    meta: { isOnReservationPage: true, requiresAuth: true },
  },
  {
    path: "/FundMovement",
    name: "FundMovement",
    component: FundMovement,
    meta: { requiresAuth: true },
  },
  {
    path: "/CashierWithdrawals",
    name: "CashierWithdrawals",
    component: CashierWithdrawals,
    meta: { requiresAuth: true },
  },
  {
    path: "/CashierFeed",
    name: "CashierFeed",
    component: CashierFeed,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddNewEmployee",
    name: "AddNewEmployee",
    component: AddNewEmployee,
    meta: { requiresAuth: true },
  },
  {
    path: "/CashierBox",
    name: "CashierBox",
    component: CashierBox,
    meta: { requiresAuth: true },
  },
  {
    path: "/ServicesReports",
    name: "ServicesReports",
    component: ServicesReports,
    meta: { requiresAuth: true },
  },
  {
    path: "/DiscountsPage",
    name: "DiscountsPage",
    component: DiscountsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/AdvancesPage",
    name: "AdvancesPage",
    component: AdvancesPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/DiaryReport",
    name: "DiaryReport",
    component: DiaryReport,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddDiscounts",
    name: "AddDiscounts",
    component: AddDiscounts,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateDiscounts/:id",
    name: "UpdateDiscounts",
    component: UpdateDiscounts,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddAdvances",
    name: "AddAdvances",
    component: AddAdvances,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateAdvances/:id",
    name: "UpdateAdvances",
    component: UpdateAdvances,
    meta: { requiresAuth: true },
  },
  {
    path: "/ServicesProviders",
    name: "ServicesProviders",
    component: ServicesProviders,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateProviders/:id",
    name: "UpdateProviders",
    component: UpdateProviders,
    meta: { requiresAuth: true },
  },
  {
    path: "/ProductsPage",
    name: "ProductsPage",
    component: ProductsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/SuppliersPage",
    name: "SuppliersPage",
    component: SuppliersPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateSuppliers/:id",
    name: "UpdateSuppliers",
    component: UpdateSuppliers,
    meta: { requiresAuth: true },
  },
  {
    path: "/ServicesPage",
    name: "ServicesPage",
    component: ServicesPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateServices/:id",
    name: "UpdateServices",
    component: UpdateServices,
    meta: { requiresAuth: true },
  },
  {
    path: "/UsersPage",
    name: "UsersPage",
    component: UsersPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateUsers/:id",
    name: "UpdateUsers",
    component: UpdateUsers,
    meta: { requiresAuth: true },
  },
  {
    path: "/PowersPage",
    name: "PowersPage",
    component: PowersPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddProviders",
    name: "AddProviders",
    component: AddProviders,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddProducts",
    name: "AddProducts",
    component: AddProducts,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateProducts/:id",
    name: "UpdateProducts",
    component: UpdateProducts,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddSuppliers",
    name: "AddSuppliers",
    component: AddSuppliers,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: AddUser,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddServices",
    name: "AddServices",
    component: AddServices,
    meta: { requiresAuth: true },
  },
  {
    path: "/ListOfEmployees",
    name: "ListOfEmployees",
    component: ListOfEmployees,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateEmployee/:id",
    name: "UpdateEmployee",
    component: UpdateEmployee,
    meta: { requiresAuth: true },
  },
  {
    path: "/EmployeesSalary",
    name: "EmployeesSalary",
    component: EmployeesSalary,
    meta: { requiresAuth: true },
  },
  {
    path: "/SalaryPage",
    name: "SalaryPage",
    component: SalaryPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/LiquidationEmployee",
    name: "LiquidationEmployee",
    component: LiquidationEmployee,
    meta: { requiresAuth: true },
  },
  {
    path: "/TotalEmployee",
    name: "TotalEmployee",
    component: TotalEmployee,
    meta: { requiresAuth: true },
  },
  {
    path: "/DeletedBills",
    name: "DeletedBills",
    component: DeletedBills,
    meta: { requiresAuth: true },
  },
  {
    path: "/NewReservation",
    name: "NewReservation",
    component: NewReservation,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateReservation/:id",
    name: "UpdateReservation",
    component: UpdateReservation,
    meta: { requiresAuth: true },
  },
  {
    path: "/UpdateAppoinments",
    name: "UpdateAppoinments",
    component: UpdateAppoinments,
    meta: { requiresAuth: true },
  },
  {
    path: "/ShowDisabledAppoinments",
    name: "ShowDisabledAppoinments",
    component: ShowDisabledAppoinments,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddSundryPurchases",
    name: "AddSundryPurchases",
    component: AddSundryPurchases,
    meta: { requiresAuth: true },
  },
  {
    path: "/AddProductsPurchases",
    name: "AddProductsPurchases",
    component: AddProductsPurchases,
    meta: { requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  reservationMixin.beforeRouteEnter.call({ $store: store }, to, next);
  orderMixin.beforeRouteEnter.call({ $store: store }, to, next);
  const toIsOnReservationPage = to.meta.isOnReservationPage || false;
  const fromIsOnOrderPage = from.meta.isOnOrderPage || false;
  const isAuthenticated = checkAuthentication();
  if (to.name === "LogIn") {
    localStorage.removeItem("access_token");
  }
  if (to.meta.requiresAuth && !isAuthenticated) {
    router.push("/logIn");
  } else {
    if (!toIsOnReservationPage) {
      store.commit("clearReservationData");
    }
    if (fromIsOnOrderPage) {
      store.commit("clearOrderData");
    }
  }
});
function checkAuthentication() {
  return localStorage.getItem("access_token") !== null;
}
export default router;
