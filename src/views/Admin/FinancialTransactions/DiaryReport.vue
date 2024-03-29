<template>
  <div class="DiaryReport">
    <div class="container">
      <h4>تقرير اليوميات</h4>
      <p>
        تقرير اليومية هو وثيقة تستخدم لتسجيل الأحداث والأنشطة اليومية في صالون
        الحلاقة. يحتوي هذا التقرير عادةً على المعلومات خاص باليوميات
      </p>

      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <button class="btn" @click="exportToExcel">EXCEL</button>
          <button class="btn" @click="search">بحث بالتاريخ</button>
          <button class="btn" @click="showComponent">
            من الفترة -> إلى الفترة
          </button>
        </div>
        <div class="control_wrapper" v-show="isComponentVisible">
          <ejs-calendar
            :isMultiSelection="isMultiSelection"
            @change="handleDateChange"
          ></ejs-calendar>
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
              <th scope="col">التاريخ</th>
              <th scope="col">إجمالي الفواتير</th>
              <th scope="col">إجمالي الإيراد</th>
              <th scope="col">العمولات</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="diaryReportsToDisplay.length > 0">
            <tr
              v-for="diaryReport in diaryReportsToDisplay"
              :key="diaryReport.id"
            >
              <td>{{ diaryReport.day }}</td>
              <td>{{ diaryReport.Total_Orders }}</td>
              <td>{{ diaryReport.Total_Revenues }}</td>
              <td>{{ diaryReport.Total_Commissions }}</td>
              <td class="text-center">
                <button class="btn show" @click="elementPdf(diaryReport.id)">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">{{ info }}</td>
            </tr>
          </tbody>
          <tfoot v-if="!pdfGenerationMode">
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="diaryReports.length"
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
import { format } from "date-fns";
import * as ExcelJS from "exceljs";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Fonts = {
  arabic: {
    normal: "Amiri-Regular.ttf",
    bold: "Amiri-Bold.ttf",
    italics: "Amiri-Slanted.ttf",
    bolditalics: "Amiri-BoldSlanted.ttf",
  },
};
export default {
  name: "DiaryReport",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      diaryReports: [],
      diaryReportsPerPage: 7,
      currentPage: 1,
      isComponentVisible: false,
      isMultiSelection: true,
      selectedDate: [],
      info: "يتم التحميل .......",
      pdfGenerationMode: false,
      fromSales: false,
    };
  },
  computed: {
    diaryReportsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.diaryReportsPerPage;
      const endIndex = startIndex + this.diaryReportsPerPage;
      // return this.diaryReports.slice(startIndex, endIndex);
      return this.pdfGenerationMode
        ? this.diaryReports
        : this.diaryReports.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.diaryReports.length / this.diaryReportsPerPage);
    },
  },
  async mounted() {
    try {
      await this.fetchAllReports(); // Wait for data to be fetched

      // Check if coming from POS page
      const fromPOS = this.$route.query.fromPOS === "true";
      if (fromPOS) {
        this.toPdf(); // Once data is fetched and coming from POS page, generate PDF
      }
    } catch (error) {
      console.error("Failed to fetch diary reports:", error);
    }
  },
  methods: {
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
        nWindow.document.title = "تقرير يوميات سرب";
        nWindow.document.close();

        setTimeout(() => {
          nWindow.print();
          nWindow.close();
          this.pdfGenerationMode = false;
        }, 200);
        this.$router.push({ name: "PointOfSales" });
      });
    },
    fetchAllReports() {
      return new Promise((resolve, reject) => {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/daily-report/" +
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
            this.diaryReports = data;
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
    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    handleDateChange(args) {
      const dateString = format(args.value, "yyyy-MM-dd");

      if (!this.selectedDate.includes(dateString)) {
        this.selectedDate.push(dateString);

        if (this.selectedDate.length > 2) {
          this.selectedDate.shift();
        }
      }
    },
    updateMessage() {
      if (this.diaryReports.length > 0) {
        this.info = "";
      } else {
        this.info = "لا يوجد تقارير يومية لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.diaryReports = [];
      } else {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/filter-daily-report/" +
            localStorage.getItem("branch_id"),
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              start_date: this.selectedDate[0],
              end_date: this.selectedDate[1],
            }),
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(
                "يجب أن يكون تاريخ بداية الفترة أصغر من تاريخ نهاية الفترة "
              );
            }
          })
          .then((data) => {
            this.diaryReports = data;
            // if (this.diaryReports.length === 0) {
            //   this.info = "لا يوجد في الفترة المحددة تقارير يومية لعرضها";
            // }
            this.updateMessage();
          })
          .catch((err) => {
            this.diaryReports = [];
            this.info = err.message;
          });
      }
    },
    reverseTextToRtl(text) {
      return text.split(" ").reverse().join(" ");
    },
    containsArabic(text) {
      const arabicRegex = /[\u0600-\u06FF]/;
      return arabicRegex.test(text);
    },
    elementPdf(id) {
      const diaryReport = this.diaryReports.find(
        (diaryReport) => diaryReport.id === id
      );
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("تقرير اليوميات"),
            style: "header",
          },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  { text: "Diary report date", alignment: "center" },
                  { text: diaryReport.day, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("التاريخ"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Total orders", alignment: "center" },
                  {
                    text: diaryReport.Total_Orders,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("إجمالي الفواتير"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Total revenues", alignment: "center" },
                  {
                    text: diaryReport.Total_Revenues,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("إجمالي الإيراد"),
                    alignment: "center",
                  },
                ],

                [
                  {
                    text: "Total commissions",
                    alignment: "center",
                  },
                  {
                    text: diaryReport.Total_Commissions,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl(" العمولات"),
                    alignment: "center",
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: function (i, node) {
                return i === 0 || i === node.table.body.length ? 1 : 0;
              },
              // vLineWidth: function (i, node) {
              //   return i === 0 || i === node.table.widths.length ? 2 : 1;
              // },
              hLineColor: function (i, node) {
                return i === 0 || i === node.table.body.length
                  ? "gray"
                  : "white";
              },
              vLineColor: function () {
                return "white";
              },
              // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              // paddingLeft: function(i, node) { return 4; },
              // paddingRight: function(i, node) { return 4; },
              // paddingTop: function(i, node) { return 2; },
              // paddingBottom: function(i, node) { return 2; },
              // fillColor: function (rowIndex, node, columnIndex) { return null; }
            },
          },
        ],
        styles: {
          tableHeader: {
            color: "#D3D3D3",
            bold: true,
          },
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
            alignment: "center",
          },
        },
        defaultStyle: {
          font: "arabic",
        },
      };
      pdfMake.createPdf(docDefinition, null, Fonts).open();
    },
    async exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      const headerRow = worksheet.addRow([
        "التاريخ",
        "إجمالي الفواتير",
        "إجمالي الإيراد",
        "العمولات",
      ]);
      headerRow.font = { bold: true };
      worksheet.columns = [
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
      ];
      this.diaryReports.forEach((diaryReport) => {
        const dataRow = worksheet.addRow([
          diaryReport.day,
          diaryReport.Total_Orders,
          diaryReport.Total_Revenues,
          diaryReport.Total_Commissions,
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
      const fileName = "تقرير_اليوميات.xlsx";

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
.DiaryReport {
  direction: rtl;
  width: 77%;
}
.DiaryReport h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.DiaryReport p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.DiaryReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.DiaryReport .input-container {
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
.DiaryReport input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.DiaryReport input::placeholder {
  color: #3f51b5;
}
.DiaryReport .input-container svg {
  padding-left: 0.2vh;
}
.DiaryReport .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.DiaryReport .extra-table button:first-of-type,
.DiaryReport .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.DiaryReport .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
#my-table {
  margin-bottom: 0;
  text-align: center;
}
#my-table tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

#my-table thead tr th,
#my-table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
#my-table tr td,
#my-table tr th {
  color: #1a2669;
}
#my-table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
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
  .DiaryReport {
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
  .DiaryReport {
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
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
