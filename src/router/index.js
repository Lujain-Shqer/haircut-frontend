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
import SallesBills from "../views/FinancialTransactions/SallesBills.vue";
import SalesTax from "../views/FinancialTransactions/SalesTax.vue";
import ProductsPurchases from "../views/FinancialTransactions/ProductsPurchases.vue";
import SundryPurchases from "../views/FinancialTransactions/SundryPurchases.vue";
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
import FundMovement from "../views/AdministrativeDepartment/FundMovement.vue";
import CashierWithdrawals from "../views/AdministrativeDepartment/CashierWithdrawals.vue";
import CashierFeed from "../views/AdministrativeDepartment/CashierFeed.vue";
import AddNewEmployee from "../views/EmployeeAdmin/AddNewEmployee.vue";
import CashierBox from "../views/FinancialTransactions/CashierBox.vue";

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
    path: "/ShowReservations",
    name: "ShowReservations",
    component: ShowReservations,
  },
  {
    path: "/NewReservation1",
    name: "NewReservation1",
    component: NewReservation1,
  },
  {
    path: "/NewReservation2",
    name: "NewReservation2",
    component: NewReservation2,
  },
  {
    path: "/NewReservation3",
    name: "NewReservation3",
    component: NewReservation3,
  },
  {
    path: "/NewReservation4",
    name: "NewReservation4",
    component: NewReservation4,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
