<template>
  <div class="AddSundryPurchases">
    <div class="container">
      <h4>المشتريات النثرية</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <h6>إضافة منتج نثري</h6>
        <form @submit="AddSundryPurchases" class="row">
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
          <div class="col-lg-12">
            <label> المنتجات النثرية</label>
            <select
              multiple
              class="form-selec"
              v-model="purchase_info.selectedProducts"
              required
            >
              <option
                v-for="sundry in allSundryProducts"
                :key="sundry.id"
                :value="{ id: sundry.id, price: sundry.price }"
              >
                {{ sundry.name }}
              </option>
            </select>
          </div>
          <button :disabled="isLoading" class="btn add">إضافة الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddSundryPurchases",
  data() {
    return {
      isLoading: false,
      allSuppliers: [],
      allSundryProducts: [],
      errorMessage: "",
      purchase_info: {
        supplierId: "",
        selectedProducts: [],
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
      "http://127.0.0.1:8001/api/sundry/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.allSundryProducts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    AddSundryPurchases(event) {
      event.preventDefault();
      this.isLoading = true;
      console.log(this.purchase_info.selectedProducts);
      fetch("http://127.0.0.1:8001/api/purchase", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          supplier_id: this.purchase_info.supplierId,
          sundrys:
            this.purchase_info.selectedProducts.length > 0
              ? this.purchase_info.selectedProducts.map((obj) => obj.id)
              : null,
          amount: this.sumProperty(
            this.purchase_info.selectedProducts,
            "price"
          ),
          type: "sundry",
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "SundryPurchases" });
          return response.json();
        }
      });
    },
    sumProperty(array, property) {
      return array.reduce(
        (accumulator, currentValue) => accumulator + currentValue[property],
        0
      );
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddSundryPurchases {
  direction: rtl;
  width: 77%;
}
.AddSundryPurchases h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddSundryPurchases p {
  color: #1a2669;
  font-weight: 400;
}
.AddSundryPurchases .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddSundryPurchases h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddSundryPurchases label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.AddSundryPurchases input,
.AddSundryPurchases .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  color: #3f51b5;
}
.AddSundryPurchases input::placeholder,
.AddSundryPurchases .form-select::placeholder {
  color: #c8c9cc;
}
.AddSundryPurchases button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddSundryPurchases button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .AddSundryPurchases input,
  .AddSundryPurchases .form-selec {
    width: 100%;
  }
  .AddSundryPurchases button,
  .AddSundryPurchases button.add {
    width: auto;
    margin: 2vh auto;
  }
  .AddSundryPurchases {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddSundryPurchases {
    width: 100%;
  }
}
</style>
