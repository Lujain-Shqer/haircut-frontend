<template>
  <div class="totalCommissions">
    <div class="container">
      <h4>إجمالي العمولات</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <button class="btn">EXCEL</button>
          <div class="container">
            <fa icon="coins" />
            <span>تقرير إجمالي العمولات</span>
          </div>
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
        </div>
        <div class="control_wrapper" v-show="isComponentVisible">
          <ejs-calendar></ejs-calendar>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">إجمالي الفواتير</th>
              <th scope="col">إجمالي الإيراد</th>
              <th scope="col">العمولات</th>
              <th scope="col">المدفوع</th>
              <th scope="col">المتبقي</th>
            </tr>
          </thead>
          <tbody v-if="totalCommissionsToDisplay.length > 0">
            <tr
              v-for:="totalCommission in totalCommissionsToDisplay"
              :key="totalCommission.id"
            >
              <td>{{ totalCommission.name }}</td>
              <td>{{ totalCommission.info.total_order }}</td>
              <td>
                {{ totalCommission.info.total_revenue.toFixed(2) }}
              </td>
              <td>{{ totalCommission.info.total_commission.toFixed(2) }}</td>
              <td>
                {{ totalCommission.info.payed_commission.toFixed(2) }}
              </td>
              <td>
                {{
                  (
                    totalCommission.info.total_commission -
                    totalCommission.info.payed_commission
                  ).toFixed(2)
                }}
              </td>
            </tr>
            <tr>
              <td>الاحصائيات</td>
              <td>
                {{ sumProperty(totalCommissions, "total_order") }}
              </td>
              <td>
                {{ sumProperty(totalCommissions, "total_revenue").toFixed(2) }}
              </td>
              <td>
                {{
                  sumProperty(totalCommissions, "total_commission").toFixed(2)
                }}
              </td>
              <td>
                {{
                  sumProperty(totalCommissions, "payed_commission").toFixed(2)
                }}
              </td>
              <td>
                {{
                  (
                    sumProperty(totalCommissions, "total_commission") -
                    sumProperty(totalCommissions, "payed_commission")
                  ).toFixed(2)
                }}
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6">لا يوجد عمولات لعرضها</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="totalCommissions.length"
              @page-change="changePage"
            ></paginationFoot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  name: "TotalCommissions",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      totalCommissions: [],
      totalCommissionsPerPage: 7,
      currentPage: 1,
      isComponentVisible: false,
      searchQuery: "",
    };
  },
  computed: {
    totalCommissionsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.totalCommissionsPerPage;
      const endIndex = startIndex + this.totalCommissionsPerPage;
      return this.totalCommissions.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.totalCommissions.length / this.totalCommissionsPerPage
      );
    },
  },
  mounted() {
    this.fetchAllCommissions();
  },
  methods: {
    fetchAllCommissions() {
      fetch(
        "http://127.0.0.1:8001/api/employee-info/" +
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
        .then((data) => (this.totalCommissions = data))
        .catch((err) => console.log(err.message));
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    sumProperty(array, property) {
      return array.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue["info"][property],
        0
      );
    },
    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "http://127.0.0.1:8001/api/employee-info/" +
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
        .then((data) => (this.totalCommissions = data))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllCommissions();
      }
    },
  },
};
</script>
<style scoped>
.control_wrapper {
  position: fixed;
  z-index: 1111111111111;
  margin: auto;
  width: 100%;
}
.e-calendar {
  margin: 0 auto;
}
.row {
  margin: 0;
}
.totalCommissions {
  direction: rtl;
  width: 77%;
}
.totalCommissions h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.totalCommissions p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.totalCommissions .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.totalCommissions .container {
  width: auto;
  float: right;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.totalCommissions .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  float: left;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}
.totalCommissions input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.totalCommissions input::placeholder {
  color: #3f51b5;
}
.totalCommissions .input-container svg {
  padding-left: 0.2vh;
}
.totalCommissions .container svg {
  margin-left: 2vh;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #14141412;
  padding: 0 1vh;
  box-shadow: 0px 0px 6px -1px #1414141f;
}

.totalCommissions .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.totalCommissions .extra-table button:first-of-type,
.totalCommissions .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.totalCommissions .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  text-align: center;
}
.totalCommissions table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.totalCommissions table tfoot {
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

.totalCommissions table thead tr th,
.totalCommissions table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.totalCommissions table tr td,
.totalCommissions table tr th {
  color: #1a2669;
}
tr:last-of-type td {
  background-color: #ebedf7;
  font-weight: 500;
}
.totalCommissions table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.totalCommissions table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 991px) {
  .totalCommissions {
    width: 70%;
  }
  .totalCommissions select {
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
  .totalCommissions {
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
  .totalCommissions select {
    width: 80%;
  }
  .extra-table {
    width: 230%;
  }
  .table {
    width: 250%;
  }
}
</style>
