<template>
  <div class="AddNotTaxable">
    <div class="container">
      <h4>المصاريف العمومية الغير خاضعة للضريبة</h4>
      <p>
        المصاريف التي يمكن خصمها من الإيرادات الخاضعة للضرائب لغرض حساب الضرائب
        الصافية.
      </p>
      <div class="update-info-client">
        <h6>فاتورة المصاريف العمومية الغير خاضعة للضريبة</h6>
        <form @submit="addNoTax" class="row">
          <div class="col-lg-12">
            <label>البند</label>
            <select
              class="form-selec"
              aria-label="Default select example"
              v-model="NoTaxes_info.termId"
              required
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
              v-model="NoTaxes_info.providerId"
              required
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
              :to="{ name: 'AddProviders', query: { from: 'AddNotTaxable' } }"
            >
              <button class="btn">اضف جديد</button>
            </router-link>
          </div>
          <div class="col-lg-12">
            <label>ادخل المبلغ</label>
            <input
              type="text"
              placeholder="المبلغ"
              required
              v-model="NoTaxes_info.amount"
            />
          </div>
          <button :disabled="isLoading" class="btn add">إضافة الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddNotTaxable",
  data() {
    return {
      allGeneralExpenses: [],
      allProviders: [],
      NoTaxes_info: {
        providerId: "",
        termId: "",
        amount: "",
        taxState: "0",
      },
      isLoading: false,
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
    addNoTax(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/general-service",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branch_id: localStorage.getItem("branch_id"),
            provider_id: this.NoTaxes_info.providerId,
            term_id: this.NoTaxes_info.termId,
            amount: this.NoTaxes_info.amount,
            tax_state: this.NoTaxes_info.taxState,
          }),
        }
      ).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ExpensesNotTax" });
          return response.json();
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
.AddNotTaxable {
  direction: rtl;
  width: 77%;
}
.AddNotTaxable h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddNotTaxable p {
  color: #1a2669;
  font-weight: 400;
}
.AddNotTaxable .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddNotTaxable h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddNotTaxable label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.AddNotTaxable input,
.AddNotTaxable .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  color: #3f51b5;
}
.AddNotTaxable input::placeholder,
.AddNotTaxable .form-select::placeholder {
  color: #c8c9cc;
}
.AddNotTaxable button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddNotTaxable button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .AddNotTaxable input,
  .AddNotTaxable .form-selec {
    width: 100%;
  }
  .AddNotTaxable button,
  .AddNotTaxable button.add {
    width: auto;
    margin: 2vh auto;
  }
  .AddNotTaxable {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddNotTaxable {
    width: 100%;
  }
}
</style>
