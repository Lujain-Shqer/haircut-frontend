<template>
  <div class="AddTaxable">
    <div class="container">
      <h4>المصاريف العمومية خاضعة للضريبة</h4>
      <p>
        يتم تضمينها في حساب الإيرادات الإجمالية للفرد أو الشركة لغرض حساب
        الضرائب عليها.
      </p>
      <div class="update-info-client">
        <h6>فاتورة مصاريف عمومية خاضعة للضريبة</h6>
        <form @submit="addTax" class="row">
          <div class="col-lg-12">
            <label>البند</label>
            <select
              class="form-selec"
              aria-label="Default select example"
              v-model="taxes_info.termId"
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
              v-model="taxes_info.providerId"
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
              :to="{ name: 'AddProviders', query: { from: 'AddTaxable' } }"
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
              v-model="taxes_info.amount"
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
  name: "AddTaxable",
  data() {
    return {
      allGeneralExpenses: [],
      allProviders: [],
      taxes_info: {
        providerId: "",
        termId: "",
        amount: "",
        taxState: "1",
      },
      isLoading: false,
    };
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/taxedterm/" +
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
      "http://127.0.0.1:8001/api/taxedprovider/" +
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
    addTax(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("http://127.0.0.1:8001/api/general-service", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          provider_id: this.taxes_info.providerId,
          term_id: this.taxes_info.termId,
          amount: this.taxes_info.amount,
          tax_state: this.taxes_info.taxState,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ExpensesTax" });
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

.AddTaxable {
  direction: rtl;
  width: 77%;
}

.AddTaxable h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.AddTaxable p {
  color: #1a2669;
  font-weight: 400;
}

.AddTaxable .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}

.AddTaxable h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}

.AddTaxable label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}

.AddTaxable input,
.AddTaxable .form-selec {
  border: 1px solid #c8c9cc;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}

.AddTaxable input::placeholder,
.AddTaxable .form-select::placeholder {
  color: #c8c9cc;
}

.AddTaxable button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}

.AddTaxable button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .AddTaxable input,
  .AddTaxable .form-selec {
    width: 100%;
  }

  .AddTaxable button,
  .AddTaxable button.add {
    width: auto;
    margin: 2vh auto;
  }

  .AddTaxable {
    width: 70%;
  }
}

@media (max-width: 765px) {
  .AddTaxable {
    width: 100%;
  }
}
</style>
