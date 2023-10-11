<template>
  <div id="mySidebar" class="sidebar">
    <img src="../assets/logoo.png" />
    <h5>صالون ذقن &amp; شعر</h5>
    <div class="active link">
      <fa icon="earth" />
      <a href="#">لوحة التحكم</a>
    </div>
    <div class="link">
      <fa icon="earth" />
      <a href="#">نقطة البيع</a>
    </div>
    <div class="link">
      <fa icon="earth" />
      <a href="#">العملاء</a>
    </div>
    <div class="">
      <fa icon="earth" />
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        الحجوزات
      </button>
      <div class="dropdown">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item" href="#">مواعيد الصالون</a></li>
          <li>
            <a class="dropdown-item" href="#"> المواعيد المعطلة</a>
          </li>
          <li><a class="dropdown-item" href="#">إنشاء حجز جديد</a></li>
        </ul>
      </div>
    </div>
    <div class="">
      <span class="dropdown">
        <fa icon="earth" />
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          الحجوزات
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item" href="#">مواعيد الصالون</a></li>
          <li>
            <a class="dropdown-item" href="#"> المواعيد المعطلة</a>
          </li>
          <li><a class="dropdown-item" href="#">إنشاء حجز جديد</a></li>
        </ul>
      </span>
    </div>
    <div href="#">
      <div class="">
        <span class="dropdown">
          <fa icon="earth" />
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            الحجوزات
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#">مواعيد الصالون</a></li>
            <li>
              <a class="dropdown-item" href="#"> المواعيد المعطلة</a>
            </li>
            <li><a class="dropdown-item" href="#">إنشاء حجز جديد</a></li>
          </ul>
        </span>
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
.sidebar img {
  width: 80%;
}
.sidebar h5 {
  color: #1a2669;
  font-size: 2vh;
  margin-right: 4vh;
}
.sidebar div {
  margin: 2vh 0;
}
/* .sidebar div:hover,
.sidebar .active {
  background: #757de84f;
  border-radius: 7px 0px 0px 7px;
  padding: 1vh;
  color: #3f51b5;
  border-right: 3px solid #3f51b5;
}
.sidebar .dropdown-toggle,
.sidebar .dropdown-toggle:focus {
  background: no-repeat;
  border: 0;
  color: #1a2669;
  outline: none;
}
.dropdown-toggle::after {
  margin-right: 10vh;
}
.dropdown-menu {
  background: no-repeat;
  border: 0;
  width: 100%;
  margin: auto;
  position: absolute;
  inset: 0;
  margin: 0px;
  transform: translate3d(0px, 33.6px, 0px);
}
.dropdown-menu.show {
  display: contents;
  text-align: inherit;
}
.dropdown-toggle:active {
  background: no-repeat;
  border: 0;
} */

/* The sidebar links */
.sidebar .link:hover,
.sidebar .link.active,
.dropdown {
  background: #757de84f;
  border-radius: 7px 0px 0px 7px;
  padding: 1vh;
  color: #3f51b5;
  border-right: 3px solid #3f51b5;
  width: 100%;
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
.sidebar svg {
  color: #1a2669;
  background: #fff;
  font-size: 15px;
  padding: 5px;
  border-radius: 8px;
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
