<template>
  <div class="listOfEmployee">
    <div class="container">
      <h4>قائمة الموظفين</h4>
      <p>الأشخاص يكون ضمن فريق الإدارة صالون الحلاقة</p>
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
          <button class="btn" @click="toPdf">PDF</button>

          <button class="btn" @click="exportToExcel">EXCEL</button>

          <router-link to="/AddNewEmployee"
            ><button class="btn">أنشاء جديد</button>
          </router-link>
        </div>
        <table
          id="my-table"
          class="table"
          cellpadding="5"
          border="1"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th scope="col">كود الموظف</th>
              <th scope="col">الموظف</th>
              <th scope="col">المهنة</th>
              <th scope="col">الأجر</th>
              <th scope="col">تاريخ</th>
              <th scope="col">رقم الإقامة</th>
              <th scope="col">الحالة</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="employeesToDisplay.length > 0">
            <tr v-for="employee in employeesToDisplay" :key="employee.id">
              <td>{{ employee.id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.job }}</td>
              <td class="row">
                <div class="col-5">الراتب :</div>
                <div class="col-5">{{ employee.salary }}</div>
                <div class="col-5">العمولة :</div>
                <div class="col-5">{{ employee.commission }}%</div>
              </td>
              <td>{{ employee.created_at.split("T")[0] }}</td>
              <td>{{ employee.residence_number }}</td>
              <td>{{ employee.state }}</td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'UpdateEmployee', params: { id: employee.id } }"
                >
                  <button class="btn show"><fa icon="pen" /> تعديل</button>
                </router-link>
                <button @click="deleteEmployee(employee.id)" class="btn delete">
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="8">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot v-if="!pdfGenerationMode">
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="employees.length"
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
  components: {
    PaginationFoot,
  },
  name: "ListOfEmployees",
  data() {
    return {
      employees: [],
      employeesPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
      pdfGenerationMode: false,
    };
  },
  computed: {
    employeesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.employeesPerPage;
      const endIndex = startIndex + this.employeesPerPage;
      // return this.employees.slice(startIndex, endIndex);
      return this.pdfGenerationMode
        ? this.employees
        : this.employees.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.employees.length / this.employeesPerPage);
    },
  },
  mounted() {
    this.fetchAllEmployees();
  },
  methods: {
    fetchAllEmployees() {
      return new Promise((resolve, reject) => {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/employee/" +
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
            this.employees = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteEmployee(employeeId) {
      fetch("https://www.setrex.net/haircut/backend/public/api/employee/" + employeeId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.employees = this.employees.filter(
              (employee) => employee.id !== employeeId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.employees.length > 0) {
        this.message = "";
      } else {
        this.message = " لا يوجد موظفون لعرضهم";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/employee/" +
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
        .then((data) => ((this.employees = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
    toPdf() {
      this.pdfGenerationMode = true;

      this.$nextTick(() => {
        document.getElementById("my-table").style.direction = "rtl";
        const element = document.getElementById("my-table");
        let header = document.getElementsByTagName("head");

        var nWindow = window.open();
        nWindow.document.write("<html>");
        nWindow.document.write("<head>");

        for (let headItem of header) {
          nWindow.document.write(headItem.outerHTML);
        }

        nWindow.document.write("</head>");
        nWindow.document.write("<body >");
        nWindow.document.write(element.outerHTML);
        nWindow.document.write("</body></html>");
        nWindow.document.title = "موظفون سرب";
        nWindow.document.close();

        setTimeout(() => {
          nWindow.print();
          nWindow.close();
          this.pdfGenerationMode = false;
        }, 200);
      });
    },
    async exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      const headerRow = worksheet.addRow([
        "كود الموظف",
        "الموظف",
        "المهنة",
        "الأجر",
        "التاريخ",
        "رقم الإقامة",
        "الحالة",
      ]);
      headerRow.font = { bold: true };
      worksheet.columns = [
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 40 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
      ];

      this.employees.forEach((employee) => {
        const dataRow = worksheet.addRow([
          employee.id,
          employee.name,
          employee.job,
          "الراتب: " +
            employee.salary +
            "         " +
            "العمولة: " +
            "%" +
            employee.commission,
          employee.created_at.split("T")[0],
          employee.residence_number,
          employee.state,
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
      const fileName = "الموظفون.xlsx";

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
        this.fetchAllEmployees().then(() => {
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
.listOfEmployee {
  direction: rtl;
  width: 77%;
}
.listOfEmployee h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.listOfEmployee p {
  color: #1a2669;
  font-weight: 400;
}
.listOfEmployee .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.listOfEmployee .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.listOfEmployee .input-container {
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
.listOfEmployee input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.listOfEmployee input::placeholder {
  color: #3f51b5;
}
.listOfEmployee .input-container svg {
  padding-left: 0.2vh;
}

.listOfEmployee .extra-table button {
  width: auto;
  float: left;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 1vh;
}
.listOfEmployee .extra-table button:last-child {
  background: #3f51b5;
  color: #fff;
}
#my-table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
#my-table tr td,
#my-table tr th {
  color: #1a2669;
}
#my-table tr td.row div:nth-child(odd) {
  color: #3f51b5;
  font-weight: 600;
}

#my-table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
#my-table thead tr th,
#my-table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
#my-table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
#my-table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 10px;
  margin-bottom: 1vh;
}
/* .listOfEmployee table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
} */
@media (max-width: 991px) {
  .listOfEmployee {
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
  .listOfEmployee {
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
