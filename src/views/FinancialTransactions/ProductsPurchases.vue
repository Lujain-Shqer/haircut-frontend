<template>
  <div class="productsPurchases">
    <div class="container">
      <h4>مشتريات المنتجات</h4>
      <p>
        مشتريات المنتجات في نظام إدارة صالون الحلاقة تمثل عملية شراء المواد
        والمستلزمات اللازمة لتشغيل الصالون. يتضمن هذا العمل
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
          <router-link to="/AddProductsPurchases">
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
          <tbody v-if="productsPurchasesToDisplay.length > 0">
            <tr
              v-for:="productsPurchase in productsPurchasesToDisplay"
              :key="productsPurchase.id"
            >
              <td>{{ productsPurchase.supplier.name }}</td>
              <td>{{ productsPurchase.tax }}</td>
              <td>
                {{
                  productsPurchase.discount === 0
                    ? "-"
                    : productsPurchase.discount
                }}
              </td>
              <td class="td">{{ productsPurchase.amount_after_discount }}</td>
              <td class="td">
                {{ productsPurchase.created_at.split("T")[0] }}|{{
                  productsPurchase.created_at.split("T")[1].split(".")[0]
                }}
              </td>
              <td class="text-center">
                <button
                  class="btn show"
                  @click="elementPdf(productsPurchase.id)"
                >
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button
                  @click="deleteProductsPurchase(productsPurchase.id)"
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
              :total-data="productsPurchases.length"
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
export default {
  name: "ProductsPurchases",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      productsPurchases: [],
      productsPurchasesPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    productsPurchasesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.productsPurchasesPerPage;
      const endIndex = startIndex + this.productsPurchasesPerPage;
      return this.productsPurchases.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.productsPurchases.length / this.productsPurchasesPerPage
      );
    },
  },
  mounted() {
    this.fetchAllProductsPurchases();
  },
  methods: {
    fetchAllProductsPurchases() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/product-purchase/" +
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
            this.productsPurchases = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteProductsPurchase(productsPurchaseId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/purchase/" +
          productsPurchaseId,
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
            this.productsPurchases = this.productsPurchases.filter(
              (productsPurchase) => productsPurchase.id !== productsPurchaseId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting products purchase:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.productsPurchases.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد مشتريات منتجات لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/product-purchase/" +
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
        .then((data) => ((this.productsPurchases = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
    reverseTextToRtl(text) {
      return text.split(" ").reverse().join(" ");
    },
    containsArabic(text) {
      const arabicRegex = /[\u0600-\u06FF]/;
      return arabicRegex.test(text);
    },
    elementPdf(id) {
      const purchase = this.productsPurchases.find(
        (purchase) => purchase.id === id
      );
      let productsRows = [
        [
          { text: this.reverseTextToRtl("Price/السعر"), alignment: "center" },
          {
            text: this.reverseTextToRtl("quantity/الكمية"),
            alignment: "center",
          },
          { text: this.reverseTextToRtl("Item/الصنف"), alignment: "center" },
        ],
      ];
      for (let i = 0; i < purchase.products.length; i += 1) {
        productsRows.push([
          { text: purchase.products[i].purchasing_price, alignment: "center" },
          { text: purchase.products[i].pivot.quantity, alignment: "center" },
          {
            text: this.containsArabic(purchase.products[i].name)
              ? this.reverseTextToRtl(purchase.products[i].name)
              : purchase.products[i].name,
            alignment: "center",
          },
        ]);
      }
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("فاتورة  المشتريات"),
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
                  {
                    text: this.containsArabic(purchase.supplier.name)
                      ? this.reverseTextToRtl(purchase.supplier.name)
                      : purchase.supplier.name,
                    alignment: "center",
                  },
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
              widths: ["*", "*", "*"],
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
        this.fetchAllProductsPurchases().then(() => {
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
.productsPurchases {
  direction: rtl;
  width: 77%;
}
.productsPurchases h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.productsPurchases p {
  color: #1a2669;
  font-weight: 400;
}
.productsPurchases .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.productsPurchases .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.productsPurchases .input-container {
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
.productsPurchases input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.productsPurchases input::placeholder {
  color: #3f51b5;
}
.productsPurchases .input-container svg {
  padding-left: 0.2vh;
}

.productsPurchases .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.productsPurchases table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.productsPurchases table tr td,
.productsPurchases table tr th {
  color: #1a2669;
}

.productsPurchases table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
  margin-bottom: 1vh;
}
.productsPurchases table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.productsPurchases table thead tr th,
.productsPurchases table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.productsPurchases table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.productsPurchases table tfoot td:last-of-type {
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
  .productsPurchases {
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
  .productsPurchases {
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
