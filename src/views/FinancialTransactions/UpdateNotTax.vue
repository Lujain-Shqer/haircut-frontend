<template>
  <div class="UpdateNotTax">
    <div class="container">
      <h4>المصاريف العمومية الغير خاضعة للضريبة</h4>
      <p>
        المصاريف التي يمكن خصمها من الإيرادات الخاضعة للضرائب لغرض حساب الضرائب
        الصافية.
      </p>
      <div class="update-info-client">
        <h6>تعديل فاتورة المصاريف العمومية الغير خاضعة للضريبة</h6>
        <form @submit="updateNoTax" class="row">
          <div class="col-lg-12">
            <label>البند</label>
            <select
              class="form-selec"
              aria-label="Default select example"
              v-model="NoTaxes_info.term_id"
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
              v-model="NoTaxes_info.provider_id"
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
                query: { from: 'UpdateNotTax', id: this.$route.params.id },
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
              v-model="NoTaxes_info.amount"
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
  name: "UpdateNotTax",
  data() {
    return {
      allGeneralExpenses: [],
      allProviders: [],
      NoTaxes_info: {
        provider_id: "",
        term_id: "",
        amount: "",
        tax_state: "0",
      },
      isLoading: false,
      errors: [],
    };
  },
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/untaxedterm/" +
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
      "https://www.setrex.net/haircut/backend/public/api/untaxedprovider/" +
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
    updateNoTax(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      console.log(this.NoTaxes_info);
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/general-service/" +
          this.$route.params.id,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.NoTaxes_info),
        }
      ).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ExpensesNotTax" });
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
      Object.keys(this.NoTaxes_info).forEach((key) => {
        if (this.NoTaxes_info[key] === "") {
          delete this.NoTaxes_info[key];
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
.UpdateNotTax {
  direction: rtl;
  width: 77%;
}
.UpdateNotTax h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.UpdateNotTax p {
  color: #1a2669;
  font-weight: 400;
}
.UpdateNotTax .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.UpdateNotTax h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.UpdateNotTax label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.UpdateNotTax input,
.UpdateNotTax .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  color: #3f51b5;
}
.UpdateNotTax input::placeholder,
.UpdateNotTax .form-select::placeholder {
  color: #c8c9cc;
}
.UpdateNotTax button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.UpdateNotTax button.add {
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
  .UpdateNotTax input,
  .UpdateNotTax .form-selec {
    width: 100%;
  }
  .UpdateNotTax button,
  .UpdateNotTax button.add {
    width: auto;
    margin: 2vh auto;
  }
  .UpdateNotTax {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .UpdateNotTax {
    width: 100%;
  }
}
</style>
