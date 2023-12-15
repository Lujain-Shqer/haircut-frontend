<template>
  <div class="addAdvances">
    <div class="container">
      <h4>السلفيات</h4>
      <p>
        السلفيات هي مبالغ مالية تُعطى للعملاء أو الموظفين مقدمًا قبل تقديم
        الخدمة أو السلعة المقابلة. هذه المبالغ تُمنح عادة كجزء من اتفاق مسبق بين
        الطرفين ويجري تحصيلها في وقت لاحق.
      </p>
      <div class="update-info-client">
        <h6>إضافة سلفة</h6>
        <form @submit="addAdvance" class="row">
          <div class="col-lg-12">
            <label>اختر الموظف</label>
            <select
              v-model="advance_info.employeeId"
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
            <label>أدخل مبلغ السلفة</label>
            <input
              type="text"
              placeholder="أدخل مبلغ السلفة"
              required
              v-model="advance_info.amount"
            />
          </div>
          <div class="col-lg-12">
            <label>أدخل البيان</label>
            <input
              type="text"
              placeholder="أدخل البيان"
              required
              v-model="advance_info.source"
            />
          </div>
          <div class="error-message" v-if="errorMessage">
            {{ errorMessage }}
          </div>
          <button :disabled="isLoading" class="btn add">إضافة السلفة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddAdvances",
  data() {
    return {
      allEmployees: [],
      errorMessage: "",
      isLoading: false,
      advance_info: {
        employeeId: "",
        amount: "",
        source: "",
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
    addAdvance(event) {
      event.preventDefault();
      this.isLoading = true;
      if (this.advance_info.employeeId === "") {
        this.errorMessage = "أرجو إدخال كافة المعلومات المطلوبة للسلفة.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      } else {
        fetch("http://127.0.0.1:8001/api/advance", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branch_id: localStorage.getItem("branch_id"),
            employee_id: this.advance_info.employeeId,
            amount: this.advance_info.amount,
            source: this.advance_info.source,
          }),
        }).then((response) => {
          this.isLoading = false;
          if (response.ok) {
            this.$router.push({ name: "AdvancesPage" });
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

.addAdvances {
  direction: rtl;
  width: 77%;
}

.addAdvances h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.addAdvances p {
  color: #1a2669;
  font-weight: 400;
}

.addAdvances .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}

.addAdvances h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}

.addAdvances label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}

.addAdvances input,
.addAdvances .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}

.addAdvances input::placeholder,
.addAdvances .form-select::placeholder {
  color: #c8c9cc;
}

.addAdvances button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}

.addAdvances button.add {
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
  .addAdvances input,
  .addAdvances .form-selec {
    width: 100%;
  }

  .addAdvances button,
  .addAdvances button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }

  .addAdvances {
    width: 70%;
  }
}

@media (max-width: 765px) {
  .addAdvances {
    width: 100%;
  }
}
</style>
