<template>
  <div class="salesTax">
    <div class="container">
      <h4>الضريبة (مبيعات)</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>

      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تقرير الضريبة (مبيعات)</span>
          </div>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">تاريخ الحركة</th>
              <th scope="col">رقم الفاتورة</th>
              <th scope="col">اسم العميل</th>
              <th scope="col">القيمة</th>
              <th scope="col">الضريبة</th>
            </tr>
          </thead>
          <tbody v-if="salesTaxesToDisplay.length > 0">
            <tr v-for="salesTax in salesTaxesToDisplay" :key="salesTax.id">
              <td>{{ salesTax.created_at.split("T")[0] }}</td>
              <td>{{ salesTax.id }}</td>
              <td>{{ salesTax.customer.name }}</td>
              <td>{{ salesTax.amount_after_discount }}</td>
              <td>{{ salesTax.tax }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">لا يوجد ضرائب مبيعات لعرضها</td>
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
              :total-data="salesTaxes.length"
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
  name: "SalesTax",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      salesTaxes: [],
      salesTaxesPerPage: 7,
      currentPage: 1,
    };
  },
  computed: {
    salesTaxesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.salesTaxesPerPage;
      const endIndex = startIndex + this.salesTaxesPerPage;
      return this.salesTaxes.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.salesTaxes.length / this.salesTaxesPerPage);
    },
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/order/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.salesTaxes = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
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
.salesTax {
  direction: rtl;
  width: 80%;
}
.salesTax h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.salesTax p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.salesTax .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.salesTax .input-container {
  width: 30%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  font-weight: 500;
  margin: 0;
}

.salesTax .input-container svg {
  padding-left: 2vh;
}

.salesTax .extra-table button {
  width: 16%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.salesTax .extra-table button:first-of-type,
.salesTax .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.salesTax .extra-table button:last-of-type {
  width: 25%;
}
.salesTax .extra-table button:first-of-type {
  width: 10%;
}
.salesTax .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.salesTax table {
  margin-bottom: 0;
  text-align: center;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.salesTax table thead tr th,
.salesTax table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.salesTax table tr td,
.salesTax table tr th {
  color: #1a2669;
}
.salesTax table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.salesTax table tfoot td:last-of-type {
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
  .salesTax {
    width: 70%;
  }

  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
}
@media (max-width: 765px) {
  .salesTax {
    width: 100%;
  }
  .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
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
