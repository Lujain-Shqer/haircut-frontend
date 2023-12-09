import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
    path: "/ControlBoard",
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
    path: "/ClientPage",
    name: "ClientPage",
    component: ClientPage,
  },
  {
    path: "/updateClient/:id",
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
    path: "/EmployeeCommissions",
    name: "EmployeeCommissions",
    component: EmployeeCommissions,
  },
  {
    path: "/EmployeeSalary",
    name: "EmployeeSalary",
    component: EmployeeSalary,
  },
  {
    path: "/SalafiyatDiscounts",
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
    path: "/UpdateSundry/:id",
    name: "UpdateSundry",
    component: UpdateSundry,
  },
  {
    path: "/UpdateExpenses/:id",
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
    path: "/UpdateTax/:id",
    name: "UpdateTax",
    component: UpdateTax,
  },
  {
    path: "/AddNotTaxable",
    name: "AddNotTaxable",
    component: AddNotTaxable,
  },
  {
    path: "/UpdateNotTax/:id",
    name: "UpdateNotTax",
    component: UpdateNotTax,
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
    meta: { isOnOrderPage: true },
  },
  {
    path: "/SalonAppointments",
    name: "SalonAppointments",
    component: SalonAppointments,
  },
  {
    path: "/DisabledAppoinments",
    name: "DisabledAppoinments",
    component: DisabledAppoinments,
  },
  {
    path: "/ShowDisabledAppoinments",
    name: "ShowDisabledAppoinments",
    component: ShowDisabledAppoinments,
  },
  {
    path: "/UpdateDisabledAppoinments/:id",
    name: "UpdateDisabledAppoinments",
    component: UpdateDisabledAppoinments,
  },
  {
    path: "/ShowReservations",
    name: "ShowReservations",
    component: ShowReservations,
  },
  {
    path: "/NewReservation1",
    name: "NewReservation1",
    component: NewReservation1,
    meta: { isOnReservationPage: true },
  },
  {
    path: "/NewReservation2",
    name: "NewReservation2",
    component: NewReservation2,
    meta: { isOnReservationPage: true },
  },
  {
    path: "/NewReservation3",
    name: "NewReservation3",
    component: NewReservation3,
    meta: { isOnReservationPage: true },
  },
  {
    path: "/NewReservation4",
    name: "NewReservation4",
    component: NewReservation4,
    meta: { isOnReservationPage: true },
  },
  {
    path: "/FundMovement",
    name: "FundMovement",
    component: FundMovement,
  },
  {
    path: "/CashierWithdrawals",
    name: "CashierWithdrawals",
    component: CashierWithdrawals,
  },
  {
    path: "/CashierFeed",
    name: "CashierFeed",
    component: CashierFeed,
  },
  {
    path: "/AddNewEmployee",
    name: "AddNewEmployee",
    component: AddNewEmployee,
  },
  {
    path: "/CashierBox",
    name: "CashierBox",
    component: CashierBox,
  },
  {
    path: "/ServicesReports",
    name: "ServicesReports",
    component: ServicesReports,
  },
  {
    path: "/DiscountsPage",
    name: "DiscountsPage",
    component: DiscountsPage,
  },
  {
    path: "/AdvancesPage",
    name: "AdvancesPage",
    component: AdvancesPage,
  },
  {
    path: "/DiaryReport",
    name: "DiaryReport",
    component: DiaryReport,
  },
  {
    path: "/AddDiscounts",
    name: "AddDiscounts",
    component: AddDiscounts,
  },
  {
    path: "/UpdateDiscounts/:id",
    name: "UpdateDiscounts",
    component: UpdateDiscounts,
  },
  {
    path: "/AddAdvances",
    name: "AddAdvances",
    component: AddAdvances,
  },
  {
    path: "/UpdateAdvances/:id",
    name: "UpdateAdvances",
    component: UpdateAdvances,
  },
  {
    path: "/ServicesProviders",
    name: "ServicesProviders",
    component: ServicesProviders,
  },
  {
    path: "/ProductsPage",
    name: "ProductsPage",
    component: ProductsPage,
  },
  {
    path: "/SuppliersPage",
    name: "SuppliersPage",
    component: SuppliersPage,
  },
  {
    path: "/ServicesPage",
    name: "ServicesPage",
    component: ServicesPage,
  },
  {
    path: "/UsersPage",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/PowersPage",
    name: "PowersPage",
    component: PowersPage,
  },
  {
    path: "/AddProviders",
    name: "AddProviders",
    component: AddProviders,
  },
  {
    path: "/AddProducts",
    name: "AddProducts",
    component: AddProducts,
  },
  {
    path: "/AddSuppliers",
    name: "AddSuppliers",
    component: AddSuppliers,
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/AddServices",
    name: "AddServices",
    component: AddServices,
  },
  {
    path: "/ListOfEmployees",
    name: "ListOfEmployees",
    component: ListOfEmployees,
  },
  {
    path: "/UpdateEmployee/:id",
    name: "UpdateEmployee",
    component: UpdateEmployee,
  },
  {
    path: "/EmployeesSalary",
    name: "EmployeesSalary",
    component: EmployeesSalary,
  },
  {
    path: "/SalaryPage",
    name: "SalaryPage",
    component: SalaryPage,
  },
  {
    path: "/LiquidationEmployee",
    name: "LiquidationEmployee",
    component: LiquidationEmployee,
  },
  {
    path: "/TotalEmployee",
    name: "TotalEmployee",
    component: TotalEmployee,
  },
  {
    path: "/DeletedBills",
    name: "DeletedBills",
    component: DeletedBills,
  },
  {
    path: "/NewReservation",
    name: "NewReservation",
    component: NewReservation,
  },
  {
    path: "/UpdateReservation/:id",
    name: "UpdateReservation",
    component: UpdateReservation,
  },
  {
    path: "/UpdateAppoinments",
    name: "UpdateAppoinments",
    component: UpdateAppoinments,
  },
  {
    path: "/ShowDisabledAppoinments",
    name: "ShowDisabledAppoinments",
    component: ShowDisabledAppoinments,
  },
  {
    path: "/AddSundryPurchases",
    name: "AddSundryPurchases",
    component: AddSundryPurchases,
  },
  {
    path: "/AddProductsPurchases",
    name: "AddProductsPurchases",
    component: AddProductsPurchases,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  reservationMixin.beforeRouteEnter.call({ $store: store }, to, next);
  orderMixin.beforeRouteEnter.call({ $store: store }, to, next);
  const toIsOnReservationPage = to.meta.isOnReservationPage || false;
  const fromIsOnOrderPage = from.meta.isOnOrderPage || false;
  if (!toIsOnReservationPage) {
    store.commit("clearReservationData");
  }
  if (fromIsOnOrderPage) {
    store.commit("clearOrderData");
  }

  // next();
});
export default router;
