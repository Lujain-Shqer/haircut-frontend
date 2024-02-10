<template>
  <div v-if="products.length > 0" class="row">
    <div
      v-for="product in products"
      class="card"
      :key="product.id"
      v-on:click="toggleClass(product)"
      :class="{ red: isProductSelected(product) }"
    >
      <img
        :src="'http://127.0.0.1:8001/storage/product_images/' + product.image"
        alt="product"
      />
      <h6>{{ product.name }}</h6>
      <span>{{ product.selling_price }} SAR</span>
    </div>
    <!-- <div class="card">
      <img src="../assets/salePoints/Prod/2.png" />
      <h6>125gواكس عنكبوت</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/3.png" />
      <h6>مكينة زيرو كيمي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/4.png" />
      <h6>شامبو قشره</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/5.png" />
      <h6>كيرلي دائم وسط</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/6.png" />
      <h6>مثبت شعر تركى</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/7.png" />
      <h6>زيت نيو هير تايلندي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/8.png" />
      <h6>واكس بلمبرز اصفر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/9.png" />
      <h6>اكس كريم شعر جومامي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/10.png" />
      <h6>مكينة تنعيم</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/11.png" />
      <h6>كريم شعر هوبي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/12.png" />
      <h6>فرشة تنظيف</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/13.png" />
      <h6>علبة بخاخ الوان</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/14.png" />
      <h6>شنطة ادوات حلاقة</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/15.png" />
      <h6>موس مره واحده</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/16.png" />
      <h6>فيتامين سي و واقي شمس قارنار</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/17.png" />
      <h6>مكثف شعر سوناتا</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/18.png" />
      <h6>مشط شنب</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/19.png" />
      <h6>شعر مكينة</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/20.png" />
      <h6>موسي تركي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/21.png" />
      <h6>مكينة راس كيمي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/22.png" />
      <h6>صبغة شامبو اسود ورجيناس</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/23.png" />
      <h6>كريم الكولاجين ماسون</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/salePoints/Prod/24.png" />
      <h6>مقص ايطالي</h6>
      <span>30.00 SAR</span>
    </div> -->
  </div>
  <div v-else class="row info">لا يوجد منتجات لعرضها</div>
</template>
<script>
export default {
  name: " ProductsPage",
  data() {
    return {
      products: [],
      // selectedProducts: [],
    };
  },
  mounted() {
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
      .then((data) => {
        this.products = data.map((product) => ({
          ...product,
        }));
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    toggleClass(product) {
      const isSelected = this.isProductSelected(product);
      if (isSelected) {
        this.$store.commit("removeProduct", product);
      } else {
        this.$store.commit("addProduct", product);
      }
      // this.$emit("sendSelectedProducts", this.selectedProducts);
    },
    isProductSelected(product) {
      return this.selectedProducts.some(
        (selectedProduct) => selectedProduct.id === product.id
      );
    },
    // removeProduct(product) {
    //   this.selectedProducts = this.selectedProducts.filter(
    //     (obj) => obj.id !== product.id
    //   );
    // },
    // addProduct(product) {
    //   this.selectedProducts.push(product);
    // },
  },
  computed: {
    selectedProducts() {
      return this.$store.state.selectedProducts;
    },
  },
};
</script>
<style scoped>
.red {
  background: #ebedf7;
}

.row {
  justify-content: space-around;
}
.info {
  color: #1a2669;
}
.card {
  border: 1px solid #1a2669;
  width: 10%;
  margin: 0 2px;
  margin-bottom: 2vh;
  transition: all 0.5s;
}

.card h6 {
  color: #1a2669;
  font-size: 12px;
}

.card span {
  color: #3f51b5;
}

.card img {
  margin-top: 1vh;
}

.card:hover {
  border: 1px solid #1a2669;
  background: #ebedf7;
  cursor: pointer;
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
