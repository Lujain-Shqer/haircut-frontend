<template>
  <div class="usersPage">
    <div class="container">
      <h4>المستخدمين</h4>
      <p>الأشخاص يكون ضمن عملاء الخاص في صالون الحلاقة</p>
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
          <router-link to="/AddUser">
            <button class="btn">إنشاء جديد</button>
          </router-link>
          <button class="btn" @click="exportToExcel">Excel</button>
          <button class="btn" @click="toPdf">PDF</button>
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
              <th scope="col">الاسم</th>
              <th scope="col">رقم الجوال</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="usersToDisplay.length > 0">
            <tr v-for="user in usersToDisplay" :key="user.id">
              <td>{{ user.first_name + " " + user.last_name }}</td>
              <td>{{ user.phone_number }}</td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'UpdateUsers', params: { id: user.id } }"
                >
                  <button class="btn show">
                    <fa icon="pen" /> تعديل
                  </button></router-link
                >
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="3">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot v-if="!pdfGenerationMode">
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="users.length"
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
//import html2pdf from "html2pdf.js";
export default {
  name: "UsersPage",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      users: [],
      usersPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
      pdfGenerationMode: false,
    };
  },
  computed: {
    usersToDisplay() {
      const startIndex = (this.currentPage - 1) * this.usersPerPage;
      const endIndex = startIndex + this.usersPerPage;
      // return this.users.slice(startIndex, endIndex);
      return this.pdfGenerationMode
        ? this.users
        : this.users.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.users.length / this.usersPerPage);
    },
  },
  mounted() {
    this.fetchAllUsers();
  },
  methods: {
    fetchAllUsers() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/user/" +
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
            this.users = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteUser(userId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/user/" + userId,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            this.users = this.users.filter((user) => user.id !== userId);
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.users.length > 0) {
        this.message = "";
      } else {
        this.message = " لا يوجد مستخدمين لعرضهم";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/user/" +
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
        .then((data) => ((this.users = data), this.updateMessage()))
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
        nWindow.document.title = "مستخدمون سرب";
        nWindow.document.close();

        setTimeout(() => {
          nWindow.print();
          nWindow.close();
          this.pdfGenerationMode = false;
        }, 200);
      });
    },
    generatePDF() {
      this.pdfGenerationMode = true;
      document.getElementById("my-table").style.direction = "rtl";
      //const element = document.getElementById("my-table");
      // html2pdf(element);
      window.print();
      setTimeout(() => {
        this.pdfGenerationMode = false;
      }, 500);
    },
    async exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      const headerRow = worksheet.addRow(["الاسم", "رقم الجوال"]);
      headerRow.font = { bold: true };
      worksheet.columns = [{ width: 20 }, { width: 30 }];

      this.users.forEach((user) => {
        const dataRow = worksheet.addRow([
          user.first_name + " " + user.last_name,
          user.phone_number,
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
      const fileName = "المستخدمين.xlsx";

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
        this.fetchAllUsers().then(() => {
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

.usersPage {
  direction: rtl;
  width: 77%;
}

.usersPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.usersPage p {
  color: #1a2669;
  font-weight: 400;
}

.usersPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}

.usersPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}

.usersPage .input-container {
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

.usersPage input {
  border: 0;
  outline: none;
  color: #3f51b5;
}

.usersPage input::placeholder {
  color: #3f51b5;
}

.usersPage .input-container svg {
  padding-left: 0.2vh;
}

.usersPage .extra-table button {
  width: auto;
  float: left;
}

.usersPage .extra-table button:first-of-type {
  float: left;
  background: #3f51b5;
  color: #fff;
}

.usersPage .extra-table button {
  float: left;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin: 0 2px;
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

#my-table tfoot td:last-of-type {
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
  .usersPage {
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
  .usersPage {
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
