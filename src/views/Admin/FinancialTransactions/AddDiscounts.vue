<template>
  <div class="addDiscounts">
    <div class="container">
      <h4>الخصومات</h4>
      <p>
        الخصومات تشير إلى تخفيضات أو تنزيلات يتم منحها للعملاء عند شراء منتجات
        أو خدمات من الصالون. هذه الخصومات يمكن أن تكون لها طابع متنوع وتطبق
        لأسباب مختلفة.
      </p>
      <div class="update-info-client">
        <h6>إضافة خصم</h6>
        <form @submit="addDiscount" class="row">
          <div class="col-lg-12">
            <label>اختر الموظف</label>
            <select
              v-model="discount_info.employeeId"
              class="form-selec"
              aria-label="Default select example"
            >
              <option disabled selected value="">اختر موظف</option>
              <option
                v-for="employee in allEmployees"
                :key="employee.id"
                :value="employee.id"
              >
                {{ employee.name }}
              </option>
            </select>
          </div>
          <div class="col-lg-12">
            <label>أدخل مبلغ الخصم</label>
            <input
              type="text"
              placeholder="أدخل مبلغ الخصم"
              required
              v-model="discount_info.amount"
            />
          </div>
          <div class="col-lg-12">
            <label>أدخل سبب الخصم</label>
            <input
              type="text"
              placeholder="أدخل سبب الخصم"
              required
              v-model="discount_info.reason"
            />
          </div>
          <div class="error-message" v-if="errorMessage">
            {{ errorMessage }}
          </div>
          <button :disabled="isLoading" class="btn add">إضافة خصم</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddDiscounts",
  data() {
    return {
      allEmployees: [],
      errorMessage: "",
      isLoading: false,
      discount_info: {
        employeeId: "",
        amount: "",
        reason: "",
      },
    };
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/employee/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.allEmployees = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    addDiscount(event) {
      event.preventDefault();
      this.isLoading = true;
      if (this.discount_info.employeeId === "") {
        this.errorMessage = "أرجو إدخال كافة المعلومات المطلوبة للسلفة.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      } else {
        fetch("http://127.0.0.1:8001/api/rival", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branch_id: localStorage.getItem("branch_id"),
            employee_id: this.discount_info.employeeId,
            amount: this.discount_info.amount,
            reason: this.discount_info.reason,
          }),
        }).then((response) => {
          this.isLoading = false;
          if (response.ok) {
            this.$router.push({ name: "DiscountsPage" });
            return response.json();
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addDiscounts {
  direction: rtl;
  width: 80%;
}
.addDiscounts h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addDiscounts p {
  color: #1a2669;
  font-weight: 400;
}
.addDiscounts .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addDiscounts h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addDiscounts label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.addDiscounts input,
.addDiscounts .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.addDiscounts input::placeholder,
.addDiscounts .form-select::placeholder {
  color: #c8c9cc;
}
.addDiscounts button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.addDiscounts button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}
.error-message {
  display: block;
  padding: 1vh;
  text-align: start;
  color: red;
}
/* .AddTaxable button:first-of-type {
    margin: auto;
    margin-bottom: 1vh;
  } */
@media (max-width: 991px) {
  .addDiscounts input,
  .addDiscounts .form-selec {
    width: 100%;
  }
  .addDiscounts button,
  .addDiscounts button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addDiscounts {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addDiscounts {
    width: 100%;
  }
}
</style>
