<template>
  <div class="addSundry">
    <div class="container">
      <h4>المنتجات النثرية</h4>
      <p>
        هي المنتجات التي يحتاجها الموظف أثناء العمل و تكون تحت حسابات المالية
        لبند المنتجات النثرية
      </p>
      <div class="update-info-client">
        <h6>منتج جديد</h6>
        <form @submit="addSundry" class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder="اضف اسم المنتج "
              v-model="sundry_info.name"
              required
            />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>سعر الشراء</label>
            <input
              type="text"
              placeholder="اضف سعر الشراء"
              v-model="sundry_info.price"
              required
            />
          </div>
          <div v-if="errors.length > 0">
            <ul style="margin-top: 30px">
              <li
                class="error-mes"
                dir="rtl"
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button :disabled="isLoading" class="btn">إضافة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddSundry",
  data() {
    return {
      sundry_info: {
        name: "",
        price: "",
      },
      isLoading: false,
      errors: [],
    };
  },
  methods: {
    addSundry(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("https://www.setrex.net/haircut/backend/public/api/sundry", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          name: this.sundry_info.name,
          price: this.sundry_info.price,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "SundryProducts" });
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
.addSundry {
  direction: rtl;
  width: 77%;
}
.addSundry h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addSundry p {
  color: #1a2669;
  font-weight: 400;
}
.addSundry .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addSundry h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addSundry label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.addSundry input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.addSundry input:focus {
  border: 1px solid #1a2669;
}

.addSundry button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}

@media (max-width: 991px) {
  .addSundry input {
    width: 100%;
  }
  .addSundry button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addSundry {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addSundry {
    width: 100%;
  }
}
</style>
