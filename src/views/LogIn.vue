<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-8 logo text-center">
          <img src="../assets/logoo.png" />
          <h5>صالون ذقن &amp; شعر</h5>
          <h3 class="">تسجيل الدخول إلى حسابك</h3>
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
          <p>أو</p>
          <button class="btn btn-block signup">
            <router-link to="/signin"> إنشاء حساب جديد</router-link>
          </button>
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
  name: "LogIn",
};
</script>

<style scoped>
.row {
  margin: 0;
}
.login .logo-img {
  margin: auto;
  text-align: center;
}
.login .logo-img img {
  width: 75%;
}
.login {
  direction: rtl;
}
.logo {
  box-shadow: 0px 0px 50px 0px #00000040;
  margin-top: 2vh;
}
.login h3 {
  color: #3f51b5;
  margin: 5vh 0;
}
.login label {
  display: block;
  text-align: start;
  color: #1a2669;
  font-weight: 700;
  margin: 5vh 0 1vh;
}
.input-container {
  border: 1px solid #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
}
.login input {
  width: 95%;
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
  margin: 2vh 0;
  border: 2px solid #0e36d7;
}
.login button.signup a {
  color: #0e36d7;
  text-decoration: none;
}
.login svg {
  color: #3f51b5;
}

/* .login .ic {
  display: inline;
  width: 5%;
  background: #3f51b5;
} */
</style>
