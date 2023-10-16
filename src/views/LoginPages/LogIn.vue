<template>
  <div class="login">
    <div class="row">
      <div class="col-xl-4 col-lg-8 logo text-center">
        <img src="../../assets/logoo.png" />
        <h6>صالون ذقن &amp; شعر</h6>
        <h4 class="">تسجيل الدخول إلى حسابك</h4>
        <form class="input-icons">
          <label>رقم الجوال</label>
          <div class="input-container">
            <input
              class="input-field"
              type="text"
              placeholder="+970 -596 58000"
            />
            <fa icon="phone" />
          </div>
          <label>كلمة المرور</label>
          <div class="input-container">
            <input
              class="input-field"
              type="text"
              placeholder="***************"
            />
            <fa icon="lock" />
          </div>
          <button class="btn btn-block signin">
            <router-link to="/control">تسجيل الدخول</router-link>
          </button>
        </form>
        <span></span>
        <span>او</span>
        <span></span>
        <button class="btn btn-block signup">
          <router-link to="/signin"> إنشاء حساب جديد</router-link>
        </button>
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
  name: "LogIn",
};
</script>

<style scoped>
.row {
  margin: 0;
  height: 100vh;
}

.login {
  direction: rtl;
}
.logo {
  box-shadow: 0px 0px 50px 0px #00000040;
  border-radius: 0 8px 8px 0px;
}
.login h4 {
  color: #3f51b5;
  margin: 5vh 0;
}
.login label {
  display: block;
  text-align: start;
  color: #1a2669;
  font-weight: 700;
  margin: 5vh 0 2vh;
}
.input-container {
  border: 1px solid #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
}
.login input {
  width: 90%;
  border-radius: 8px;
  padding: 1vh 2vh;
  border: 0;
}
.login button.signin {
  background: #3f51b5;
  padding: 1vh;
  width: 100%;
  margin: 3vh 0;
}
.login button.signin a {
  color: #fff;
  text-decoration: none;
}
.login button.signup {
  background: white;
  padding: 1vh;
  width: 100%;
  margin: 3vh 0;
  border: 2px solid #0e36d7;
}
.login button.signup a {
  color: #0e36d7;
  text-decoration: none;
}
.login svg {
  color: #3f51b5;
}
.login .logo span {
  color: #c2c2c2;
}
.login .logo span:first-of-type,
.login .logo span:last-of-type {
  display: inline-block;
  width: 42%;
  height: 0.1px;
  background: #c2c2c2;
}
.login .logo span:first-of-type {
  margin-left: 2%;
}
.login .logo span:last-of-type {
  margin-right: 2%;
}
.login .logo-img {
  margin: auto;
  text-align: center;
}
.login .logo-img img {
  width: 60%;
}
.login .logo-img div span:last-of-type {
  display: inline-block;
  width: 6vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  margin-right: 1vh;
}
.login .logo-img div span:first-of-type {
  display: inline-block;
  width: 1vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  opacity: 0.5;
}
.login .logo-img div span:nth-of-type(2) {
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
