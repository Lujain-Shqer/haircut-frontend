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
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <router-link to="/AddDiscounts">
            <button class="btn">إنشاء جديد</button>
          </router-link>
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
                <button class="btn show">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button @click="deleteDiscount(discount.id)" class="btn delete">
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">لا يوجد خصومات لعرضها</td>
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
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  name: "DiscountsPage",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      discounts: [],
      discountsPerPage: 7,
      currentPage: 1,
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
    fetch(
      "http://127.0.0.1:8001/api/rival/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.discounts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteDiscount(discountId) {
      fetch("http://127.0.0.1:8001/api/rival/" + discountId, {
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
          }
        })
        .catch((error) => {
          console.error("Error deleting discount", error);
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
.discountsPage {
  direction: rtl;
  width: 80%;
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
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .discountsPage {
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
