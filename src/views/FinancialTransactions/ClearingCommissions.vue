<template>
  <div class="clearingCommissions">
    <div class="container">
      <h4>تصفية العمولات</h4>
      <p>عملية حساب وسداد العمولات للموظفين من الخدمات أو المنتجات</p>
      <div class="all-table text-center" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تصفية العمولات</span>
          </div>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">المراد دفعه</th>
              <th scope="col">المتبقي</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="cleaningCommission in cleaningCommissions"
              :key="cleaningCommission.id"
            >
              <td>{{ cleaningCommission.name }}</td>
              <td>
                <input
                  v-model="payments[cleaningCommission.id]"
                  type="text"
                  placeholder="SAR-
المبلغ "
                />
              </td>
              <td>
                {{
                  (
                    cleaningCommission.info.total_commission -
                    cleaningCommission.info.payed_commission
                  ).toFixed(2)
                }}
              </td>
            </tr>
          </tbody>
        </table>
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
        <button :disabled="isLoading" @click="clearCommissions" class="btn">
          حفظ تصفية العمولات
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClearingCommissions",
  data() {
    return {
      cleaningCommissions: [],
      cleaningCommissionsPerPage: 7,
      currentPage: 1,
      payments: [],
      isComponentVisible: false,
      isLoading: false,
      errors: [],
    };
  },
  computed: {
    cleaningCommissionsToDisplay() {
      const startIndex =
        (this.currentPage - 1) * this.cleaningCommissionsPerPage;
      const endIndex = startIndex + this.cleaningCommissionsPerPage;
      return this.cleaningCommissions.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.cleaningCommissions.length / this.cleaningCommissionsPerPage
      );
    },
  },
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/employee-info/" +
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
      .then((data) => (this.cleaningCommissions = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    clearCommissions(event) {
      event.preventDefault();
      this.isLoading = true;
      this.errors = [];
      this.deleteUnwantedInfo();
      Promise.all(
        this.payments.map((payment, index) =>
          fetch("https://www.setrex.net/haircut/backend/public/api/pay-commission", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              employee_id:
                this.cleaningCommissions[index - 1]["info"]["employee_id"],
              amount: payment,
            }),
          }).then((response) => {
            if (response.ok) {
              return response.json();
            } else if (response.status === 400) {
              return response.json().then((data) => {
                const errors = data.errors;
                if (errors) {
                  if (typeof errors === "string") {
                    this.errors.push(errors);
                  } else {
                    Object.values(errors).forEach((errorMessages) => {
                      errorMessages.forEach((errorMessage) => {
                        this.errors.push(errorMessage);
                      });
                    });
                  }
                }
              });
            }
          })
        )
      )
        .then(() => {
          this.isLoading = false;
          // Check if there are no errors
          if (this.errors.length === 0) {
            // Navigate to the other page
            this.$router.push({ name: "TotalCommissions" });
          }
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
          this.isLoading = false;
        });
    },

    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    deleteUnwantedInfo() {
      Object.keys(this.payments).forEach((key) => {
        if (this.payments[key] === "") {
          delete this.payments[key];
        }
      });
    },
  },
};
</script>
<style scoped>
.control_wrapper {
  position: fixed;
  z-index: 1111111111111;
  width: 78%;
  margin: auto;
}
.e-calendar {
  float: left;
}
.row {
  margin: 0;
}

.clearingCommissions {
  direction: rtl;
  width: 77%;
}

.clearingCommissions h4 {
  color: #3f51b5;
  font-weight: 600px;
}

.clearingCommissions p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.clearingCommissions .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}

.clearingCommissions .input-container {
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
  text-align: start;
}

.clearingCommissions .input-container svg {
  padding-left: 2vh;
}

.clearingCommissions .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
}

.clearingCommissions .extra-table button:first-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  float: left;
}

.clearingCommissions .extra-table button:last-of-type {
  float: left;
}

.clearingCommissions .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  text-align: center;
}

.clearingCommissions table {
  margin-bottom: 0;
}

.clearingCommissions table td:last-child {
  color: #3bd34a;
}

.clearingCommissions table tfoot {
  border-radius: 8px;
  font-weight: 300;
}

tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.clearingCommissions table thead tr th,
.clearingCommissions table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}

.clearingCommissions table tr td,
.clearingCommissions table tr th {
  color: #1a2669;
}

.clearingCommissions table .td {
  font-weight: 700;
}

.clearingCommissions table input {
  border: 1px solid #c8c9cc;
  padding: 1vh;
  border-radius: 8px;
  width: 80%;
}

.clearingCommissions table ~ button {
  background: #3f51b5;
  color: #fff;
  margin-top: 5vh;
  margin-bottom: 2vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}

@media (max-width: 991px) {
  .clearingCommissions {
    width: 70%;
  }

  .clearingCommissions select {
    width: 50%;
  }

  .extra-table {
    width: 180%;
  }

  .table {
    width: 192%;
  }
}

@media (max-width: 765px) {
  .clearingCommissions {
    width: 100%;
  }

  .extra-table {
    width: 175%;
  }

  .table {
    width: 192%;
  }
}

@media (max-width: 540px) {
  .clearingCommissions select {
    width: 80%;
  }

  .extra-table {
    width: 210%;
  }

  .table {
    width: 230%;
  }
}
</style>
