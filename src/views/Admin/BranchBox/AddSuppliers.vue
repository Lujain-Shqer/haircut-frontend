<template>
  <div class="addSuppliers">
    <div class="container">
      <h4>الموردون</h4>
      <p>
        الأشخاص مورد للمنتجات التي تشمل المنتجات التي تعزز تجربة العميل وتجعلها
        فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <h6>أنشاء مورد جديد</h6>
        <form @submit="addSupplier" class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder=" اسم "
              required
              v-model="supplier_info.name"
            />
          </div>
          <div class="col-md-12">
            <label>الرقم الضريبي</label>
            <input
              type="text"
              placeholder=" الرقم الضريبي "
              required
              v-model="supplier_info.taxNumber"
            />
          </div>
          <div v-if="errors.length > 0">
            <ul>
              <li
                class="error-message"
                dir="rtl"
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button :disabled="isLoading" class="btn">إضافة مورد جديد</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddSuppliers",
  data() {
    return {
      isLoading: false,
      errors: [],
      supplier_info: {
        name: "",
        taxNumber: "",
      },
    };
  },
  methods: {
    addSupplier(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("https://www.setrex.net/haircut/backend/public/api/supplier", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          name: this.supplier_info.name,
          tax_number: this.supplier_info.taxNumber,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "SuppliersPage" });
          return response.json();
        } else if (response.status === 400) {
          response.json().then((data) => {
            const errors = data.errors;
            if (errors) {
              if (this.errors.length > 0) {
                this.errors = [];
              }
              if (typeof errors === "string") {
                this.errors.push(errors);
              } else {
                Object.values(errors).forEach((errorMessages) => {
                  errorMessages.forEach((errorMessage) => {
                    this.errors.push(errorMessage);
                  });
                });
              }
              setTimeout(() => {
                this.errors = [];
              }, 10000);
            }
          });
        }
      });
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addSuppliers {
  direction: rtl;
  width: 77%;
}
.addSuppliers h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addSuppliers p {
  color: #1a2669;
  font-weight: 400;
}
.addSuppliers .update-info-client {
  margin: 5vh 0;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addSuppliers h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addSuppliers label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.addSuppliers input {
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}

.addSuppliers input:focus {
  border: 1px solid #1a2669;
}
.addSuppliers form span {
  font-weight: 600;
  color: #1a2669;
}

.addSuppliers button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
  padding: 1vh 2vh;
}
.error-message {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
ul {
  margin-top: 30px;
}
@media (max-width: 991px) {
  .addSuppliers input[type="text"] {
    width: 100%;
  }
  .addSuppliers button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addSuppliers {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addSuppliers {
    width: 100%;
  }
}
</style>
