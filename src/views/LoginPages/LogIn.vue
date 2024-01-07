<template>
  <div class="login">
    <div class="row">
      <div class="col-xl-4 col-lg-8 logo text-center">
        <img src="../../assets/logoo.png" />
        <h6>صالون ذقن &amp; شعر</h6>
        <h4 class="">تسجيل الدخول إلى حسابك</h4>
        <form @submit="login" method="post" class="input-icons">
          <label>رقم الجوال</label>
          <div class="input-container">
            <input
              class="input-field"
              type="text"
              placeholder="+970 -596 58000"
              v-model="user_info.phone_number"
              required
            />
            <span class="input-icon"><fa icon="phone" /></span>
          </div>
          <label>كلمة المرور</label>
          <div class="input-container">
            <input
              class="input-field"
              type="password"
              placeholder="***************"
              v-model="user_info.password"
              required
            />
            <span class="input-icon"> <fa icon="lock" /> </span>
          </div>
          <div class="error-message" v-if="errorMessage">
            {{ errorMessage }}
          </div>
          <button
            :disabled="isLoading"
            type="submit"
            class="btn btn-block signin"
          >
            تسجيل الدخول
          </button>
          <!-- <router-link to="/branch"
            ></router-link
          > -->
        </form>
        <div class="choose">
          <span></span>
          <span>او</span>
          <span></span>
        </div>

        <router-link to="/signup">
          <button class="btn btn-block signup">
            إنشاء حساب جديد
          </button></router-link
        >
      </div>
      <div class="col-xl-8 logo-img">
        <img src="../../assets/Login/branch.png" />
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
// import { inject } from "vue";

export default {
  name: "LogIn",
  data() {
    return {
      user_info: {
        phone_number: "",
        password: "",
      },
      errorMessage: "",
      isLoading: false,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      this.isLoading = true;
      // const hostName = inject("hostName");
      fetch("https://www.setrex.net/haircut/backend/public/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: this.user_info.phone_number,
          password: this.user_info.password,
        }),
      })
        .then((response) => {
          this.isLoading = false;
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("فشل تسجيل الدخول (المعلومات المدخلة خاطئة)");
          }
        })
        .then((data) => {
          localStorage.setItem("access_token", data.access_token);
          if (data.role == 1) {
            this.$router.push("/branch");
          } else {
            localStorage.setItem("branch_id", data.branch_id);
            this.$router.push("/ControlBoard");
          }
          // console.log(localStorage.getItem("access_token"));
          // console.log(localStorage.getItem("branch_id"));
        })
        .catch((error) => {
          this.errorMessage = error.message;
          setTimeout(() => {
            this.errorMessage = "";
          }, 10000);
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: none !important;
}
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
.login h6 {
  color: #1a2669;
}
.login h4 {
  color: #3f51b5;
  margin: 3vh 0;
  font-size: 3vmin;
}
.login label {
  display: block;
  text-align: start;
  color: #1a2669;
  font-weight: 600;
  margin: 2vh 0;
}
.input-container {
  border: 1px solid #c8c9cc;
  border-radius: 8px;
  width: 100%;
}
.login input {
  width: 90%;
  border-radius: 8px;
  padding: 1vh;
  border: 0;
  outline: none;
}
.login .input-icon {
  display: inline-block;
  width: 10%;
  background: #3f51b5;
  color: #fff;
  padding: 1vh;
  border-radius: 8px 0 0 8px;
  border: 1px solid #3f51b5;
}

.login button.signin {
  background: #3f51b5;
  padding: 1vh;
  width: 100%;
  margin: 3vh 0;
  color: #fff;
}
.login button.signin a {
  color: #fff;
  text-decoration: none;
}
.login button.signup {
  background: white;
  color: #0e36d7;
  padding: 1vh;
  width: 100%;
  margin: 3vh 0;
  border: 2px solid #0e36d7;
}
.login button.signup a {
  color: #0e36d7;
  text-decoration: none;
}
.login .logo .choose span {
  color: #c2c2c2;
}
.login .logo .choose span:first-of-type,
.login .logo .choose span:last-of-type {
  display: inline-block;
  width: 42%;
  height: 0.1px;
  background: #c2c2c2;
}
.login .logo .choose span:first-of-type {
  margin-left: 2%;
}
.login .logo .choose span:last-of-type {
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
.error-message {
  display: block;
  padding: 1vh;
  text-align: start;
  color: red;
}
@media (max-width: 1200px) {
  .logo-img {
    display: none;
  }
  .logo {
    margin: auto;
  }
}
@media (max-width: 765px) {
  .logo {
    margin: 0;
  }
}
</style>
