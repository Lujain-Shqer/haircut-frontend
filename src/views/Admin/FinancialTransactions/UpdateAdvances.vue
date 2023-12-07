<template>
  <div class="updateAdvances">
    <div class="container">
      <h4>السلفيات</h4>
      <p>
        السلفيات هي مبالغ مالية تُعطى للعملاء أو الموظفين مقدمًا قبل تقديم
        الخدمة أو السلعة المقابلة. هذه المبالغ تُمنح عادة كجزء من اتفاق مسبق بين
        الطرفين ويجري تحصيلها في وقت لاحق.
      </p>
      <div class="update-info-client">
        <h6>تعديل سلفة</h6>
        <form @submit="updateAdvance" class="row">
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
              v-model="advance_info.amount"
            />
          </div>
          <div class="col-lg-12">
            <label>أدخل البيان</label>
            <input
              type="text"
              placeholder="أدخل البيان"
              v-model="advance_info.source"
            />
          </div>
          <button class="btn add">تعديل السلفة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddAdvances",
  params: ["id"],
  data() {
    return {
      allEmployees: [],
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
    updateAdvance(event) {
      event.preventDefault();
      Object.keys(this.advance_info).forEach((key) => {
        if (this.advance_info[key] === "") {
          delete this.advance_info[key];
        }
      });
      fetch("http://127.0.0.1:8001/api/advance/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.advance_info),
      }).then((response) => {
        if (response.ok) {
          this.$router.push({ name: "AdvancesPage" });
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

.updateAdvances {
  direction: rtl;
  width: 80%;
}

.updateAdvances h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.updateAdvances p {
  color: #1a2669;
  font-weight: 400;
}

.updateAdvances .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}

.updateAdvances h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}

.updateAdvances label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}

.updateAdvances input,
.updateAdvances .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}

.updateAdvances input::placeholder,
.updateAdvances .form-select::placeholder {
  color: #c8c9cc;
}

.updateAdvances button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}

.updateAdvances button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}
/* .AddTaxable button:first-of-type {
      margin: auto;
      margin-bottom: 1vh;
    } */
@media (max-width: 991px) {
  .updateAdvances input,
  .updateAdvances .form-selec {
    width: 100%;
  }

  .updateAdvances button,
  .updateAdvances button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }

  .updateAdvances {
    width: 70%;
  }
}

@media (max-width: 765px) {
  .updateAdvances {
    width: 100%;
  }
}
</style>
