<template>
  <div class="discountsPage">
    <div class="container">
      <h4>الخصومات</h4>
      <p>
        الخصومات تشير إلى تخفيضات أو تنزيلات يتم منحها للعملاء عند شراء منتجات
        أو خدمات من الصالون. هذه الخصومات يمكن أن تكون لها طابع متنوع وتطبق
        لأسباب مختلفة.
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

          <router-link to="/AddDiscounts">
            <button class="btn">إنشاء جديد</button>
          </router-link>
          <button class="btn" @click="searchByDate">بحث بالتاريخ</button>
          <button class="btn special" @click="showComponent">
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
              <th scope="col">التاريخ الحركة</th>
              <th scope="col">الموظف</th>
              <th scope="col">مبلغ الخصم</th>
              <th scope="col">السبب</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="discountsToDisplay.length > 0">
            <tr v-for="discount in discountsToDisplay" :key="discount.id">
              <td>{{ discount.created_at.split("T")[0] }}</td>
              <td>{{ discount.employee.name }}</td>
              <td>{{ discount.amount }}</td>
              <td>{{ discount.reason }}</td>
              <td class="text-center">
                <button class="btn show" @click="elementPdf(discount.id)">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <router-link
                  :to="{ name: 'UpdateDiscounts', params: { id: discount.id } }"
                >
                  <button class="btn show"><fa icon="pen" /> تعديل</button>
                </router-link>
                <button @click="deleteDiscount(discount.id)" class="btn delete">
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">{{ info }}</td>
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
              :total-data="discounts.length"
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
export default {
  name: "DiscountsPage",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      discounts: [],
      discountsPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      isComponentVisible: false,
      isMultiSelection: true,
      selectedDate: [],
      info: "يتم التحميل .......",
    };
  },
  computed: {
    discountsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.discountsPerPage;
      const endIndex = startIndex + this.discountsPerPage;
      return this.discounts.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.discounts.length / this.discountsPerPage);
    },
  },
  mounted() {
    this.fetchAllDiscounts();
  },
  methods: {
    fetchAllDiscounts() {
      return new Promise((resolve, reject) => {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/rival/" +
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
            this.discounts = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteDiscount(discountId) {
      fetch("https://www.setrex.net/haircut/backend/public/api/rival/" + discountId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.discounts = this.discounts.filter(
              (discount) => discount.id !== discountId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting discount", error);
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
      if (this.discounts.length > 0) {
        this.info = "";
      } else {
        this.info = "لا يوجد خصومات لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/rival/" + localStorage.getItem("branch_id"),
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
        .then((data) => ((this.discounts = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
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
    searchByDate(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.discounts = [];
      } else {
        fetch(
          "https://www.setrex.net/haircut/backend/public/api/filter-rival/" +
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
            this.discounts = data;
            // if (this.discounts.length === 0) {
            //   this.info = "لا يوجد في الفترة المحددة خصومات لعرضها";
            // }
            this.updateMessage();
          })
          .catch((err) => {
            this.discounts = [];
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
      const discount = this.discounts.find((discount) => discount.id === id);
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("الخصومات"),
            style: "header",
          },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  { text: "Discount date", alignment: "center" },
                  {
                    text: discount.created_at.split("T")[0],
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("تاريخ الخصم"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Employee name", alignment: "center" },
                  {
                    text: this.containsArabic(discount.employee.name)
                      ? this.reverseTextToRtl(discount.employee.name)
                      : discount.employee.name,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("اسم الموظف"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Discount value", alignment: "center" },
                  {
                    text: discount.amount,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("مبلغ الخصم"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Discount statement", alignment: "center" },
                  {
                    text: this.containsArabic(discount.reason)
                      ? this.reverseTextToRtl(discount.reason)
                      : discount.reason,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("السبب"),
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
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllDiscounts().then(() => {
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
.control_wrapper {
  position: fixed;
  z-index: 1111111111111;
  width: 78%;
  margin: auto;
}
.e-calendar {
  float: left;
}
.discountsPage {
  direction: rtl;
  width: 77%;
}
.discountsPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.discountsPage p {
  color: #1a2669;
  font-weight: 400;
}
.discountsPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.discountsPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.discountsPage .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.discountsPage .extra-table button.special {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.discountsPage .input-container {
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
.discountsPage input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.discountsPage input::placeholder {
  color: #3f51b5;
}
.discountsPage .input-container svg {
  padding-left: 0.2vh;
}

.discountsPage .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.discountsPage table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.discountsPage table tr td,
.discountsPage table tr th {
  color: #1a2669;
}
.discountsPage table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
  margin-bottom: 1vh;
}
.discountsPage table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.discountsPage table thead tr th,
.discountsPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.discountsPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.discountsPage table tfoot td:last-of-type {
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
  .discountsPage {
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
  .discountsPage {
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
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
