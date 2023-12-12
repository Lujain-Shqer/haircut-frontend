<template>
  <div class="sundryPurchases">
    <div class="container">
      <h4>المشتريات النثرية</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
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
                <button class="btn show">
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
              <td colspan="7">لا يوجد مشتريات نثرية لعرضها</td>
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
        .then((data) => (this.sundryPurchases = data))
        .catch((err) => console.log(err.message));
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
        .then((data) => (this.sundryPurchases = data))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllSundryPurchase();
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
  width: 80%;
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
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .sundryPurchases {
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
