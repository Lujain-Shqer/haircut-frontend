<template>
  <div class="sundryPurchases">
    <div class="container">
      <h4>المشتريات النثرية</h4>
      <p>
        المشتريات النثرية تشير إلى عمليات الشراء التي تتم بدون تخطيط مسبق أو
        بشكل عشوائي دون مراعاة دقيقة للكميات أو المواصفات. في سياق إدارة صالون
        الحلاقة
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
          <router-link to="/AddSundryPurchases">
            <button class="btn">إنشاء فاتورة</button>
          </router-link>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">المورد</th>
              <th scope="col">القيمة المضافة</th>
              <th scope="col">مبلغ الخصم (إن وجد)</th>
              <th scope="col">المجموع</th>
              <th scope="col">تاريخ الإنشاء</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="sundryPurchasesToDisplay.length > 0">
            <tr
              v-for:="sundryPurchase in sundryPurchasesToDisplay"
              :key="sundryPurchase.id"
            >
              <td>{{ sundryPurchase.supplier.name }}</td>
              <td>{{ sundryPurchase.tax }}</td>
              <td>
                {{
                  sundryPurchase.discount === 0 ? "-" : sundryPurchase.discount
                }}
              </td>
              <td class="td">{{ sundryPurchase.amount_after_discount }}</td>
              <td class="td">
                {{ sundryPurchase.created_at.split("T")[0] }}|{{
                  sundryPurchase.created_at.split("T")[1].split(".")[0]
                }}
              </td>
              <td class="text-center">
                <button class="btn show" @click="elementPdf(sundryPurchase.id)">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button
                  @click="deleteSundryPurchase(sundryPurchase.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">{{ message }}</td>
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
              :total-data="sundryPurchases.length"
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
  name: "SundryPurchases",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      sundryPurchases: [],
      sundryPurchasesPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    sundryPurchasesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.sundryPurchasesPerPage;
      const endIndex = startIndex + this.sundryPurchasesPerPage;
      return this.sundryPurchases.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.sundryPurchases.length / this.sundryPurchasesPerPage
      );
    },
  },
  mounted() {
    this.fetchAllSundryPurchase();
  },
  methods: {
    fetchAllSundryPurchase() {
      return new Promise((resolve, reject) => {
        fetch(
          "http://127.0.0.1:8001/api/sundry-purchase/" +
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
            this.sundryPurchases = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteSundryPurchase(sundryPurchaseId) {
      fetch("http://127.0.0.1:8001/api/purchase/" + sundryPurchaseId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.sundryPurchases = this.sundryPurchases.filter(
              (sundryPurchase) => sundryPurchase.id !== sundryPurchaseId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting sundry purchase:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.sundryPurchases.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد مشتريات نثرية لعرضها";
      }
    },

    search(event) {
      event.preventDefault();
      fetch(
        "http://127.0.0.1:8001/api/product-purchase/" +
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
        .then((data) => ((this.sundryPurchases = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
    reverseTextToRtl(text) {
      return text.split(" ").reverse().join(" ");
    },
    elementPdf(id) {
      const purchase = this.sundryPurchases.find(
        (purchase) => purchase.id === id
      );
      let productsRows = [
        [
          { text: this.reverseTextToRtl("Price/السعر"), alignment: "center" },
          { text: this.reverseTextToRtl("Item/الصنف"), alignment: "center" },
        ],
      ];
      for (let i = 0; i < purchase.sundry_products.length; i += 1) {
        productsRows.push([
          { text: purchase.sundry_products[i].price, alignment: "center" },
          {
            text: this.reverseTextToRtl(purchase.sundry_products[i].name),
            alignment: "center",
          },
        ]);
      }
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("فاتورة  مشتريات نثرية"),
            style: "header",
          },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  { text: "Purchase id", alignment: "center" },
                  { text: purchase.id, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("رقم الطلب"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Invoice issue date", alignment: "center" },
                  {
                    text:
                      purchase.created_at.split("T")[0] +
                      "|" +
                      purchase.created_at.split("T")[1].split(".")[0],
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("تاريخ إصدار الفاتورة"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Supplier name", alignment: "center" },
                  { text: purchase.supplier.name, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("اسم المورد"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Supplier tax number", alignment: "center" },
                  { text: purchase.supplier.tax_number, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("الرقم الضريبي المورد"),
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
          { text: "", margin: [0, 20, 0, 8] },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*"],
              body: productsRows,
              headerRows: 1,
            },
            layout: {
              fillColor: function (rowIndex) {
                return rowIndex === 0 ? "#CCCCCC" : null;
              },
              hLineColor: function (i, node) {
                return i === 0 || i === node.table.body.length
                  ? "#CCCCCC"
                  : "white";
              },
              vLineColor: function () {
                return "white";
              },
            },
          },
          { text: "", margin: [0, 20, 0, 8] },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  { text: purchase.amount, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("المجموع/ Sub total"),
                    alignment: "center",
                  },
                ],
                [
                  {
                    text: purchase.tax,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("ضريبة القيمة المضافة/ VAT"),
                    alignment: "center",
                  },
                ],
                [
                  { text: purchase.discount, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("مبلغ الخصم/ Discount"),
                    alignment: "center",
                  },
                ],
                [
                  {
                    text: purchase.tax + purchase.amount_after_discount,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("المجموع النهائي/ Total"),
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
        this.fetchAllSundryPurchase().then(() => {
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

.sundryPurchases {
  direction: rtl;
  width: 77%;
}

.sundryPurchases h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.sundryPurchases p {
  color: #1a2669;
  font-weight: 400;
}

.sundryPurchases .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}

.sundryPurchases .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}

.sundryPurchases .input-container {
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

.sundryPurchases input {
  border: 0;
  outline: none;
  color: #3f51b5;
}

.sundryPurchases input::placeholder {
  color: #3f51b5;
}

.sundryPurchases .input-container svg {
  padding-left: 0.2vh;
}

.sundryPurchases .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}

.sundryPurchases table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}

.sundryPurchases table tr td,
.sundryPurchases table tr th {
  color: #1a2669;
}

.sundryPurchases table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
  margin-bottom: 1vh;
}

.sundryPurchases table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}

.sundryPurchases table thead tr th,
.sundryPurchases table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}

.sundryPurchases table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}

.sundryPurchases table tfoot td:last-of-type {
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
  .sundryPurchases {
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
  .sundryPurchases {
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
