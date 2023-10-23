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

    <!-- <nav class="navbar navbar-expand-lg col-md-12">
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
                    <router-link to="/EmployeeReport2"
                      >تقرير الموظف (مفصل)</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/SalafiyatDiscounts"
                      >تقرير الخصومات والسلفيات</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/EmployeeSalary"
                      >تقرير مسير الرواتب</router-link
                    >
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
                    <router-link to="/SalonAppointments"
                      >مواعيد الصالون</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/DisabledAppoinments"
                      >المواعيد المعطلة</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/NewReservation1"
                      >انشاء حجز جديد</router-link
                    >
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
                  المعاملات المالية
                </button>
              </div>
              <div class="ul">
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <select>
                    <option>njkgb</option>
                    <option>njkgb</option>
                    <option>njkgb</option>
                  </select>
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
                    <router-link to="/SundryProducts"
                      >المنتجات النثرية</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/GeneralExpenses"
                      >بنود المصاريف العمومية</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <li class="nav-item">
              <fa icon="message" />
              <fa icon="bell" />
              <span>ENG</span>
              <fa icon="earth" />
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <div class="brand col-lg-4">
      <span>صالون ذقن &amp; شعر</span>
      <img src="../assets/logoo.png" />
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  methods: {},
  mounted() {},
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
nav .dropdown ul:first-of-type{
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
nav .dropdown  .ul-bell ul{
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
/* .navbar-toggler {
  margin-bottom: 2vh;
  outline: none !important;
}
ul {
  padding: 0;
} */
/* li.active {
  background: #757de84f;
  border-radius: 7px 0px 0px 7px;
  padding: 1vh;
  color: #3f51b5;
  border-right: 3px solid #3f51b5;
} */
/* .navbar-toggler:focus {
  outline: none;
  border: 1px solid transparent;
} */
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
}
</style>
