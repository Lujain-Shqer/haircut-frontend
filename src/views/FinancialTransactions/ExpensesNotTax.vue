<template>
  <div class="expensesNotTax">
    <div class="container">
      <h4>المصاريف العمومية الغير خاضعة للضريبة</h4>
      <p>
        المصاريف العامة غير الخاضعة للضرائب تشمل النفقات التي لا تخضع للضرائب
        على القيمة المضافة (VAT) أو ضرائب أخرى مماثلة. هذه المصاريف تشمل عادة
        النفقات التي يتم دفعها بشكل منتظم لتشغيل العمل دون أن تكون جزءًا من
        الإيرادات المفرج عنها.
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input
              class="input-field"
              type="text"
              placeholder="البحث عن..."
              v-model="searchQuery"
              @keyup.enter="search"
            />
          </div>
          <router-link to="/AddNotTaxable">
            <button class="btn">إنشاء جديد</button>
          </router-link>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">مقدم الخدمة</th>
              <th scope="col">المجموع</th>
              <th scope="col">تاريخ الإنشاء</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="ExpensesNotTaxesToDisplay.length > 0">
            <tr
              v-for="ExpensesNotTax in ExpensesNotTaxesToDisplay"
              :key="ExpensesNotTax.id"
            >
              <td>{{ ExpensesNotTax.general__service__term.name }}</td>
              <td>{{ ExpensesNotTax.general__service__provider.name }}</td>
              <td>{{ ExpensesNotTax.amount }}</td>
              <td>
                {{ ExpensesNotTax.created_at.split("T")[0] }}|
                {{ ExpensesNotTax.created_at.split("T")[1].split(".")[0] }}
              </td>
              <td class="text-center">
                <router-link
                  :to="{
                    name: 'UpdateNotTax',
                    params: { id: ExpensesNotTax.id },
                  }"
                >
                  <button class="btn show"><fa icon="pen" /> تعديل</button>
                </router-link>
                <button
                  @click="deleteExpensesNotTax(ExpensesNotTax.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">
                {{ message }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="ExpensesNotTaxes.length"
              @page-change="changePage"
            ></paginationFoot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  name: "ExpensesNotTax",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      ExpensesNotTaxes: [],
      ExpensesNotTaxesPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    ExpensesNotTaxesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.ExpensesNotTaxesPerPage;
      const endIndex = startIndex + this.ExpensesNotTaxesPerPage;
      return this.ExpensesNotTaxes.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.ExpensesNotTaxes.length / this.ExpensesNotTaxesPerPage
      );
    },
  },
  mounted() {
    this.fetchAllExpensesNotTaxes();
  },
  methods: {
    fetchAllExpensesNotTaxes() {
      return new Promise((resolve, reject) => {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/general-untaxedservice/" +
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
          .then((data) => {
            this.ExpensesNotTaxes = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.ExpensesNotTaxes.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد مصاريف عمومية غير خاضعة للضريبة لعرضها";
      }
    },
    deleteExpensesNotTax(ExpensesNotTaxId) {
      fetch("https://www.setrex.net/haircut/backend/public/api/general-service/" + ExpensesNotTaxId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.ExpensesNotTaxes = this.ExpensesNotTaxes.filter(
              (ExpensesNotTax) => ExpensesNotTax.id !== ExpensesNotTaxId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting ExpensesNotTax:", error);
        });
    },
    search(event) {
      event.preventDefault();
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/general-untaxedservice/" +
          localStorage.getItem("branch_id"),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: this.searchQuery,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => ((this.ExpensesNotTaxes = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllExpensesNotTaxes().then(() => {
          this.updateMessage();
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

.expensesNotTax {
  direction: rtl;
  width: 77%;
}

.expensesNotTax h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.expensesNotTax p {
  color: #1a2669;
  font-weight: 400;
}

.expensesNotTax .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}

.expensesNotTax .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}

.expensesNotTax .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}

.expensesNotTax input {
  border: 0;
  outline: none;
  color: #3f51b5;
}

.expensesNotTax input::placeholder {
  color: #3f51b5;
}

.expensesNotTax .input-container svg {
  padding-left: 0.2vh;
}

.expensesNotTax .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}

.expensesNotTax table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}

.expensesNotTax table tr td,
.expensesNotTax table tr th {
  color: #1a2669;
}

.expensesNotTax table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
  margin-bottom: 1vh;
}

.expensesNotTax table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}

.expensesNotTax table thead tr th,
.expensesNotTax table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}

.expensesNotTax table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}

.expensesNotTax table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}

@media (max-width: 991px) {
  .expensesNotTax {
    width: 70%;
  }

  /* .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  } */
}

@media (max-width: 765px) {
  .expensesNotTax {
    width: 100%;
  }

  /* .extra-table {
    width: 170%;
  }
  .table {
    width: 182%;
  } */
}

@media (max-width: 540px) {
  /* .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  } */
}
</style>
