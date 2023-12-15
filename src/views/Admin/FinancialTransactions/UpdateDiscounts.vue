<template>
  <div class="updateDiscounts">
    <div class="container">
      <h4>الخصومات</h4>
      <p>
        الخصومات تشير إلى تخفيضات أو تنزيلات يتم منحها للعملاء عند شراء منتجات
        أو خدمات من الصالون. هذه الخصومات يمكن أن تكون لها طابع متنوع وتطبق
        لأسباب مختلفة.
      </p>
      <div class="update-info-client">
        <h6>تعديل خصم</h6>
        <form @submit="updateDiscount" class="row">
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
              v-model="discount_info.amount"
            />
          </div>
          <div class="col-lg-12">
            <label>أدخل سبب الخصم</label>
            <input
              type="text"
              placeholder="أدخل سبب الخصم"
              v-model="discount_info.reason"
            />
          </div>
          <button class="btn add">تعديل خصم</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddDiscounts",
  params: ["id"],
  data() {
    return {
      allEmployees: [],
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
    updateDiscount(event) {
      event.preventDefault();
      Object.keys(this.discount_info).forEach((key) => {
        if (this.discount_info[key] === "") {
          delete this.discount_info[key];
        }
      });
      fetch("http://127.0.0.1:8001/api/rival/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.discount_info),
      })
        .then((response) => {
          if (response.ok) {
            this.$router.push({ name: "DiscountsPage" });
            return response.json();
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            // Log the error details sent by the API
            console.error("Validation error:", error.response.data);
          } else {
            console.error("Failed to update discount:", error);
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
.updateDiscounts {
  direction: rtl;
  width: 77%;
}
.updateDiscounts h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateDiscounts p {
  color: #1a2669;
  font-weight: 400;
}
.updateDiscounts .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateDiscounts h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateDiscounts label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.updateDiscounts input,
.updateDiscounts .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.updateDiscounts input::placeholder,
.updateDiscounts .form-select::placeholder {
  color: #c8c9cc;
}
.updateDiscounts button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.updateDiscounts button.add {
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
  .updateDiscounts input,
  .updateDiscounts .form-selec {
    width: 100%;
  }
  .updateDiscounts button,
  .updateDiscounts button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateDiscounts {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateDiscounts {
    width: 100%;
  }
}
</style>
