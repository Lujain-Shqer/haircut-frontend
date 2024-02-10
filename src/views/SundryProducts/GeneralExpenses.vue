<template>
  <div class="expenses">
    <div class="container">
      <h4>بنود المصاريف العمومية</h4>
      <p>
        تشمل العديد من النفقات التي لا تندرج تحت تصنيف معين ولا تتعلق بالإنتاج
        المباشر أو تقديم الخدمات. بنود المصاريف العمومية تشمل عادة مجموعة متنوعة
        من التكاليف .
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
          <router-link to="/AddExpenses">
            <button class="btn">إنشاء جديد</button>
          </router-link>
        </div>
        <!-- <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">رقم</th>
              <th scope="col">الاسم</th>
              <th scope="col">حالة الضربية</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>سعيد طراب</td>
              <td>0937467</td>
              <td class="text-center">
                <router-link to="/UpdateExpenses">
                  <button class="btn update">
                    <fa icon="pencil" /> تعديل
                  </button></router-link
                >
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
          </tfoot>
        </table> -->
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">رقم</th>
              <th scope="col">الاسم</th>
              <th scope="col">حالة الضريبة</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="generalExpensesToDisplay.length > 0">
            <tr
              v-for="generalExpense in generalExpensesToDisplay"
              :key="generalExpense.id"
            >
              <td>{{ generalExpense.id }}</td>
              <td>{{ generalExpense.name }}</td>
              <td>{{ showTaxState(generalExpense.tax_state) }}</td>
              <td class="text-center">
                <router-link
                  :to="{
                    name: 'UpdateExpenses',
                    params: { id: generalExpense.id },
                  }"
                >
                  <button class="btn update">
                    <fa icon="pencil" /> تعديل
                  </button></router-link
                >
                <button
                  @click="deleteGeneralExpense(generalExpense.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="generalExpenses.length"
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
  name: "GeneralExpenses",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      generalExpenses: [],
      generalExpensesPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    generalExpensesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.generalExpensesPerPage;
      const endIndex = startIndex + this.generalExpensesPerPage;
      return this.generalExpenses.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.generalExpenses.length / this.generalExpensesPerPage
      );
    },
  },
  mounted() {
    this.fetchAllGeneralExpenses();
  },
  methods: {
    fetchAllGeneralExpenses() {
      return new Promise((resolve, reject) => {
        fetch(
          "http://127.0.0.1:8001/api/term/" + localStorage.getItem("branch_id"),
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
            this.generalExpenses = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteGeneralExpense(generalExpenseId) {
      fetch("http://127.0.0.1:8001/api/term/" + generalExpenseId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.generalExpenses = this.generalExpenses.filter(
              (generalExpense) => generalExpense.id !== generalExpenseId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting generalExpense:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    showTaxState(taxState) {
      return taxState === 1 ? "مفعلة" : " غير مفعلة";
    },
    updateMessage() {
      if (this.generalExpenses.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد بنود مصارف عمومية لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "http://127.0.0.1:8001/api/term/" + localStorage.getItem("branch_id"),
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
        .then((data) => ((this.generalExpenses = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllGeneralExpenses().then(() => {
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
.expenses {
  direction: rtl;
  width: 77%;
}
.expenses h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.expenses p {
  color: #1a2669;
  font-weight: 400;
}
.expenses .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.expenses .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.expenses .input-container {
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
.expenses input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.expenses input::placeholder {
  color: #3f51b5;
}
.expenses .input-container svg {
  padding-left: 0.2vh;
}

.expenses .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.expenses table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.expenses table tr td,
.expenses table tr th {
  color: #1a2669;
}

.expenses table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 10px;
}
.expenses table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 10px;
}
.expenses table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.expenses table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.expenses table thead tr th,
.expenses table tfoot tr th {
  background: #3f51b5;
  color: #fff;
  height: 5vh;
  font-weight: 400;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 991px) {
  .expenses {
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
  .expenses {
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
