<template>
  <div class="sigin">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-8 logo text-center">
          <img src="../assets/logoo.png" />
          <h5>صالون ذقن &amp; شعر</h5>
          <h3 class="">إنشاء حساب جديد</h3>
          <form class="input-icons">
            <label>اسم المستخدم</label>
            <div class="input-container">
              <input
                class="input-field"
                type="text"
                placeholder="اسم المستخدم"
              />
              <fa icon="user" />
            </div>
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
            <label>تأكيد كلمة المرور</label>
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
          <p>
            لديك حساب بالفعل ؟
            <router-link to="/login">تسجيل الدخول</router-link>
          </p>
        </div>
        <div class="col-xl-8 logo-img">
          <img src="../assets/four.png" />
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
.row {
  margin: 0;
}
.sigin .logo-img {
  margin: auto;
  text-align: center;
}
.sigin .logo-img img {
  width: 75%;
}
.sigin {
  direction: rtl;
}
.logo {
  box-shadow: 0px 0px 50px 0px #00000040;
  margin-top: 2vh;
}
.sigin h3 {
  color: #3f51b5;
  margin: 5vh 0;
}
.sigin label {
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
.sigin input {
  width: 95%;
  border-radius: 8px;
  padding: 1vh 2vh;
  border: 0;
}
.sigin button.signin {
  background: #3f51b5;
  padding: 1vh;
  width: 100%;
  margin: 2vh 0;
}
.sigin button.signin a {
  color: #fff;
  text-decoration: none;
}
p {
  font-weight: 500;
  color: #1a2669;
}
p a {
  text-decoration: none;
  color: #1a2669;
}
.sigin svg {
  color: #3f51b5;
}
/* .sigin button.signup {
  background: white;
  color: #0e36d7;
  padding: 1vh;
  width: 100%;
  margin: 3vh 0;
  border: 2px solid #0e36d7;
} */

/* .login .ic {
    display: inline;
    width: 5%;
    background: #3f51b5;
  } */
</style>
