<template>
  <div class="updateSundry">
    <div class="container">
      <h4>المنتجات النثرية</h4>
      <p>
        هي المنتجات التي يحتاجها الموظف أثناء العمل و تكون تحت حسابات المالية
        لبند المنتجات النثرية
      </p>
      <div class="update-info-client">
        <h6>تحديث بيانات المنتج</h6>
        <form @submit="updateSundry" class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input
              type="text"
              placeholder="اضف اسم المنتج "
              v-model="sundry_info.name"
            />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>سعر الشراء</label>
            <input
              type="text"
              placeholder="اضف سعر الشراء"
              v-model="sundry_info.price"
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
          <button :disabled="isLoading" class="btn">تحديث</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateSundry",
  props: ["id"],
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
    updateSundry(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      fetch("https://www.setrex.net/haircut/backend/public/api/sundry/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.sundry_info),
      })
        .then((response) => {
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
        })
        .catch((error) => {
          console.error("Error updating sundry:", error);
        });
    },
    deleteUnwantedInfo() {
      Object.keys(this.sundry_info).forEach((key) => {
        if (this.sundry_info[key] === "") {
          delete this.sundry_info[key];
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
.updateSundry {
  direction: rtl;
  width: 77%;
}
.updateSundry h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateSundry p {
  color: #1a2669;
  font-weight: 400;
}
.updateSundry .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateSundry h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateSundry label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.updateSundry input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.updateSundry input:focus {
  border: 1px solid #1a2669;
}
.updateSundry button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  padding: 1vh 4vh;
  margin: auto;
  margin-top: 5vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
@media (max-width: 991px) {
  .updateSundry input {
    width: 100%;
  }
  .updateSundry button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateSundry {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateSundry {
    width: 100%;
  }
}
</style>
