<template>
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
        <ul class="dropdown-menu ll" aria-labelledby="dropdownMenuButton3">
          <li>
            <a class="dropdown-item" href="#"> المواعيد المعطلة</a>
          </li>
          <li><a class="dropdown-item" href="#">إنشاء حجز جديد</a></li>
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
</style>
