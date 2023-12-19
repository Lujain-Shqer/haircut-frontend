<template>
  <div class="sidebar">
    <img class="logoo" src="../assets/logoo.png" />
    <h6>صالون ذقن &amp; شعر</h6>
    <sidebar-menu :menu="menu" :rtl="rtl" :hideToggle="hideToggle" />
  </div>
</template>
<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          href: "/ControlBoard",
          title: "لوحة التحكم",
          icon: {
            element: "fa",
            attributes: {
              icon: "fa-pie-chart",
            },
          },
        },
        {
          href: "/PointOfSales",
          title: "نقطة البيع",
          icon: {
            element: "fa",
            attributes: {
              icon: "home",
            },
          },
        },
        {
          href: "/ClientPage",
          title: "العملاء",
          icon: {
            element: "fa",
            attributes: {
              icon: "users",
            },
          },
        },
        {
          href: "",
          title: "قسم الإدارة",
          icon: {
            element: "fa",
            attributes: {
              icon: "fas fa-user-tie",
            },
          },
          child: [
            {
              href: "/ServicesProviders",
              title: " مقدمو الخدمات العامة ",
            },
            {
              href: "/SuppliersPage",
              title: "الموردون",
            },
            {
              href: "/ServicesPage",
              title: "الخدمات",
            },
            {
              href: "/ProductsPage",
              title: "المنتجات",
            },
            {
              href: "/UsersPage",
              title: "المستخدمين",
            },
            // {
            //   href: "/PowersPage",
            //   title: "الصلاحيات",
            // },
          ],
        },
        {
          href: "",
          title: "صندوق الفرع",
          icon: {
            element: "fa",
            attributes: {
              icon: "fa-calculator",
            },
          },
          child: [
            {
              href: "/FundMovement",
              title: "رصيد صندوق الفرع",
            },
            {
              href: "/CashierFeed",
              title: "سجل تغذية الكاشير",
            },
            {
              href: "/CashierWithdrawals",
              title: "سجل سحوبات الكاشير",
            },
          ],
        },
        {
          href: "",
          title: "الموظفين",
          icon: {
            element: "fa",
            attributes: {
              icon: "fa-user-friends",
            },
          },
          child: [
            {
              href: "/ListOfEmployees",
              title: "قائمة الموظفين",
            },
            // {
            //   href: "/EmployeesSalary",
            //   title: "رصيد الموظف",
            // },
            // {
            //   href: "/SalaryPage",
            //   title: "الرواتب",
            // },
            // {
            //   href: "/LiquidationEmployee",
            //   title: "سجل التصفيات",
            // },
            // {
            //   href: "/EmployeeCommissions",
            //   title: "عمولات الموظفين ",
            // },
            // {
            //   href: "/EmployeeReport2",
            //   title: "تقرير الموظف (مفصل)",
            // },
            // {
            //   href: "/TotalEmployee",
            //   title: "تقرير الموظف (الإجمالي)",
            // },
            // {
            //   href: "/SalafiyatDiscounts",
            //   title: "تقرير الخصومات والسلفيات",
            // },
            // {
            //   href: "/EmployeeSalary",
            //   title: "تقرير مسير الرواتب",
            // },
          ],
        },
        {
          href: "",
          title: "الحجوزات",
          icon: {
            element: "fa",
            attributes: {
              icon: "calendar",
            },
          },
          child: [
            {
              href: "/Showreservations",
              title: "الحجوزات",
            },
            {
              href: "/SalonAppointments",
              title: "مواعيد الصالون",
            },
            {
              href: "/DisabledAppoinments",
              title: "المواعيد المعطلة",
            },
            {
              href: "/NewReservation1",
              title: "انشاء حجز جديد",
            },
          ],
        },
        {
          href: "",
          title: "المعاملات المالية",
          icon: {
            element: "fa",
            attributes: {
              icon: "handshake",
            },
          },
          child: [
            {
              href: "",
              title: "المبيعات",
              child: [
                {
                  href: "/SallesBills",
                  title: "فواتير المبيعات",
                },
                {
                  href: "/SalesTax",
                  title: "تقرير الضريبة (مبيعات)",
                },
                {
                  href: "/DeletedBills",
                  title: "الفواتير المحذوفة",
                },
                {
                  href: "/ServicesReports",
                  title: "تقرير الخدمات",
                },
              ],
            },
            {
              href: "",
              title: "المشتريات والمصروفات",
              child: [
                {
                  href: "/ProductsPurchases",
                  title: "مشتريات المنتجات",
                },
                {
                  href: "/SundryPurchases",
                  title: "المشتريات النثرية",
                },
                {
                  href: "/ExpensesTax",
                  title: "المصاريف العمومية الخاضعة للضريبة",
                },
                {
                  href: "/ExpensesNotTax",
                  title: "المصاريف العمومية الغير خاضعة للضريبة",
                },
                {
                  href: "/TaxReports",
                  title: "تقرير الضريبة (مشتريات)",
                },
                {
                  href: "/SundryTaxReports",
                  title: "تقرير الضريبة (مشتريات نثرية)",
                },
              ],
            },
            {
              href: "",
              title: "الحسابات المالية",
              child: [
                // {
                //   href: "/CashierBox",
                //   title: "صندوق الكاشير",
                // },
                {
                  href: "/TotalCommissions",
                  title: "تقرير إجمالي العمولات",
                },
                // {
                //   href: "/ClosingAccounts",
                //   title: "تقرير إقفال الحسابات",
                // },
                {
                  href: "/ClearingCommissions",
                  title: "تقرير تصفية العمولات",
                },
                {
                  href: "/DiaryReport",
                  title: "تقرير اليوميات",
                },
                {
                  href: "/AdvancesPage",
                  title: "السلفيات",
                },
                {
                  href: "/DiscountsPage",
                  title: "الخصومات",
                },
              ],
            },
          ],
        },
        {
          href: "/SundryProducts",
          title: "المنتجات النثرية",
          icon: {
            element: "fa",
            attributes: {
              icon: "suitcase",
            },
          },
          child: [
            {
              href: "/GeneralExpenses",
              title: "بنود المصاريف العمومية",
            },
          ],
        },
      ],
      rtl: true,
      hideToggle: true,
    };
  },
};
</script>

<style>
.sidebar {
  width: 23%;
  height: 100%;
  transition: 0.5s;
  box-shadow: 0px 0px 8px 0px #00000040;
  border-left: 1.18px solid #f5f5f5;
  background: #ebedf7;
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  border-radius: 7px;
  padding: 1vh 0;
  text-align: center;
}
.sidebar .logoo {
  width: 70%;
}
.sidebar h6 {
  font-size: 1.5vh;
  color: #1a2669;
  margin-bottom: 5vh;
}
.v-sidebar-menu .vsm--title > span {
  color: black;
}
.v-sidebar-menu .vsm--arrow {
  color: black;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
  color: black;
}
.v-sidebar-menu.vsm_rtl {
  position: relative;
}
.v-sidebar-menu {
  background-color: #ebedf7;
}
.v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open,
.v-sidebar-menu .vsm--link:hover {
  background: #757de84f;
  border-radius: 7px 15px 15px 7px;
  color: #3f51b5;
  border-right: 5px solid #3f51b5;
}
.v-sidebar-menu .vsm--dropdown {
  margin-right: 1vh;
}
.v-sidebar-menu .vsm--link {
  margin-bottom: 2vh;
  width: 90%;
}
.v-sidebar-menu .vsm--title > span {
  color: #1a2669;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  width: 20px;
  color: #1a2669;
  background: #f7f7f7;
  padding: 0 7px;
  box-shadow: 0px 4px 6px -1px #1414141f;
  border-radius: 7px;
}
.v-sidebar-menu .vsm--dropdown:first-child {
  background: transparent;
  color: #3f51b5;
  width: 100%;
  padding: 0;
}
.v-sidebar-menu .vsm--dropdown .v-sidebar-menu .vsm--dropdown {
  border: 0;
}
.v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open .vsm--icon {
  background: #f7f7f7 !important;
}
.vsm--child {
  border-right: 2px solid #757de8;
  margin-right: 2vh;
}
.vsm--child .vsm--child {
  border: 0;
}
.v-sidebar-menu.vsm_rtl .vsm--link_level-1.vsm--link_active {
  background: #c6caf2;
  color: #3f51b5;
  box-shadow: none;
  border-radius: 7px 15px 15px 7px;
  border-right: 5px solid #757de8;
}
.v-sidebar-menu .vsm--link_active {
  background: #c6caf2;
  border-radius: 9px;
}
.v-sidebar-menu .vsm--link_hover {
  background: #757de84f !important;
}
.v-sidebar-menu .vsm--title {
  font-size: 2.2vmin;
}
.v-sidebar-menu .vsm--link {
  width: 90%;
}
@media (max-width: 1300px) {
  .v-sidebar-menu .vsm--link {
    width: 80%;
  }
  .v-sidebar-menu .vsm--title {
    font-size: 2vmin;
  }
}
@media (max-width: 991px) {
  .sidebar {
    width: 30%;
  }
  .container {
    width: 70%;
  }
  .v-sidebar-menu .vsm--link {
    width: 75%;
  }
}
@media (max-width: 765px) {
  .sidebar {
    display: none;
  }
  .navbar {
    display: block;
  }
  .container {
    width: 100%;
  }
}
.v-sidebar-menu .vsm--item {
  white-space: break-spaces;
}
</style>
