<!-- <template>
  <div id="mySidebar" class="sidebar">
    <img class="logoo" src="../assets/logoo.png" />
    <h5>صالون ذقن &amp; شعر</h5>
    <div class="active link">
      <img src="../assets/3.png" />
      <router-link to="/ControlBoard">لوحة التحكم</router-link>
    </div>
    <div class="link">
      <img src="../assets/1.png" />
      <router-link to="/PointOfSales">نقطة البيع</router-link>
    </div>
    <div class="link">
      <img src="../assets/2.png" />
      <router-link to="/ClientPage">العملاء</router-link>
    </div>
    <div class="dropdown">
      <div class="menu" data-bs-toggle="dropdown">
        <img src="../assets/2.png" />
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          aria-expanded="false"
        >
          الموظفون
        </button>
      </div>
      <div class="ul">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li>
            <router-link to="/EmployeeCommissions"
              >عمولات الموظفين
            </router-link>
          </li>
          <li>
            <router-link to="/EmployeeReport2">تقرير الموظف (مفصل)</router-link>
          </li>
          <li>
            <router-link to="/SalafiyatDiscounts"
              >تقرير الخصومات والسلفيات</router-link
            >
          </li>
          <li>
            <router-link to="/EmployeeSalary">تقرير مسير الرواتب</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="dropdown">
      <div class="menu" data-bs-toggle="dropdown">
        <img src="../assets/2.png" />
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton3"
          aria-expanded="false"
        >
          الحجوزات
        </button>
      </div>
      <div class="ul">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <li>
            <router-link to="/">الحجوزات</router-link>
          </li>
          <li>
            <router-link to="/SalonAppointments">مواعيد الصالون</router-link>
          </li>
          <li>
            <router-link to="/DisabledAppoinments"
              >المواعيد المعطلة</router-link
            >
          </li>
          <li>
            <router-link to="/NewReservation1">انشاء حجز جديد</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="dropdown">
      <div class="menu" data-bs-toggle="dropdown">
        <img src="../assets/4.png" />
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton3"
          aria-expanded="false"
        >
          المعاملات المالية
        </button>
      </div>
      <div class="ul">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <li>
            <a class="dropdown-item" href="#"> المواعيد المعطلة</a>
            <ul class="dropdown-submenu">
              <li>
                <a class="dropdown-item" href="#"> المواعيد المعطلة</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">إنشاء حجز جديد</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="dropdown-item" href="#">إنشاء حجز جديد</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="dropdown">
      <div class="menu" data-bs-toggle="dropdown">
        <img src="../assets/4.png" />
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          aria-expanded="false"
        >
          المنتجات النثرية
        </button>
      </div>
      <div class="ul">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li>
            <router-link to="/SundryProducts">المنتجات النثرية</router-link>
          </li>
          <li>
            <router-link to="/GeneralExpenses"
              >بنود المصاريف العمومية</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {},
};
</script>
<style scoped>
.dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu.show {
  display: contents;
  /* position: absolute;
  left: 100%;
  top: -7px; */
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}

.sidebar {
  padding: 2vh;
  direction: rtl;
  width: 20%;
  height: 100%;
  transition: 0.5s;
  box-shadow: 0px 0px 8px 0px #00000040;
  border-left: 1.18px solid #f5f5f5;
  background: #ebedf7;
  position: absolute;
  top: 24px;
  right: 0;
  position: fixed;
  border-radius: 7px;
}
.sidebar .logoo {
  width: 80%;
}
.sidebar h5 {
  color: #1a2669;
  font-size: 2vh;
  margin-right: 4vh;
}
.sidebar .link,
.sidebar .dropdown {
  margin: 2vh 0;
  font-weight: 500;
  position: relative;
}
.sidebar .link:hover,
.sidebar .link.active,
.sidebar .menu:hover {
  background: #757de84f;
  border-radius: 7px 0px 0px 7px;
  padding: 1vh;
  color: #3f51b5;
  border-right: 3px solid #3f51b5;
  width: 100%;
}

.sidebar .dropdown a:hover {
  border-right: 0;
}

.sidebar .dropdown-toggle,
.sidebar .dropdown-toggle:focus {
  background: no-repeat;
  border: 0;
  color: #1a2669;
  outline: none;
}
/* .dropdown-toggle {
  background: transparent;
  border: 0;
  color: #2a3676;
} */
.dropdown-menu.show {
  display: contents;
  text-align: inherit;
}
.sidebar a {
  display: inline;
  padding: 2vh;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
  color: #1a2669;
  font-weight: 400;
}
.sidebar .dropdown a {
  color: #747474;
  font-size: 2vmin;
  display: block;
  width: 90%;
  padding: 1vh;
  margin: 5px 0;
  margin-right: 10%;
}

.sidebar .dropdown .ul {
  margin-right: 15%;
  border-right: 2px solid #757de8;
}
.sidebar .dropdown a:hover {
  background: #757de84f;
  border-radius: 8px;
  padding: 1vh;
  color: #3f51b5;
}
.sidebar svg {
  color: #1a2669;
  background: #fff;
  font-size: 15px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px #14141412;

  box-shadow: 0px 4px 6px -1px #1414141f;
}
.dropdown-toggle::after {
  position: absolute;
  left: 0;
  top: 20px;
}
@media (max-width: 991px) {
  .sidebar {
    width: 30%;
  }
  .container {
    width: 70%;
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
}
</style> -->

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
          title: "الموظفين",
          icon: {
            element: "fa",
            attributes: {
              icon: "fa-user-friends",
            },
          },
          child: [
            {
              href: "EmployeeCommissions",
              title: "عمولات الموظفين ",
            },
            {
              href: "EmployeeReport2",
              title: "تقرير الموظف (مفصل)",
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

<style>
.sidebar {
  width: 20%;
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
  padding: 2vh;
  text-align: center;
}
.sidebar .logoo {
  width: 90%;
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
  margin-right: 5vh;
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
/* .dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu.show {
  display: contents;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}
.sidebar {
  padding: 2vh;
  direction: rtl;
  width: 20%;
  height: 100%;
  transition: 0.5s;
  box-shadow: 0px 0px 8px 0px #00000040;
  border-left: 1.18px solid #f5f5f5;
  background: #ebedf7;
  position: absolute;
  top: 24px;
  right: 0;
  position: fixed;
  border-radius: 7px;
}
.sidebar .logoo {
  width: 80%;
}
.sidebar h5 {
  color: #1a2669;
  font-size: 2vh;
  margin-right: 4vh;
}
.sidebar .link,
.sidebar .dropdown {
  margin: 2vh 0;
  font-weight: 500;
  position: relative;
}
.sidebar .link:hover,
.sidebar .link.active,
.sidebar .menu:hover {
  background: #757de84f;
  border-radius: 7px 0px 0px 7px;
  padding: 1vh;
  color: #3f51b5;
  border-right: 3px solid #3f51b5;
  width: 100%;
}

.sidebar .dropdown a:hover {
  border-right: 0;
}

.sidebar .dropdown-toggle,
.sidebar .dropdown-toggle:focus {
  background: no-repeat;
  border: 0;
  color: #1a2669;
  outline: none;
}
.dropdown-toggle {
  background: transparent;
  border: 0;
  color: #2a3676;
}
.dropdown-menu.show {
  display: contents;
  text-align: inherit;
}
.sidebar a {
  display: inline;
  padding: 2vh;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
  color: #1a2669;
  font-weight: 400;
}
.sidebar .dropdown a {
  color: #747474;
  font-size: 2vmin;
  display: block;
  width: 90%;
  padding: 1vh;
  margin: 5px 0;
  margin-right: 10%;
}

.sidebar .dropdown .ul {
  margin-right: 15%;
  border-right: 2px solid #757de8;
}
.sidebar .dropdown a:hover {
  background: #757de84f;
  border-radius: 8px;
  padding: 1vh;
  color: #3f51b5;
}
.sidebar svg {
  color: #1a2669;
  background: #fff;
  font-size: 15px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px #14141412;

  box-shadow: 0px 4px 6px -1px #1414141f;
}
.dropdown-toggle::after {
  position: absolute;
  left: 0;
  top: 20px;
}
@media (max-width: 991px) {
  .sidebar {
    width: 30%;
  }
  .container {
    width: 70%;
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
} */
</style>
