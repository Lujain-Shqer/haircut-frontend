<template>
  <div class="addServices">
    <div class="container">
      <h4>الخدمات</h4>
      <p>التي تشمل الخدمات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة</p>
      <h4 class="first-step">الخطوة الأولى:</h4>
      <span
        >إضافة اسم الخدمة التي سيتم اعتمادها بالصالون الحلاقة وتقديمها للعملاء
      </span>
      <label>اسم الخدمة:</label>
      <input
        type="text"
        placeholder="اسم الخدمة"
        v-model="service_info.name"
        required
      />
      <h4 class="first-step">الخطوة الثاني:</h4>
      <span
        >اختيار الصورة المعبرة عن اسم الخدمة ليتم أدراج بالنظام صالون الحلاقة
      </span>
      <div class="services text-center row">
        <div
          v-for="(item, index) in cardCount"
          :key="index"
          class="card"
          @click="selectItem(item, index)"
          :class="{ active: selectedItems === item }"
        >
          <img :src="require(`@/assets/salePoints/Serv/${index + 1}.png`)" />
        </div>
        <!-- <div class="card">
          <img src="../../../assets/salePoints/Serv/1.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/2.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/3.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/4.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/5.png" />
        </div>

        <div class="card">
          <img src="../../../assets/salePoints/Serv/6.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/7.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/8.png" />
        </div>

        <div class="card">
          <img src="../../../assets/salePoints/Serv/9.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/10.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/11.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/12.png" />
        </div>

        <div class="card">
          <img src="../../../assets/salePoints/Serv/13.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/14.png" />
        </div>
        <div class="card">
          <img src="../../../assets/salePoints/Serv/15.png" />
        </div>

        <div class="card">
          <img src="../../../assets/salePoints/Serv/16.png" />
        </div> -->
      </div>
      <br />
      <h4 class="first-step">الخطوة الثالثة:</h4>
      <span>ادخل قيمة سعر الخدمة متوافق مع معايير الصالون الحلاقة </span>
      <label>سعر الخدمة:</label>
      <input
        type="text"
        placeholder="سعر الخدمة"
        v-model="service_info.price"
        required
      />
      <h4 class="first-step">الخطوة الرابعة:</h4>
      <span>ادخل الوقت المطلوب لتقديم للعميل و اعتمادها بالصالون الحلاقة</span>
      <label>مدة الخدمة:</label>
      <input
        type="text"
        placeholder="مدة الخدمة"
        v-model="service_info.duration"
        required
      />
      <!-- <div class="col-xl-6 col-sm-12 clock">
          <h5 class="first-step">من الساعة:</h5>
          <ul>
            <li>ص</li>
            <li>م</li>
          </ul>
          <input type="text" /> <span>:</span> <input type="text" />
        </div> -->
      <!-- <div class="col-xl-6 col-sm-12 clock">
          <h5 class="first-step">الى الساعة:</h5>
          <ul>
            <li>ص</li>
            <li>م</li>
          </ul>
          <input type="text" /> <span>:</span> <input type="text" />
        </div> -->
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
      <div class="row">
        <button :disabled="isLoading" @click="addService" class="btn bill">
          إضافة خدمة جديدة
        </button>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "AddServices",
  components: {},
  data() {
    return {
      cardCount: 37,
      component: "ServicesPage",
      isLoading: false,
      selectedItems: null,
      errors: [],
      service_info: {
        image: "",
        name: "",
        price: "",
        duration: "",
      },
    };
  },
  methods: {
    makeActive: function (component, event) {
      this.component = component;
      const isActive = event.target.classList.contains("active");
      console.log(isActive);
      if (!isActive) {
        event.target.classList.add("blue");
      }
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
    },
    selectItem(item, index) {
      this.selectedItems = item;
      this.service_info.image = index + 1 + ".png";
    },

    addService(event) {
      event.preventDefault();
      this.isLoading = true;
      fetch("/https://www.setrex.net/haircut/backend/public/api/service", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          name: this.service_info.name,
          price: this.service_info.price,
          duration: this.service_info.duration,
          image: this.service_info.image,
        }),
      }).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ServicesPage" });
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
.blue {
  background: #3f51b5;
  color: #fff;
}
.row {
  margin: 0;
  justify-content: center;
}
.addServices {
  direction: rtl;
  width: 77%;
}
.addServices h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addServices p {
  color: #1a2669;
  font-weight: 400;
  padding: 0 2vh;
}

.addServices .first-step {
  display: inline-block;
  margin: 1vh 0;
  color: #3f51b5;
  padding-left: 1vh;
}
.addServices label {
  color: #1a2669;
}

.addServices .first-step ~ input {
  width: 35%;
  margin-bottom: 1vh;
  color: #3f51b5;
}
.addServices span {
  color: #1a2669;
}
.addServices form {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1.5px solid #3f51b5;
  border-radius: 8px;
  margin-top: 5vh;
  padding: 2vh;
}
.addServices label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 600;
}
.addServices input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 100%;
  outline: none;
  display: block;
}
.addServices input::placeholder {
  color: #c8c9cc;
}
.addServices .clock input {
  background: #ebedf7;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  width: 8vh;
  height: 8vh;
  outline: none;
  color: #1a2669;
  color: #1a2669;
  font-size: 4vh;
  text-align: center;
  font-weight: 500;
  display: inline;
}
.addServices .clock input ~ span {
  font-size: 5vmin;
}
.addServices .clock ul {
  display: inline-block;
  color: #1a2669;
  list-style: none;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  margin: 0px 3vh;
}
.addServices .clock ul li {
  padding: 10px;
}
.addServices .clock ul li:hover {
  background: #ebedf7;
}
.addServices button.bill {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin: 5vh 0;
  padding: 1vh 4vh;
}

.active {
  background-color: #8590d1;
  color: white;
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
  .addServices {
    width: 70%;
  }
  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
}
@media (max-width: 765px) {
  .addServices {
    width: 100%;
  }
  /* .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
  } */
  .addServices .first-step ~ input {
    width: 100%;
  }
}

@media (max-width: 540px) {
  /* .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  } */
}

.services {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1px solid #3f51b5;
  border-radius: 8px;
  padding: 4vh 2vh;
  text-align: center;
  margin-top: 5vh;
}
.services .card {
  border: 1px solid #1a2669;
  width: 7%;
  margin: 0 2px;
  transition: all 0.5s;
  margin-bottom: 2vh;
}
.card:hover {
  border: 1px solid #1a2669;
  background: #ebedf7;
  cursor: pointer;
}
.card h6 {
  color: #1a2669;
  font-size: 12px;
}
.card span {
  color: #3f51b5;
}
@media (max-width: 991px) {
  .card {
    width: 12% !important;
  }
}
@media (max-width: 768px) {
  .card {
    width: 25% !important;
  }
}
</style>
