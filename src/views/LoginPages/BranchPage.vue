<template>
  <div class="branch">
    <div class="row">
      <div class="col-xl-4 col-lg-8 logo text-center">
        <img src="../../assets/logoo.png" />
        <h6>صالون ذقن &amp; شعر</h6>
        <h5>اختر الفرع لدخول عالمك</h5>
        <div class="card">
          <router-link to="/ControlBoard"><h4>صالون شعر & ذقن</h4></router-link>
          <h4>
            <router-link to="/ControlBoard"
              ><h4>صالون شعر & ذقن - الرياض-</h4></router-link
            >
          </h4>
        </div>
        <p>اكتشف مزايا حسابك الشخصي <br />وقم بإدارة مواعيدك بكل سهولة</p>
      </div>
      <div class="col-xl-8 logo-img">
        <img src="../../assets/two.png" />
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "BranchPage",
};
</script>

<style scoped>
.row {
  margin: 0;
}
.branch {
  direction: rtl;
}
.logo {
  border-radius: 0 8px 8px 0px;
  box-shadow: 0px 0px 50px 0px #00000040;
  height: 100vh;
}
.branch h6 {
  color: #1a2669;
}
.branch h5 {
  color: #3f51b5;
  margin: 5vh 0 10vh;
}

.branch .card {
  border: 1.01px solid #0e36d7;
  padding: 4vh 2vh;
  color: #1a2669;
  margin-bottom: 5vh;
}
.branch .card a h4 {
  display: inline-block;
  margin-bottom: 3vh;
  padding: 1vh;
  color: #1a2669;
  text-decoration: none;
}
.branch .card a:hover {
  border-radius: 8px;
  background: #ebedf7;
  cursor: pointer;
}
.branch p {
  color: #3f51b5;
  font-weight: 400;
  font-size: 2.5vh;
}
.branch .logo-img {
  margin: auto;
  text-align: center;
}
.branch .logo-img img {
  width: 65%;
}
.branch .logo-img div span:last-of-type {
  display: inline-block;
  width: 6vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  margin-right: 1vh;
}
.branch .logo-img div span:first-of-type {
  display: inline-block;
  width: 1vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  opacity: 0.5;
}
.branch .logo-img div span:nth-of-type(2) {
  display: inline-block;
  width: 3vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  opacity: 0.5;
  margin-right: 1vh;
}
@media (max-width: 1200px) {
  .logo-img {
    display: none;
  }
  .logo {
    margin: auto;
  }
}
</style>
