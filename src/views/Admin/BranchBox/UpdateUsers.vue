<template>
  <div class="updateUser">
    <div class="container">
      <h4>المستخدمين</h4>
      <p>الأشخاص يكون ضمن عملاء الخاص في صالون الحلاقة</p>
      <div class="update-info-client">
        <h6>تعديل بيانات المستخدم</h6>
        <form @submit="updateUser" class="row">
          <div class="col-md-6 col-sm-12">
            <label>الاسم الأول</label>
            <input
              type="text"
              placeholder=" الاسم الأول "
              v-model="user_info.first_name"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>الاسم الأخير </label>
            <input
              type="text"
              placeholder=" الاسم الأخير  "
              v-model="user_info.last_name"
            />
          </div>
          <div class="col-md-12">
            <label>رقم الجوال</label>
            <input
              type="text"
              placeholder=" رقم الجوال"
              v-model="user_info.phone_number"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>كلمة المرور </label>
            <input
              type="password"
              placeholder=" كلمة المرور  "
              v-model="user_info.password"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> تأكيد كلمة المرور </label>
            <input
              type="password"
              placeholder=" تأكيد كلمة المرور  "
              v-model="user_info.confirm_password"
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
          <button :disabled="isLoading" class="btn">
            تعديل بيانات المستخدم
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateUser",
  props: ["id"],
  data() {
    return {
      user_info: {
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        confirm_password: "",
      },
      isLoading: false,
      errors: [],
    };
  },
  methods: {
    updateUser(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/barber/" +
          this.$route.params.id,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.user_info),
        }
      ).then((response) => {
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
    deleteUnwantedInfo() {
      Object.keys(this.user_info).forEach((key) => {
        if (this.user_info[key] === "") {
          delete this.user_info[key];
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
.updateUser {
  direction: rtl;
  width: 77%;
}
.updateUser h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateUser p {
  color: #1a2669;
  font-weight: 400;
}
.updateUser .update-info-client {
  margin: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateUser h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateUser label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.updateUser input {
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
.updateUser input:focus {
  border: 1px solid #1a2669;
}
.updateUser form span {
  font-weight: 600;
  color: #1a2669;
}

.updateUser button {
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
  .updateUser input {
    width: 100%;
  }
  .updateUser {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateUser {
    width: 100%;
  }
}
</style>
