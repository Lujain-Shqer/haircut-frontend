<template>
  <div class="sigin">
    <div class="row">
      <div class="col-xl-4 col-lg-8 logo text-center">
        <img src="../../assets/logoo.png" />
        <h6>صالون ذقن &amp; شعر</h6>
        <h5 class="">إنشاء حساب جديد</h5>
        <form class="input-icons">
          <label>اسم المستخدم</label>
          <div class="input-container">
            <input class="input-field" type="text" placeholder="اسم المستخدم" />
            <span class="input-icon"><fa icon="user" /></span>
          </div>
          <label>رقم الجوال</label>
          <div class="input-container">
            <input
              class="input-field"
              type="text"
              placeholder="+970 -596 58000"
            />
            <span class="input-icon"><fa icon="phone" /></span>
          </div>
          <label>كلمة المرور</label>
          <div class="input-container">
            <input class="input-field" type="text" placeholder="xxxxxxxxxx" />
            <span class="input-icon"> <fa icon="lock" /> </span>
          </div>
          <label>تأكيد كلمة المرور</label>
          <div class="input-container">
            <input class="input-field" type="text" placeholder="xxxxxxxxxx" />
            <span class="input-icon"><fa icon="lock" /></span>
          </div>

          <router-link to="/branch"
            ><button class="btn btn-block signin">
              تسجيل الدخول
            </button></router-link
          >
        </form>
        <div class="choose">
          <span></span>
          <span>او</span>
          <span></span>
        </div>
        <p>
          لديك حساب بالفعل ؟
          <router-link to="/login">تسجيل الدخول</router-link>
        </p>
      </div>
      <div class="col-xl-8 logo-img">
        <img src="../../assets/four.png" />
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
  name: "SignIn",
};
</script>

<style scoped>
.row {
  margin: 0;
  height: 100vh;
}

.sigin {
  direction: rtl;
}
.logo {
  box-shadow: 0px 0px 50px 0px #00000040;
  border-radius: 0 8px 8px 0px;
}
.sigin h5 {
  color: #3f51b5;
  margin: 4vh 0;
}
.sigin h6 {
  color: #1a2669;
}
.sigin label {
  display: block;
  text-align: start;
  color: #1a2669;
  font-weight: 600;
  margin: 3vh 0 1vh;
}
.input-container {
  border: 1px solid #c8c9cc;
  border-radius: 8px;
  width: 100%;
}
.sigin input {
  width: 90%;
  border-radius: 8px;
  padding: 1vh;
  border: 0;
}
.sigin .input-icon {
  display: inline-block;
  width: 10%;
  background: #3f51b5;
  color: #fff;
  padding: 1vh;
  border-radius: 8px 0 0 8px;
  border: 1px solid #3f51b5;
}
.sigin button.signin {
  background: #3f51b5;
  padding: 1vh;
  width: 100%;
  margin: 2vh 0;
  color: #fff;
}
.sigin button.signin a {
  text-decoration: none;
}
.sigin .logo .choose span {
  color: #c2c2c2;
}
.sigin .logo .choose span:first-of-type,
.sigin .logo .choose span:last-of-type {
  display: inline-block;
  width: 42%;
  height: 0.1px;
  background: #c2c2c2;
}
.sigin .logo .choose span:first-of-type {
  margin-left: 2%;
}
.sigin .logo .choose span:last-of-type {
  margin-right: 2%;
}
p {
  font-weight: 400;
  color: #1a2669;
  margin-top: 2vh;
}
p a {
  color: #1a2669;
}

.sigin .logo-img {
  margin: auto;
  text-align: center;
}
.sigin .logo-img img {
  width: 50%;
}
.sigin .logo-img div span:last-of-type {
  display: inline-block;
  width: 6vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  margin-right: 1vh;
}
.sigin .logo-img div span:first-of-type {
  display: inline-block;
  width: 1vh;
  height: 1vh;
  background: #3f51b5;
  border-radius: 27px;
  opacity: 0.5;
}
.sigin .logo-img div span:nth-of-type(2) {
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
