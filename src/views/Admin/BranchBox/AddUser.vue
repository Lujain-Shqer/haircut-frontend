<template>
  <div class="addUser">
    <div class="container">
      <h4>المستخدمين</h4>
      <p>الأشخاص يكون ضمن عملاء الخاص في صالون الحلاقة</p>
      <div class="update-info-client">
        <h6>مستخدم جديد</h6>
        <form @submit="addUser" class="row">
          <div class="col-md-6 col-sm-12">
            <label>الاسم الأول</label>
            <input
              type="text"
              placeholder=" الاسم الأول "
              required
              v-model="user_info.firstName"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>الاسم الأخير </label>
            <input
              type="text"
              placeholder=" الاسم الأخير  "
              required
              v-model="user_info.lastName"
            />
          </div>
          <div class="col-md-12">
            <label>رقم الجوال</label>
            <input
              type="text"
              placeholder=" رقم الجوال"
              required
              v-model="user_info.phoneNumber"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>كلمة المرور </label>
            <input
              type="password"
              placeholder=" كلمة المرور  "
              required
              v-model="user_info.password"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> تأكيد كلمة المرور </label>
            <input
              type="password"
              placeholder=" تأكيد كلمة المرور  "
              required
              v-model="user_info.confirmPassword"
            />
          </div>
          <div v-if="errors.length > 0">
            <ul>
              <li
                class="error-message"
                dir="rtl"
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button :disabled="isLoading" class="btn">إضافة مستخدم جديد</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddUser",
  data() {
    return {
      user_info: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      isLoading: false,
      errors: [],
    };
  },
  methods: {
    addUser(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("/https://www.setrex.net/haircut/backend/public/api/barber", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          first_name: this.user_info.firstName,
          last_name: this.user_info.lastName,
          phone_number: this.user_info.phoneNumber,
          password: this.user_info.password,
          confirm_password: this.user_info.confirmPassword,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "UsersPage" });
          return response.json();
        } else if (response.status === 400) {
          response.json().then((data) => {
            const errors = data.errors;
            if (errors) {
              if (this.errors.length > 0) {
                this.errors = [];
              }
              if (typeof errors === "string") {
                this.errors.push(errors);
              } else {
                Object.values(errors).forEach((errorMessages) => {
                  errorMessages.forEach((errorMessage) => {
                    this.errors.push(errorMessage);
                  });
                });
              }
              setTimeout(() => {
                this.errors = [];
              }, 10000);
            }
          });
        }
      });
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addUser {
  direction: rtl;
  width: 77%;
}
.addUser h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addUser p {
  color: #1a2669;
  font-weight: 400;
}
.addUser .update-info-client {
  margin: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addUser h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addUser label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.addUser input {
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.col-md-12 input {
  width: 35%;
}
.addUser input:focus {
  border: 1px solid #1a2669;
}
.addUser form span {
  font-weight: 600;
  color: #1a2669;
}

.addUser button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: 5vh auto;
  padding: 1vh 4vh;
}
.error-message {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
ul {
  margin-top: 30px;
}

@media (max-width: 991px) {
  .addUser input {
    width: 100%;
  }
  .addUser {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addUser {
    width: 100%;
  }
}
</style>
