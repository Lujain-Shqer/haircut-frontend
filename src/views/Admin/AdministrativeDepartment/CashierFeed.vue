<template>
  <div class="cashierFeed">
    <div class="container">
      <h4>سجل تغذية الكاشير</h4>
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
          <tbody v-if="cashierFeedToDisplay.length > 0">
            <tr
              v-for="cashierFeed in cashierFeedToDisplay"
              :key="cashierFeed.id"
            >
              <td>
                <h6>{{ cashierFeed.created_at.split("T")[0] }}</h6>
              </td>
              <td>{{ cashierFeed.opening_balance }}</td>
              <td>{{ cashierFeed.amount }}</td>
              <td>{{ cashierFeed.statement }}</td>
              <td>{{ cashierFeed.closing_balance }}</td>
              <td class="text-center">
                <button class="btn show" @click="elementPdf(cashierFeed.id)">
                  <fa icon="fa-file-pdf" /> طباعة
                </button>
                <button
                  @click="deleteCashierFeed(cashierFeed.id)"
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
              :total-data="cashierFeeds.length"
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
  name: "CashierFeed",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      cashierFeeds: [],
      cashierFeedsPerPage: 7,
      currentPage: 1,
      isComponentVisible: false,
      isMultiSelection: true,
      selectedDate: [],
      info: "يتم التحميل .......",
    };
  },
  computed: {
    cashierFeedToDisplay() {
      const startIndex = (this.currentPage - 1) * this.cashierFeedsPerPage;
      const endIndex = startIndex + this.cashierFeedsPerPage;
      return this.cashierFeeds.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.cashierFeeds.length / this.cashierFeedsPerPage);
    },
  },
  mounted() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/deposit/" +
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
          this.cashierFeeds = data;
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
    deleteCashierFeed(cashierFeedId) {
      fetch("https://www.setrex.net/haircut/backend/public/api/deposit/" + cashierFeedId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.cashierFeeds = this.cashierFeeds.filter(
              (cashierFeed) => cashierFeed.id !== cashierFeedId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting cashier feed:", error);
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
      if (this.cashierFeeds.length > 0) {
        this.info = "";
      } else {
        this.info = " لا يوجد سجلات تغذية لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.cashierFeeds = [];
      } else {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/filter-deposit/" +
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
            this.cashierFeeds = data;
            this.updateMessage();
            // if (this.cashierFeeds.length === 0) {
            //   this.info = "لا يوجد في الفترة المحددة سجلات تغذية لعرضها";
            // }
          })
          .catch((err) => {
            this.cashierFeeds = [];
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
      const feed = this.cashierFeeds.find((feed) => feed.id === id);
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("سجل التغذية"),
            style: "header",
          },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  { text: "Feed id", alignment: "center" },
                  { text: feed.id, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("رقم سجل التغذية"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Feed issue date", alignment: "center" },
                  {
                    text:
                      feed.created_at.split("T")[0] +
                      "|" +
                      feed.created_at.split("T")[1].split(".")[0],
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("تاريخ سجل التغذية"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Feed statement", alignment: "center" },
                  {
                    text: this.containsArabic(feed.statement)
                      ? this.reverseTextToRtl(feed.statement)
                      : feed.statement,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("البيان"),
                    alignment: "center",
                  },
                ],

                [
                  { text: "Opening balance", alignment: "center" },
                  { text: feed.opening_balance, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("الرصيد الافتتاحي"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Amount", alignment: "center" },
                  { text: feed.amount, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("الرصيد"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Closing balance", alignment: "center" },
                  { text: feed.closing_balance, alignment: "center" },
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

.cashierFeed {
  direction: rtl;
  width: 77%;
}

.cashierFeed h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.cashierFeed p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.cashierFeed .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}

.cashierFeed .search {
  width: auto;
  float: right;
}

.cashierFeed .search span {
  padding-left: 2vh;
  color: #3f51b5;
}

.cashierFeed .search svg {
  color: #3f51b5;
  padding-left: 0.7vh;
}

.cashierFeed .search span:first-of-type {
  font-weight: 500;
}

.cashierFeed .search span:last-of-type {
  font-weight: 400;
}

.cashierFeed .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}

.cashierFeed input {
  border: 0;
  outline: none;
  color: #3f51b5;
}

.cashierFeed input::placeholder {
  color: #757575;
  text-align: start;
}

.cashierFeed .extra-table button {
  float: left;
  width: auto;
}

.cashierFeed .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.cashierFeed .extra-table button:first-of-type {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}

.cashierFeed .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}

.cashierFeed table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
  text-align: center;
}

.cashierFeed table tfoot {
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

.cashierFeed table thead tr th,
.cashierFeed table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}

.cashierFeed table tr td,
.cashierFeed table tr th {
  color: #1a2669;
  font-weight: 400;
}

.cashierFeed table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  font-weight: 300;
  color: #fff;
}

.cashierFeed table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}

.cashierFeed table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}

.cashierFeed table .show {
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
  .cashierFeed {
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
  .cashierFeed {
    width: 100%;
  }
}

@media (max-width: 540px) {
}

.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
