<template>
  <div class="taxReport">
    <div class="container">
      <h4>تقرير الضريبة (مشتريات)</h4>
      <p>
        غرض تسجيل وتوثيق المعاملات المتعلقة بالمشتريات التي تؤثر على الضرائب
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تقرير الضريبة (مشتريات)</span>
          </div>
          <label>اختر السنة</label>
          <select class="form-selec">
            <option>2022</option>
          </select>
          <label>اختر الربع السنوي</label>
          <select class="form-selec">
            <option>الربع الاول</option>
          </select>
          <button class="btn">بحث</button>
        </div>
        <div class="control_wrapper" v-show="isComponentVisible">
          <ejs-calendar></ejs-calendar>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">تاريخ الحركة</th>
              <th scope="col">رقم الفاتورة</th>
              <th scope="col">اسم المزود</th>
              <th scope="col">القيمة</th>
              <th scope="col">الضريبة</th>
            </tr>
          </thead>
          <tbody v-if="taxReportsToDisplay.length > 0">
            <tr v-for="taxReport in taxReportsToDisplay" :key="taxReport.id">
              <td>{{ taxReport.created_at.split("T")[0] }}</td>
              <td>{{ taxReport.id }}</td>
              <td>{{ taxReport.supplier.name }}</td>
              <td>{{ taxReport.amount_after_discount }}</td>
              <td>{{ taxReport.tax }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">لا يوجد ضرائب مبيعات لعرضها</td>
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
              :total-data="taxReports.length"
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
  name: "TaxReports",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      taxReports: [],
      taxReportsPerPage: 7,
      currentPage: 1,
    };
  },
  computed: {
    taxReportsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.taxReportsPerPage;
      const endIndex = startIndex + this.taxReportsPerPage;
      return this.taxReports.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.taxReports.length / this.taxReportsPerPage);
    },
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/purchase/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.taxReports = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.taxReport {
  direction: rtl;
  width: 80%;
}
.taxReport h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.taxReport p {
  color: #1a2669;
  font-weight: 400;
}
.taxReport .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.taxReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.taxReport .input-container {
  border-radius: 8px;
  width: auto;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.taxReport .input-container svg {
  margin-left: 2vh;
  background: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #14141412;
  padding: 0 1vh;
  box-shadow: 0px 0px 6px -1px #1414141f;
}
.taxReport label {
  display: inline;
  color: #3f51b5;
  font-weight: 400;
}

.taxReport select {
  display: inline;
  width: auto !important;
  border: 1px solid #1a2669;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh 2vh;
  outline: none;
  font-weight: 600;
  margin-left: 2vh;
}
.taxReport .extra-table button {
  background: #3f51b5;
  color: #fff;
  margin-right: 2vh;
  width: auto;
  padding: 1vh 3vh;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}
.taxReport table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.taxReport table tr td,
.taxReport table tr th {
  color: #1a2669;
}

.taxReport table thead tr th,
.taxReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.taxReport table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.taxReport table tfoot td:last-of-type {
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
  .taxReport {
    width: 70%;
  }
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .taxReport {
    width: 100%;
  }
  .extra-table {
    width: 170%;
  }
  .table {
    width: 182%;
  }
}
@media (max-width: 540px) {
  .extra-table {
    width: 240%;
  }
  .table {
    width: 260%;
  }
}
</style>
