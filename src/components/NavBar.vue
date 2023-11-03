<template>
  <nav class="row NavBar">
    <div class="icons col-md-6">
      <div class="dropdown">
        <div data-bs-toggle="dropdown">
          <fa
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            aria-expanded="false"
            icon="cog"
          />
        </div>
        <div class="ul">
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <label>الصالون</label>
            <div class="row">
              <div class="col-10">حالة الحجز</div>
              <div class="col-2">
                <fa icon="fa-toggle-on" />
              </div>
            </div>
            <label>موظفو الحجز</label>
            <div class="row">
              <div class="col-10">
                السيد صابر <span class="rever"> حجز معلق (2) </span>
              </div>
              <div class="col-2">
                <fa icon="fa-toggle-on" />
              </div>
              <div class="col-10">محمد عصام</div>
              <div class="col-2">
                <fa icon="fa-toggle-on" />
              </div>
              <div class="col-10">أشرف عبدالعزيز</div>
              <div class="col-2">
                <fa icon="fa-toggle-on" />
              </div>
            </div>
            <label>رابط الفرع</label>
            <p>
              app.srbapp.com/branch/salwn-shar-and-thkn-llhlak-hy-alfysly-jd
            </p>
            <button class="btn">نسخ الرابط</button>
          </ul>
        </div>
      </div>
      <div class="dropdown">
        <div data-bs-toggle="dropdown">
          <fa
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            aria-expanded="false"
            icon="bell"
          />
        </div>
        <div class="ul ul-bell">
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <div class="note row">
              <img class="col-1" src="../assets/Avatar.png" />
              <span class="col-11"
                >يلزم عليك مراجعة الحجوزات اليوم (الاربعاء)
                <span>March 1, 2023</span></span
              >
            </div>
            <div class="note row">
              <img class="col-1" src="../assets/Avatar.png" />
              <span class="col-11"
                >يلزم عليك مراجعة الحجوزات اليوم (الاربعاء)
                <span>March 1, 2023</span></span
              >
            </div>
            <div class="note row">
              <img class="col-1" src="../assets/Avatar.png" />
              <span class="col-11"
                >يلزم عليك مراجعة الحجوزات اليوم (الاربعاء)
                <span>March 1, 2023</span></span
              >
            </div>
            <div class="note row">
              <img class="col-1" src="../assets/Avatar.png" />
              <span class="col-11"
                >يلزم عليك مراجعة الحجوزات اليوم (الاربعاء)
                <span>March 1, 2023</span></span
              >
            </div>
          </ul>
        </div>
      </div>
      <span>ENG</span>
      <fa icon="earth" />
    </div>
    <!-- Button Navbar-->
    <nav class="navbar navbar-expand-lg col-md-12">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav">
            <sidebar-menu :menu="menu" :rtl="rtl" :hideToggle="hideToggle" />
          </ul>
        </div>
      </div>
    </nav>
    <div class="brand col-lg-4">
      <span>صالون ذقن &amp; شعر</span>
      <img src="../assets/logoo.png" />
    </div>
  </nav>
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
          href: "ControlBoard",
          title: "لوحة التحكم",
          icon: {
            element: "fa",
            attributes: {
              icon: "fa-pie-chart",
            },
          },
        },
        {
          href: "PointOfSales",
          title: "نقطة البيع",
          icon: {
            element: "fa",
            attributes: {
              icon: "home",
            },
          },
        },
        {
          href: "ClientPage",
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
              href: "ServicesProviders",
              title: " مقدمو الخدمات العامة ",
            },
            {
              href: "SuppliersPage",
              title: "الموردون",
            },
            {
              href: "ServicesPage",
              title: "الخدمات",
            },
            {
              href: "ProductsPage",
              title: "المنتجات",
            },
            {
              href: "UsersPage",
              title: "المستخدمين",
            },
            {
              href: "PowersPage",
              title: "الصلاحيات",
            },
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
              href: "FundMovement",
              title: "رصيد صندوق الفرع",
            },
            {
              href: "CashierFeed",
              title: "سجل تغذية الكاشير",
            },
            {
              href: "CashierWithdrawals",
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
              href: "ListOfEmployees",
              title: "قائمة الموظفين",
            },
            {
              href: "EmployeesSalary",
              title: "رصيد الموظف",
            },
            {
              href: "SalaryPage",
              title: "الرواتب",
            },
            {
              href: "LiquidationEmployee",
              title: "سجل التصفيات",
            },
            {
              href: "EmployeeCommissions",
              title: "عمولات الموظفين ",
            },
            {
              href: "EmployeeReport2",
              title: "تقرير الموظف (مفصل)",
            },
            {
              href: "TotalEmployee",
              title: "تقرير الموظف (الإجمالي)",
            },
            {
              href: "SalafiyatDiscounts",
              title: "تقرير الخصومات والسلفيات",
            },
            {
              href: "EmployeeSalary",
              title: "تقرير مسير الرواتب",
            },
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
              href: "",
              title: "الحجوزات",
            },
            {
              href: "SalonAppointments",
              title: "مواعيد الصالون",
            },
            {
              href: "DisabledAppoinments",
              title: "المواعيد المعطلة",
            },
            {
              href: "NewReservation1",
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
                  href: "SallesBills",
                  title: "فواتير المبيعات",
                },
                {
                  href: "SalesTax",
                  title: "تقرير الضريبة (مبيعات)",
                },
                {
                  href: "",
                  title: "الفواتير المحذوفة",
                },
                {
                  href: "ServicesReports",
                  title: "تقرير الخدمات",
                },
              ],
            },
            {
              href: "",
              title: "المشتريات والمصروفات",
              child: [
                {
                  href: "ProductsPurchases",
                  title: "مشتريات المنتجات",
                },
                {
                  href: "SundryPurchases",
                  title: "المشتريات النثرية",
                },
                {
                  href: "ExpensesTax",
                  title: "المصاريف العمومية",
                },
                {
                  href: "TaxReports",
                  title: "تقرير الضريبة (مشتريات)",
                },
              ],
            },
            {
              href: "",
              title: "الحسابات المالية",
              child: [
                {
                  href: "CashierBox",
                  title: "صندوق الكاشير",
                },
                {
                  href: "TotalCommissions",
                  title: "تقرير إجمالي العمولات",
                },
                {
                  href: "ClosingAccounts",
                  title: "تقرير إقفال الحسابات",
                },
                {
                  href: "ClearingCommissions",
                  title: "تقرير تصفية العمولات",
                },
                {
                  href: "DiaryReport",
                  title: "تقرير اليوميات",
                },
                {
                  href: "AdvancesPage",
                  title: "السلفيات",
                },
                {
                  href: "DiscountsPage",
                  title: "الخصومات",
                },
              ],
            },
          ],
        },
        {
          href: "SundryProducts",
          title: "المنتجات النثرية",
          icon: {
            element: "fa",
            attributes: {
              icon: "suitcase",
            },
          },
          child: [
            {
              href: "GeneralExpenses",
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
<style scoped>
.row {
  margin: 0;
}
.NavBar {
  padding: 1vh 10vh;
  box-shadow: 0px 1px 0px 0px #12203b17;
  background: #ebedf7;
  margin-bottom: 3vh;
}
.icons {
  padding: 1vh;
  color: #1a2669;
}
.navbar {
  padding: 0;
  width: 0;
  display: inline-block;
}
nav .brand {
  text-align: end;
  font-weight: 400;
}
nav svg ~ ul {
  margin-right: 2vh;
  padding: 1vh;
  border: none;
  color: #1a2669;
}
nav svg {
  color: #1a2669;
}
nav svg:hover {
  box-shadow: 0px 4px 6px -1px #1414141f;
  background: #f7f7f7;
}
nav span {
  font-weight: 600;
  padding: 1vh;
  color: #1a2669;
}
nav .dropdown ul:first-of-type {
  position: relative;
  margin-top: 5vh !important;
  background: #ebedf7;
  border: 1px solid #ebedf7;
  border-radius: 3px;
  width: 260px;
  direction: rtl;
  margin-bottom: 0 !important;
  padding: 1vh;
}
nav .dropdown .ul-bell ul {
  padding: 0;
}
nav .dropdown ul div :nth-of-type(odd) {
  text-align: right;
}

nav .dropdown ul label {
  color: #1a2669;
  font-weight: 500;
  text-align: end;
  text-align: start;
  display: block;
  margin: 1vh 0;
}
nav .dropdown ul div.row {
  margin: 2vh 0 0;
}
nav .dropdown ul svg {
  color: #1a2669;
  font-size: 3vmin;
}
nav .dropdown ul span.rever {
  font-size: 1.9vmin;
  color: #ea0606;
  font-weight: 500;
  border: 0;
}
nav .dropdown ul p {
  color: #000000;
}
nav .dropdown ul button {
  background: #3f51b5;
  color: #fff;
  float: right;
}

nav .dropdown ul img {
  width: 20%;
  height: 20%;
}
nav .dropdown ul img ~ span {
  width: 80%;
  font-size: 1.4vmin;
}
nav .dropdown ul .note {
  border-bottom: 1px solid #dddddd;
}
nav .brand img {
  width: 25%;
}
nav .brand span:first-child {
  border-right: 2px solid #1a2669;
}
.dropdown {
  display: inline-block;
}
.navbar-toggler:focus {
  box-shadow: none;
}
@media (max-width: 2000px) {
  .navbar {
    display: none;
  }
}
@media (max-width: 992px) {
  .brand {
    display: none;
  }
}
@media (max-width: 765px) {
  .navbar {
    display: inline-block;
    width: 100%;
    direction: rtl;
  }
  .icons {
    display: none;
  }
  .NavBar {
    padding: 2vh 1vh;
  }
  .v-sidebar-menu,
  ul.vsm--menu,
  .vsm_expanded {
    width: 100%;
  }
  .navbar-nav {
    padding: 0;
  }
}
</style>
