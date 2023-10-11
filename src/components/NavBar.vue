<template>
  <nav class="row NavBar">
    <div class="icons col-md-6">
      <fa icon="message" />
      <fa icon="bell" />
      <span>ENG</span>
      <fa icon="earth" />
    </div>
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
            <li class="nav-item active">
              <a class="nav-link" href="#">لوحة التحكم</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">الموظفين</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">العملاء</a>
            </li>
            <li class="nav-item">
              <fa icon="message" />
              <fa icon="bell" />
              <span>ENG</span>
              <fa icon="earth" />
            </li>
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
nav svg {
  color: #1a2669;
  padding-right: 4vh;
}
nav span {
  font-weight: 400;
  padding: 1vh;
  color: #1a2669;
}
nav .brand img {
  width: 25%;
}
nav span:first-child {
  border-right: 2px solid #1a2669;
}
.navbar-toggler {
  margin-bottom: 2vh;
  outline: none !important;
}
ul {
  padding: 0;
}
li.active {
  background: #757de84f;
  border-radius: 7px 0px 0px 7px;
  padding: 1vh;
  color: #3f51b5;
  border-right: 3px solid #3f51b5;
}
.navbar-toggler:focus {
  outline: none;
  border: 1px solid transparent;
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
}
</style>
