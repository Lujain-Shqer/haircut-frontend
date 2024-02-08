<template>
  <div class="updateProviders">
    <div class="container">
      <h4>مقدمو الخدمات العامة</h4>
      <p>
        مقدمو الخدمات العامة هم الأشخاص أو الكيانات التي يقدمون خدمات للجمهور أو
        المؤسسات بدون تخصيص معين وعلى نطاق عام. هؤلاء المقدمون يشملون مجموعة
        متنوعة من القطاعات
      </p>
      <div class="update-info-client">
        <h6>تعديل بيانات مقدم الخدمة</h6>
        <form @submit="updateProvider" class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder=" اسم "
              v-model="provider_info.name"
            />
          </div>
          <div class="col-md-12">
            <span>هل مقدم الخدمة خاضع للضريبة:</span>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="provider_info.tax_state"
            />
          </div>
          <div class="col-md-12">
            <label>الرقم الضريبي</label>
            <input
              type="text"
              placeholder=" الرقم الضريبي "
              :disabled="isDisabled"
              v-model="provider_info.tax_number"
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
            تعديل بيانات مقدم الخدمة
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddProviders",
  params: ["id"],
  data() {
    return {
      provider_info: {
        name: "",
        tax_state: 0,
        tax_number: "",
      },
      isLoading: false,
      errors: [],
    };
  },
  computed: {
    isDisabled() {
      return (
        this.provider_info.tax_state === 0 ||
        this.provider_info.tax_state === false
      );
    },
  },
  watch: {
    isDisabled(newVal) {
      if (newVal) {
        this.provider_info.tax_number = "";
      }
    },
  },
  methods: {
    updateProvider(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch("http://127.0.0.1:8001/api/provider/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.provider_info),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          const fromPage = this.$route.query.from;
          const id = this.$route.query.id;
          if (fromPage === "AddTaxable") {
            this.$router.push({ name: "AddTaxable" });
          } else if (fromPage === "AddNotTaxable") {
            this.$router.push({ name: "AddNotTaxable" });
          } else if (fromPage === "UpdateTax") {
            this.$router.push({
              name: "UpdateTax",
              params: { id: id },
            });
          } else if (fromPage === "UpdateNotTax") {
            this.$router.push({
              name: "UpdateNotTax",
              params: { id: id },
            });
          } else {
            this.$router.push({ name: "ServicesProviders" });
          }

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
      Object.keys(this.provider_info).forEach((key) => {
        if (this.provider_info[key] === "") {
          delete this.provider_info[key];
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
.updateProviders {
  direction: rtl;
  width: 77%;
}
.updateProviders h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateProviders p {
  color: #1a2669;
  font-weight: 400;
}
.updateProviders .update-info-client {
  margin: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateProviders .update-info-client form div:nth-child(2) {
  margin: 3vh 0;
}
.updateProviders h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateProviders label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.updateProviders input[type="text"] {
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.updateProviders input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}
.updateProviders input[type="text"]:focus {
  border: 1px solid #1a2669;
}
.updateProviders form span {
  font-weight: 600;
  color: #1a2669;
}

.updateProviders button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  padding: 1vh 2vh;
  margin: auto;
  margin-top: 5vh;
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
  .updateProviders input[type="text"] {
    width: 100%;
  }
  .updateProviders {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateProviders {
    width: 100%;
  }
}
</style>
