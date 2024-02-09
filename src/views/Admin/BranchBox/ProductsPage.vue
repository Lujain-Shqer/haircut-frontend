<template>
  <div class="productsPage">
    <div class="container">
      <h4>المنتجات</h4>
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
          <router-link to="/AddProducts">
            <button class="btn">إنشاء جديد</button>
          </router-link>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">سعر الخدمة</th>
              <th scope="col">الفرع</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="productsToDisplay.length > 0">
            <tr v-for="product in productsToDisplay" :key="product.id">
              <td>
                <img
                  :src="
                    '/https://www.setrex.net/haircut/backend/public/storage/product_images/' +
                    product.image
                  "
                  alt="product"
                />
                {{ product.name }}
              </td>
              <td>{{ product.selling_price }}</td>
              <td>{{ product.branch_id }}</td>
              <td class="text-center">
                <router-link
                  :to="{ name: 'UpdateProducts', params: { id: product.id } }"
                >
                  <button class="btn show">
                    <fa icon="pen" /> تعديل
                  </button></router-link
                >
                <button @click="deleteProduct(product.id)" class="btn delete">
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="products.length"
              @page-change="changePage"
            ></paginationFoot>
            <!-- <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td> -->
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  components: {
    PaginationFoot,
  },
  name: "ProductsPage",
  data() {
    return {
      products: [],
      productsPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    productsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
  },
  mounted() {
    this.fetchAllProducts();
  },
  methods: {
    fetchAllProducts() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/product/" +
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
            this.products = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteProduct(productId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/product/" +
          productId,
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
            this.products = this.products.filter(
              (product) => product.id !== productId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.products.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد منتجات لعرضهم";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/product/" +
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
        .then((data) => ((this.products = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllProducts().then(() => {
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

.productsPage {
  direction: rtl;
  width: 77%;
}

.productsPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.productsPage p {
  color: #1a2669;
  font-weight: 400;
}

.productsPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}

.productsPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}

.productsPage .input-container {
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

.productsPage input {
  border: 0;
  outline: none;
  color: #3f51b5;
}

.productsPage input::placeholder {
  color: #3f51b5;
}

.productsPage .input-container svg {
  padding-left: 0.2vh;
}

.productsPage .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}

.productsPage table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}

.productsPage table tr td,
.productsPage table tr th {
  color: #1a2669;
}

.productsPage table tr td img {
  width: 12%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 1vh;
}

.productsPage table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
  margin-bottom: 1vh;
}

.productsPage table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}

.productsPage table thead tr th,
.productsPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}

.productsPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}

.productsPage table tfoot td:last-of-type {
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
  .productsPage {
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
  .productsPage {
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

  .cards {
    width: 48%;
  }
}
</style>
