<template>
  <div class="updateSuppliers">
    <div class="container">
      <h4>الموردون</h4>
      <p>
        الأشخاص مورد للمنتجات التي تشمل المنتجات التي تعزز تجربة العميل وتجعلها
        فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <h6>تحديث بيانات مورد</h6>
        <form @submit="updateSupplier" class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder=" اسم "
              v-model="supplier_info.name"
            />
          </div>
          <div class="col-md-12">
            <label>الرقم الضريبي</label>
            <input
              type="text"
              placeholder=" الرقم الضريبي "
              v-model="supplier_info.tax_number"
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
          <button :disabled="isLoading" class="btn">تحديث بيانات المورد</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateSuppliers",
  params: ["id"],
  data() {
    return {
      isLoading: false,
      errors: [],
      supplier_info: {
        name: "",
        tax_number: "",
      },
    };
  },
  methods: {
    updateSupplier(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/supplier/" +
          this.$route.params.id,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.supplier_info),
        }
      ).then((response) => {
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
    deleteUnwantedInfo() {
      Object.keys(this.supplier_info).forEach((key) => {
        if (this.supplier_info[key] === "") {
          delete this.supplier_info[key];
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
.updateSuppliers {
  direction: rtl;
  width: 77%;
}
.updateSuppliers h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateSuppliers p {
  color: #1a2669;
  font-weight: 400;
}
.updateSuppliers .update-info-client {
  margin: 5vh 0;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateSuppliers h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateSuppliers label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.updateSuppliers input {
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}

.updateSuppliers input:focus {
  border: 1px solid #1a2669;
}
.updateSuppliers form span {
  font-weight: 600;
  color: #1a2669;
}

.updateSuppliers button {
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
  .updateSuppliers input[type="text"] {
    width: 100%;
  }
  .updateSuppliers button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateSuppliers {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateSuppliers {
    width: 100%;
  }
}
</style>
