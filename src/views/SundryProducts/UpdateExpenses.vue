<template>
  <div class="updateExpenses">
    <div class="container">
      <h4>بنود المصاريف العمومية</h4>
      <p>
        هتشمل العديد من النفقات التي لا تندرج تحت تصنيف معين ولا تتعلق بالإنتاج
        المباشر أو تقديم الخدمات. بنود المصاريف العمومية تشمل عادة مجموعة متنوعة
        من التكاليف .
      </p>
      <div class="update-info-client">
        <h6>تحديث مصروف عمومي</h6>
        <form @submit="updateExpense" class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder="اضف اسم المنتج "
              v-model="expense_info.name"
            />
          </div>
          <div class="col-md-12">
            <span>هل مقدم الخدمة خاضع للضريبة:</span>
            <input
              class="form-check-input"
              type="checkbox"
              value="0"
              id="flexCheckDefault"
              v-model="expense_info.tax_state"
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
          <button :disabled="isLoading" class="btn">تحديث</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateExpenses",
  props: ["id"],
  data() {
    return {
      expense_info: {
        name: "",
        tax_state: "0",
      },
      isLoading: false,
      errors: [],
    };
  },
  methods: {
    updateExpense(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch("http://127.0.0.1:8001/api/term/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.expense_info.name,
          tax_state: this.expense_info.tax_state,
        }),
      })
        .then((response) => {
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
        })
        .then((data) => {
          // Log the response data to the console
          console.log("API Response:", data);
        })
        .catch((error) => {
          console.error("Error updating expense:", error);
        });
    },
    toggleTaxState() {
      this.expense_info.tax_state = this.expense_info.tax_state === 1 ? 0 : 1;
    },
    deleteUnwantedInfo() {
      Object.keys(this.expense_info).forEach((key) => {
        if (this.expense_info[key] === "") {
          delete this.expense_info[key];
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
.updateExpenses {
  direction: rtl;
  width: 77%;
}
.updateExpenses h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateExpenses p {
  color: #1a2669;
  font-weight: 400;
}
.updateExpenses .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateExpenses h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateExpenses label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.updateExpenses input[type="text"] {
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.updateExpenses input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}
.updateExpenses input[type="text"]:focus {
  border: 1px solid #1a2669;
}
.updateExpenses form span {
  font-weight: 600;
  color: #1a2669;
}

.updateExpenses button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  padding: 1vh 4vh;
  margin: auto;
  margin-top: 5vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}

@media (max-width: 991px) {
  .updateExpenses input[type="text"] {
    width: 100%;
  }
  .updateExpenses button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateExpenses {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateExpenses {
    width: 100%;
  }
}
</style>
