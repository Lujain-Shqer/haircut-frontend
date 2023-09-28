<template>
  <div class="branch">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-8 logo text-center">
          <img src="../assets/logoo.png" />
          <h6>صالون ذقن &amp; شعر</h6>
          <h3 class="">اختر الفرع لدخول عالمك</h3>
          <div class="card">
            <h5>صالون شعر & ذقن</h5>
            <h5>صالون شعر & ذقن - الرياض-</h5>
          </div>
          <p>اكتشف مزايا حسابك الشخصي <br />وقم بإدارة مواعيدك بكل سهولة</p>
        </div>
        <div class="col-xl-8 logo-img">
          <img src="../assets/two.png" />
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
.branch .logo-img {
  margin: auto;
  text-align: center;
}
.branch .logo-img img {
  width: 75%;
}
.branch {
  direction: rtl;
}
.logo {
  box-shadow: 0px 0px 50px 0px #00000040;
  margin-top: 2vh;
}
.branch h3 {
  color: #3f51b5;
  margin: 5vh 0;
}
.branch label {
  display: block;
  text-align: start;
  color: #1a2669;
  font-weight: 700;
  margin: 5vh 0 1vh;
}
.branch .card {
  border: 1.01px solid #0e36d7;
  padding: 1vh 0;
  color: #1a2669;
  font-weight: 500;
  margin-bottom: 5vh;
}
.branch p {
  color: #3f51b5;
  font-weight: 400;
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
