<template>
  <div class="UpdateTax">
    <div class="container">
      <h4>المصاريف العمومية خاضعة للضريبة</h4>
      <p>
        يتم تضمينها في حساب الإيرادات الإجمالية للفرد أو الشركة لغرض حساب
        الضرائب عليها.
      </p>
      <div class="update-info-client">
        <h6>تعديل فاتورة مصاريف عمومية خاضعة للضريبة</h6>
        <form @submit="updateTax" class="row">
          <div class="col-lg-12">
            <label>البند</label>
            <select
              class="form-selec"
              aria-label="Default select example"
              v-model="taxes_info.term_id"
            >
              <option disabled selected value="">اختر البند</option>
              <option
                v-for="generalExpense in allGeneralExpenses"
                :key="generalExpense.id"
                :value="generalExpense.id"
              >
                {{ generalExpense.name }}
              </option>
            </select>
          </div>
          <div class="col-lg-12">
            <label>مقدم الخدمة</label>
            <select
              data-live-search="true"
              class="selectpicker show-menu-arrow form-selec"
              v-model="taxes_info.provider_id"
            >
              <option disabled selected value="">اختر مقدم الخدمة</option>
              <option
                v-for="provider in allProviders"
                :key="provider.id"
                :value="provider.id"
              >
                {{ provider.name }}
              </option>
            </select>
            <router-link
              :to="{
                name: 'AddProviders',
                query: { from: 'UpdateTax', id: this.$route.params.id },
              }"
            >
              <button class="btn">اضف جديد</button>
            </router-link>
          </div>
          <div class="col-lg-12">
            <label>ادخل المبلغ</label>
            <input
              type="text"
              placeholder="المبلغ"
              v-model="taxes_info.amount"
            />
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
          <button :disabled="isLoading" class="btn add">تعديل الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateTax",
  params: ["id"],
  data() {
    return {
      allGeneralExpenses: [],
      allProviders: [],
      taxes_info: {
        provider_id: "",
        term_id: "",
        amount: "",
        tax_state: "1",
      },
      isLoading: false,
      errors: [],
    };
  },
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/taxedterm/" +
        localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.allGeneralExpenses = data))
      .catch((err) => console.log(err.message));
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/taxedprovider/" +
        localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.allProviders = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    updateTax(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/general-service/" + this.$route.params.id,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.taxes_info),
        }
      ).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ExpensesTax" });
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
      Object.keys(this.taxes_info).forEach((key) => {
        if (this.taxes_info[key] === "") {
          delete this.taxes_info[key];
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
.UpdateTax {
  direction: rtl;
  width: 77%;
}
.UpdateTax h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.UpdateTax p {
  color: #1a2669;
  font-weight: 400;
}
.UpdateTax .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.UpdateTax h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.UpdateTax label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.UpdateTax input,
.UpdateTax .form-selec {
  border: 1px solid #c8c9cc;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.UpdateTax input::placeholder,
.UpdateTax .form-select::placeholder {
  color: #c8c9cc;
}
.UpdateTax button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.UpdateTax button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}

@media (max-width: 991px) {
  .UpdateTax input,
  .UpdateTax .form-selec {
    width: 100%;
  }
  .UpdateTax button,
  .UpdateTax button.add {
    width: auto;
    margin: 2vh auto;
  }
  .UpdateTax {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .UpdateTax {
    width: 100%;
  }
}
</style>
