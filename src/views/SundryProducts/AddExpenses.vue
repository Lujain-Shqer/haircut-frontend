<template>
  <div class="addExpenses">
    <div class="container">
      <h4>بنود المصاريف العمومية</h4>
      <p>
        هتشمل العديد من النفقات التي لا تندرج تحت تصنيف معين ولا تتعلق بالإنتاج
        المباشر أو تقديم الخدمات. بنود المصاريف العمومية تشمل عادة مجموعة متنوعة
        من التكاليف .
      </p>
      <div class="update-info-client">
        <h6>بند مصاريف عمومية جديد</h6>
        <form @submit="addExpense" class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder="اضف اسم المنتج "
              required
              v-model="expenses_info.name"
            />
          </div>
          <div class="col-md-12">
            <span>هل مقدم الخدمة خاضع للضريبة:</span>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="expenses_info.taxState"
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
          <button :disabled="isLoading" class="btn">إضافة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddExpenses",
  data() {
    return {
      expenses_info: {
        name: "",
        taxState: 0,
      },
      isLoading: false,
      errors: [],
    };
  },
  methods: {
    addExpense(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("https://www.setrex.net/haircut/backend/public/api/term", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          name: this.expenses_info.name,
          tax_state: this.expenses_info.taxState,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "GeneralExpenses" });
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
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addExpenses {
  direction: rtl;
  width: 77%;
}
.addExpenses h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addExpenses p {
  color: #1a2669;
  font-weight: 400;
}
.addExpenses .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addExpenses h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addExpenses label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.addExpenses input[type="text"] {
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.addExpenses input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}
.addExpenses input[type="text"]:focus {
  border: 1px solid #1a2669;
}
.addExpenses form span {
  font-weight: 600;
  color: #1a2669;
}

.addExpenses button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
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
  .addExpenses input[type="text"] {
    width: 100%;
  }
  .addExpenses button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addExpenses {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addExpenses {
    width: 100%;
  }
}
</style>
