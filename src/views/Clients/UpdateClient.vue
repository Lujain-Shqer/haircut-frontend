<template>
  <div class="updateClient">
    <div class="container">
      <h4>العملاء</h4>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="update-info-client">
        <h6>تحديث بيانات العميل</h6>
        <form @submit="updateClient" class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input type="text" v-model="client_info.name" />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>هاتف العميل</label>
            <input type="text" v-model="client_info.phone_number" />
          </div>
          <div v-if="errors.length > 0">
            <ul style="margin-top: 30px">
              <li
                class="error-mes"
                dir="rtl"
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button :disabled="isLoading" type="submit" class="btn">
            تحديث البيانات
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateClient",
  props: ["id"],
  data() {
    return {
      client_info: {
        name: "",
        phone_number: "",
      },
      isLoading: false,
      errors: [],
    };
  },
  methods: {
    updateClient(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch("https://www.setrex.net/haircut/backend/public/api/customer/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.client_info),
      })
        .then((response) => {
          this.isLoading = false;
          if (response.ok) {
            this.$router.push({ name: "ClientPage" });
            // console.log(this.id);
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
        })
        .catch((error) => {
          console.error("Error updating client:", error);
        });
    },
    deleteUnwantedInfo() {
      Object.keys(this.client_info).forEach((key) => {
        if (this.client_info[key] === "") {
          delete this.client_info[key];
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
.updateClient {
  direction: rtl;
  width: 77%;
}
.updateClient h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateClient p {
  color: #1a2669;
  font-weight: 400;
}
.updateClient .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateClient h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateClient label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.updateClient input {
  border: 1px solid #1a2669;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.updateClient input:focus {
  border: 1px solid #1a2669;
}
.updateClient button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
@media (max-width: 991px) {
  .updateClient input {
    width: 100%;
  }
  .updateClient button {
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateClient {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateClient {
    width: 100%;
  }
}
</style>
