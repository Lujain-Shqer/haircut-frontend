<template>
  <div class="cashierWithdraw">
    <div class="container">
      <h4>سجل سحوبات الكاشير</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <!-- <div class="search">
            <div class="input-container">
              <fa icon="search" />
              <input
                class="input-field"
                type="text"
                placeholder="البحث عن..."
              />
            </div>
          </div> -->
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
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">التاريخ</th>
              <th scope="col">الرصيد الافتتاحي</th>
              <th scope="col">الرصيد</th>
              <th scope="col">البيان</th>
              <th scope="col">رصيد الإغلاق</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="cashierWithdrawalsToDisplay.length > 0">
            <tr
              v-for="cashierWithdrawal in cashierWithdrawalsToDisplay"
              :key="cashierWithdrawal.id"
            >
              <td>
                <h6>{{ cashierWithdrawal.created_at.split("T")[0] }}</h6>
              </td>
              <td>{{ cashierWithdrawal.opening_balance }}</td>
              <td>{{ cashierWithdrawal.amount }}</td>
              <td>{{ cashierWithdrawal.statement }}</td>
              <td>{{ cashierWithdrawal.closing_balance }}</td>
              <td class="text-center">
                <button
                  class="btn show"
                  @click="elementPdf(cashierWithdrawal.id)"
                >
                  <fa icon="fa-file-pdf" /> طباعة
                </button>
                <button
                  @click="deleteCashierWithdrawal(cashierWithdrawal.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6">{{ info }}</td>
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
              :total-data="cashierWithdrawals.length"
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
pdfMake.fonts = Fonts;
export default {
  name: "CashierWithdrawals",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      cashierWithdrawals: [],
      cashierWithdrawalsPerPage: 7,
      currentPage: 1,
      isComponentVisible: false,
      isMultiSelection: true,
      selectedDate: [],
      info: "يتم التحميل .......",
    };
  },
  computed: {
    cashierWithdrawalsToDisplay() {
      const startIndex =
        (this.currentPage - 1) * this.cashierWithdrawalsPerPage;
      const endIndex = startIndex + this.cashierWithdrawalsPerPage;
      return this.cashierWithdrawals.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.cashierWithdrawals.length / this.cashierWithdrawalsPerPage
      );
    },
  },
  mounted() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/withdraw/" +
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
          this.cashierWithdrawals = data;
          this.updateMessage();
          resolve();
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  },
  methods: {
    deleteCashierWithdrawal(cashierWithdrawalId) {
      fetch("https://www.setrex.net/haircut/backend/public/api/withdraw/" + cashierWithdrawalId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.cashierWithdrawals = this.cashierWithdrawals.filter(
              (cashierWithdrawal) =>
                cashierWithdrawal.id !== cashierWithdrawalId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting cashier withdraw:", error);
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
    updateMessage() {
      if (this.cashierWithdrawals.length > 0) {
        this.info = "";
      } else {
        this.info = " لا يوجد سجلات سحوبات لعرضها";
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
    search(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.cashierWithdrawals = [];
      } else {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/filter-withdraw/" +
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
            this.cashierWithdrawals = data;
            // if (this.cashierWithdrawals.length === 0) {
            //   this.info = "لا يوجد في الفترة المحددة سجلات سحوبات لعرضها";
            // }
            this.updateMessage();
          })
          .catch((err) => {
            this.cashierWithdrawals = [];
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
      const withdrawl = this.cashierWithdrawals.find(
        (withdrawl) => withdrawl.id === id
      );
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("سجل السحوبات"),
            style: "header",
          },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  { text: "Withdrawl id", alignment: "center" },
                  { text: withdrawl.id, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("رقم سجل السحوبات"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Withdrawl issue date", alignment: "center" },
                  {
                    text:
                      withdrawl.created_at.split("T")[0] +
                      "|" +
                      withdrawl.created_at.split("T")[1].split(".")[0],
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("تاريخ سجل السحوبات"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Withdrawl statement", alignment: "center" },
                  {
                    text: this.containsArabic(withdrawl.statement)
                      ? this.reverseTextToRtl(withdrawl.statement)
                      : withdrawl.statement,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("البيان"),
                    alignment: "center",
                  },
                ],

                [
                  { text: "Opening balance", alignment: "center" },
                  { text: withdrawl.opening_balance, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("الرصيد الافتتاحي"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Amount", alignment: "center" },
                  { text: withdrawl.amount, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("الرصيد"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Closing balance", alignment: "center" },
                  { text: withdrawl.closing_balance, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("رصيد الإغلاق"),
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
  },
};
</script>
<style scoped>
.control_wrapper {
  position: absolute;
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

.cashierWithdraw {
  direction: rtl;
  width: 77%;
}

.cashierWithdraw h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.cashierWithdraw p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.cashierWithdraw .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}

.cashierWithdraw .search {
  width: auto;
  float: right;
}

.cashierWithdraw .search span {
  padding-left: 2vh;
  color: #3f51b5;
}

.cashierWithdraw .search svg {
  color: #3f51b5;
  padding-left: 0.7vh;
}

.cashierWithdraw .search span:first-of-type {
  font-weight: 500;
}

.cashierWithdraw .search span:last-of-type {
  font-weight: 400;
}

.cashierWithdraw .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}

.cashierWithdraw input {
  border: 0;
  outline: none;

  color: #3f51b5;
}

.cashierWithdraw input::placeholder {
  color: #757575;
  text-align: start;
}

.cashierWithdraw .extra-table button {
  width: auto;
  float: left;
}

.cashierWithdraw .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.cashierWithdraw .extra-table button:first-of-type {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}

.cashierWithdraw .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}

.cashierWithdraw table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
  text-align: center;
  width: 100%;
}

.cashierWithdraw table tfoot {
  border-radius: 8px;
}

tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.cashierWithdraw table thead tr th,
.cashierWithdraw table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}

.cashierWithdraw table tr td,
.cashierWithdraw table tr th {
  color: #1a2669;
  font-weight: 400;
}

.cashierWithdraw table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}

.cashierWithdraw table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}

.cashierWithdraw table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}

.cashierWithdraw table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}

tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 991px) {
  /* .extra-table {
    width: 160%;
  }
  .table {
    width: 170%;
  } */
  .cashierWithdraw {
    width: 70%;
  }
}

@media (max-width: 765px) {
  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
  .cashierWithdraw {
    width: 100%;
  }
}

@media (max-width: 540px) {
  /* .extra-table {
    width: 220%;
  }
  .table {
    width: 250%;
  } */
}

.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
