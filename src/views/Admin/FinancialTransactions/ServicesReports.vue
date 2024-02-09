<template>
  <div class="servicesReports">
    <div class="container">
      <h4>تقرير الخدمات</h4>
      <p>
        تقرير عن الخدمات المتوفرة بالنظام صالون الحلاقة و التي تشمل الخدمات التي
        تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>

      <div class="all-table" style="overflow-x: auto">
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
          <button class="btn" @click="exportToExcel">EXCEL</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">إجمالي المبيعات</th>
              <th scope="col">عدد مرات بيع الخدمة</th>
            </tr>
          </thead>
          <tbody v-if="servicesReportsToDisplay.length > 0">
            <tr
              v-for="servicesReport in servicesReportsToDisplay"
              :key="servicesReport.id"
            >
              <td>{{ servicesReport.name }}</td>
              <td>{{ servicesReport.total_revenue }}</td>
              <td>{{ servicesReport.orders_count }} مرة</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="3">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="servicesReports.length"
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
import * as ExcelJS from "exceljs";
export default {
  name: "ServicesReports",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      servicesReports: [],
      servicesReportsPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    servicesReportsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.servicesReportsPerPage;
      const endIndex = startIndex + this.servicesReportsPerPage;
      return this.servicesReports.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.servicesReports.length / this.servicesReportsPerPage
      );
    },
  },
  mounted() {
    this.fetchAllServicesReports();
  },
  methods: {
    fetchAllServicesReports() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/frequency-service/" +
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
            this.servicesReports = data;
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
      if (this.servicesReports.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد تقارير لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/frequency-service/" +
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
        .then((data) => ((this.servicesReports = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
    async exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      const headerRow = worksheet.addRow([
        "الاسم",
        "إجمالي المبيعات",
        "عدد مرات بيع الخدمة",
      ]);
      headerRow.font = { bold: true };
      worksheet.columns = [{ width: 20 }, { width: 20 }, { width: 20 }];
      this.servicesReports.forEach((servicesReport) => {
        const dataRow = worksheet.addRow([
          servicesReport.name,
          servicesReport.total_revenue,
          servicesReport.orders_count,
        ]);
        dataRow.eachCell((cell) => {
          cell.font = { size: 13 };
        });
      });

      worksheet.columns.forEach((column) => {
        column.alignment = { horizontal: "center" };
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = "تقرير_الخدمات.xlsx";

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllServicesReports().then(() => {
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
.servicesReports {
  direction: rtl;
  width: 77%;
}
.servicesReports h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.servicesReports p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.servicesReports .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.servicesReports .input-container {
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
.servicesReports input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.servicesReports input::placeholder {
  color: #3f51b5;
}

.servicesReports .extra-table button {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  float: left;
  width: auto;
}
.servicesReports .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.servicesReports table {
  margin-bottom: 0;
  text-align: center;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.servicesReports table thead tr th,
.servicesReports table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.servicesReports table tr td,
.servicesReports table tr th {
  color: #1a2669;
}
.servicesReports table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.servicesReports table tfoot td:last-of-type {
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
  .servicesReports {
    width: 70%;
  }

  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
}
@media (max-width: 765px) {
  .servicesReports {
    width: 100%;
  }
  /* .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
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
