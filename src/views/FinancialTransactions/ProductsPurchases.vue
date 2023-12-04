<template>
  <div class="productsPurchases">
    <div class="container">
      <h4>مشتريات المنتجات</h4>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
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
                <button class="btn show">
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
              <td colspan="7">لا يوجد مشتريات منتجات لعرضها</td>
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
    fetch(
      "http://127.0.0.1:8001/api/product-purchase/" +
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
      .then((data) => (this.productsPurchases = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteProductsPurchase(productsPurchaseId) {
      fetch("http://127.0.0.1:8001/api/purchase/" + productsPurchaseId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
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
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.productsPurchases {
  direction: rtl;
  width: 80%;
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
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .productsPurchases {
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
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
