<template>
  <div class="AddProductsPurchases">
    <div class="container">
      <h4>مشتريات المنتجات</h4>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="update-info-client">
        <h6>شراء منتج</h6>
        <form @submit="AddProductsPurchases" class="row">
          <div class="col-lg-12">
            <label>المورد</label>
            <select
              class="form-selec"
              v-model="purchase_info.supplierId"
              required
            >
              <option disabled selected value="">اختر مورد</option>
              <option
                v-for="supplier in allSuppliers"
                :key="supplier.id"
                :value="supplier.id"
              >
                {{ supplier.name }}
              </option>
            </select>
          </div>
          <div class="col-lg-12 row">
            <label> المنتجات :</label>
            <div
              class="product-container col-md-3"
              v-for="product in allProducts"
              :key="product.id"
            >
              <div
                class="card"
                v-on:click="toggleClass(product)"
                :class="{ red: isProductSelected(product) }"
              >
                <img
                  :src="
                    'http://127.0.0.1:8001/storage/product_images/' +
                    product.image
                  "
                  alt="product"
                />

                <h6>{{ product.name }}</h6>
                <span>{{ product.selling_price }} SAR</span>
              </div>
              <input
                type="text"
                placeholder="الكمية"
                v-if="isProductSelected(product)"
                v-model="purchase_info.productsCount[getProductIndex(product)]"
              />
            </div>
            <div class="error-message" v-if="errorMessage">
              {{ errorMessage }}
            </div>
          </div>
          <button :disabled="isLoading" class="btn add">إضافة الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddProductsPurchases",
  data() {
    return {
      allSuppliers: [],
      allProducts: [],
      errorMessage: "",
      isLoading: false,
      purchase_info: {
        supplierId: "",
        selectedProducts: [],
        productsCount: [],
      },
    };
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
      .then((data) => (this.allSuppliers = data))
      .catch((err) => console.log(err.message));
    fetch(
      "http://127.0.0.1:8001/api/product/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.allProducts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    AddProductsPurchases(event) {
      event.preventDefault();
      this.isLoading = true;
      console.log(this.purchase_info);
      if (
        (this.purchase_info.selectedProducts.length === 0 &&
          this.purchase_info.productsCount.length === 0) ||
        this.purchase_info.productsCount.some((obj) => obj === "")
      ) {
        this.errorMessage = "أرجو إدخال كافة المعلومات المطلوبة للفاتورة.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      } else {
        fetch("http://127.0.0.1:8001/api/purchase", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branch_id: localStorage.getItem("branch_id"),
            supplier_id: this.purchase_info.supplierId,
            products:
              this.purchase_info.selectedProducts.length > 0
                ? this.purchase_info.selectedProducts.map((obj) => obj.id)
                : null,
            products_count: this.purchase_info.productsCount,
            amount: this.sumProperty(
              this.purchase_info.selectedProducts,
              this.purchase_info.productsCount,
              "selling_price"
            ),
            type: "product",
          }),
        }).then((response) => {
          this.isLoading = false;
          if (response.ok) {
            this.$router.push({ name: "ProductsPurchases" });
            return response.json();
          }
        });
      }
    },
    toggleClass(product) {
      const isSelected = this.isProductSelected(product);
      if (isSelected) {
        this.remove(product);
      } else {
        this.add(product);
      }
    },
    add(product) {
      this.purchase_info.selectedProducts.push(product);
      this.purchase_info.productsCount.push("");
    },
    remove(product) {
      const index = this.getProductIndex(product);
      if (index !== -1) {
        this.purchase_info.selectedProducts.splice(index, 1);
      }
      this.purchase_info.productsCount.splice(index, 1);
    },
    getProductIndex(product) {
      return this.purchase_info.selectedProducts.findIndex(
        (selectedProduct) => selectedProduct.id === product.id
      );
    },
    sumProperty(productArray, countArray, property) {
      return productArray.reduce(
        (sum, currentProduct, index) =>
          sum + currentProduct[property] * countArray[index],
        0
      );
    },
  },
  computed: {
    isProductSelected() {
      return (product) =>
        this.purchase_info.selectedProducts.some(
          (selectedProduct) => selectedProduct.id === product.id
        );
    },
  },
};
</script>
<style scoped>
/* .row {
  margin: 0;
} */
.red {
  background: #ebedf7;
}

.AddProductsPurchases {
  direction: rtl;
  width: 77%;
}
.AddProductsPurchases h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddProductsPurchases p {
  color: #1a2669;
  font-weight: 400;
}
.AddProductsPurchases .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddProductsPurchases h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddProductsPurchases label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.AddProductsPurchases input,
.AddProductsPurchases .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  color: #3f51b5;
  margin-top: 0;
}
.AddProductsPurchases input::placeholder,
.AddProductsPurchases .form-select::placeholder {
  color: #c8c9cc;
}
.AddProductsPurchases button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddProductsPurchases button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}
.error-message {
  display: block;
  padding: 1vh;
  text-align: start;
  color: red;
}
@media (max-width: 991px) {
  .AddProductsPurchases input,
  .AddProductsPurchases .form-selec {
    width: 100%;
  }
  .AddProductsPurchases button,
  .AddProductsPurchases button.add {
    width: auto;
    margin: 2vh auto;
  }
  .AddProductsPurchases {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddProductsPurchases {
    width: 100%;
  }
}

.row {
  justify-content: space-around;
}

.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4vh;
}

.card {
  border: 1px solid #1a2669;
  width: 50%;
  margin-bottom: 2vh;
  transition: all 0.5s;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: auto;
  margin-top: 1vh;
  padding-left: 1vw;
  padding-right: 1vw;
  display: block;
}

.card h6,
.card span {
  display: block;
  text-align: center;
  color: #3f51b5;
}
.card:hover {
  border: 1px solid #1a2669;
  background: #ebedf7;
  cursor: pointer;
}

input {
  width: 50%;
  padding: 1vh;
  margin-top: 2vh;
  box-sizing: border-box;
  border: 1px solid #c8c9cc;
  border-radius: 8px;
}

@media (max-width: 991px) {
  .card {
    width: 16%;
  }
}
@media (max-width: 768px) {
  .card {
    width: 32%;
  }
}
@media (max-width: 580px) {
  .card {
    width: 40%;
  }
}
</style>
