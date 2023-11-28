<template>
  <div class="suppliersPage">
    <div class="container">
      <h4>الموردون</h4>
      <p>
        الأشخاص مورد للمنتجات التي تشمل المنتجات التي تعزز تجربة العميل وتجعلها
        فاخرة ومريحة
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <router-link to="/AddSuppliers">
            <button class="btn">إنشاء جديد</button>
          </router-link>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">رقم الضريبي</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="supplier in suppliersToDisplay" :key="supplier.id">
              <td>{{ supplier.name }}</td>
              <td>{{ supplier.tax_number }}</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
                <button @click="deleteSupplier" class="btn delete">
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="suppliers.length"
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
  name: "SuppliersPage",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      suppliers: [],
      suppliersPerPage: 7,
      currentPage: 1,
    };
  },
  computed: {
    suppliersToDisplay() {
      const startIndex = (this.currentPage - 1) * this.suppliersPerPage;
      const endIndex = startIndex + this.suppliersPerPage;
      return this.suppliers.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.suppliers.length / this.suppliersPerPage);
    },
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/supplier/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.suppliers = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteSupplier(supplierId) {
      fetch("http://127.0.0.1:8001/api/provider/" + supplierId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.suppliers = this.suppliers.filter(
              (supplier) => supplier.id !== supplierId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting supplier:", error);
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
.suppliersPage {
  direction: rtl;
  width: 80%;
}
.suppliersPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.suppliersPage p {
  color: #1a2669;
  font-weight: 400;
}
.suppliersPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.suppliersPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.suppliersPage .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 32%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.suppliersPage input {
  border: 0;
  outline: none;
}
.suppliersPage input::placeholder {
  color: #3f51b5;
}
.suppliersPage .input-container svg {
  padding-left: 0.2vh;
}

.suppliersPage .extra-table button {
  width: 20%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.suppliersPage table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.suppliersPage table tr td,
.suppliersPage table tr th {
  color: #1a2669;
}
.suppliersPage table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.suppliersPage table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.suppliersPage table thead tr th,
.suppliersPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.suppliersPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.suppliersPage table tfoot td:last-of-type {
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
  .suppliersPage {
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
  .suppliersPage {
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
