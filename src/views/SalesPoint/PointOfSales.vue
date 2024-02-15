<template>
  <div class="pointOfSales">
    <div class="container">
      <h4>نقطة البيع</h4>
      <p>
        هي نظام يُستخدم لإتمام معاملات البيع ومعالجة المدفوعات في صالونات
        الحلاقة. تُعد نقطة البيع واحدة من أهم الأدوات في إدارة الأعمال التجارية
        وتشمل العديد من الوظائف والمميزات التي تساعد في تيسير العمليات وزيادة
        الكفاءة.
      </p>
      <div class="all-table text-center" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <img src="../../assets/salePoints/salon.png" />
            <span>صالون شعر ذقن للحلاقة</span>
          </div>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">اسم الموظف</th>
              <th scope="col">اسم العميل</th>
              <th scope="col">مبلغ الخصم (إن وجد)</th>
              <th scope="col">مكافأة من العميل</th>
              <th scope="col">الخدمة / المنتج</th>
              <th scope="col">الكمية</th>
              <th scope="col">سعر الخدمة / المنتج</th>
            </tr>
          </thead>
          <tbody v-if="selectedItems.length > 0">
            <tr :key="selectedItems[0].id">
              <td rowspan="{{ selectedItems.length }}">
                {{ this.order_info.employee.name }}
              </td>
              <td rowspan="{{ selectedItems.length }}">
                {{ this.order_info.client.name }}
              </td>
              <td rowspan="{{ selectedItems.length }}">
                {{ this.order_info.discount }}
              </td>
              <td rowspan="{{ selectedItems.length }}">
                {{ this.order_info.tip }}
              </td>
              <td>{{ selectedItems[0].name }}</td>
              <td>1</td>
              <td>{{ selectedItems[0].price }}</td>
            </tr>
            <tr v-for="item in selectedItems.slice(1)" :key="item.id">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{ item.name }}</td>
              <td>1</td>
              <td>{{ item.price }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>المجموع</td>
              <td></td>
              <td>{{ this.amount }}SAR</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">
                اتباع الخطوات لإصدار الفاتورة
                <br />
                اضغط على المنتجات أو الخدمات لإضافتها إلى الطلب
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 class="first-step">الخطوة الأولى:</h4>
      <span
        >إضغط على المنتجات أو الخدمات لإضافتها إلى الطلب لتكون ضمن الفاتورة .
      </span>

      <div class="services text-center">
        <div class="header">
          <div class="chosse-serv">
            <button v-on:click="makeActive('ProductsPage', $event)" class="btn">
              منتجات
            </button>
            <button
              class="btn blue"
              v-on:click="makeActive('ServicesPage', $event)"
            >
              خدمات
            </button>
          </div>
          <button @click="printDailyReport" class="btn blue-button">
            إنهاء فترة العمل
          </button>
          <router-link to="/AddServices">
            <!-- <button class="btn white-button">
              <fa icon="plus" /> أضف خدمة جديدة
            </button> -->
          </router-link>
        </div>
        <component v-bind:is="component"></component>
      </div>
      <br />
      <h4 class="first-step">الخطوة الثاني:</h4>
      <span>ادخل البيانات المطلوبة بالجدول ادناه لاصدار الفاتورة </span>
      <div class="row formDiv">
        <div class="col-lg-4 col-md-12">
          <label>الاسم العميل</label>
          <select
            v-model="order_info.client"
            data-live-search="true"
            class="selectpicker show-menu-arrow form-selec"
          >
            <option disabled selected value="">اختر عميل</option>
            <option
              v-for="client in allClients"
              :key="client.id"
              :value="{ id: client.id, name: client.name }"
            >
              {{ client.name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-12">
          <label>اسم الموظف</label>
          <select
            v-model="order_info.employee"
            data-live-search="true"
            class="selectpicker show-menu-arrow form-selec"
          >
            <option disabled selected value="">اختر موظف</option>
            <option
              v-for="employee in allEmployees"
              :key="employee.id"
              :value="{ id: employee.id, name: employee.name }"
            >
              {{ employee.name }}
            </option>
          </select>
        </div>

        <div class="col-lg-4 col-md-12">
          <label>اختر طريقة الدفع ({{ this.amountAfterDiscount }} SAR)</label>
          <div class="chosse">
            <button class="btn" @click="getActive($event, 'paymentCash')">
              كاش
            </button>
            <button class="btn" @click="getActive($event, 'paymentNetwork')">
              شبكة
            </button>
            <button @click="getActive($event, 'paymentBoth')" class="btn">
              معا
            </button>
          </div>
          <div class="row type-pay" v-show="isComponentVisible">
            <div class="col-6">
              <label>أدخل قيمة الكاش</label>
              <input
                v-model="order_info.onlineAmount"
                :placeholder="
                  order_info.onlineAmount !== null
                    ? order_info.onlineAmount
                    : 'أدخل قيمة الكاش'
                "
                class=""
                type="number"
              />
            </div>
            <div class="col-6">
              <label>أدخل قيمة الشبكة</label>
              <input
                v-model="order_info.cashAmount"
                class=""
                type="number"
                :placeholder="
                  order_info.cashAmount !== null
                    ? order_info.cashAmount
                    : 'أدخل قيمة الشبكة'
                "
              />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <label>مبلغ الخصم (إن وجد)</label>
          <input
            v-model="order_info.discount"
            type="number"
            placeholder="مبلغ الخصم"
          />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>مكافأة من العميل</label>
          <input
            v-model="order_info.tip"
            type="text"
            placeholder="ادخل قيمة مكافأة من العميل"
          />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>طريقة دفع المكافأة</label>
          <div class="chosse">
            <button class="btn" @click="getActive($event, 'tipCash')">
              كاش
            </button>
            <button class="btn" @click="getActive($event, 'tipNetwork')">
              شبكة
            </button>
            <!-- <button class="btn" @click="show">معا</button> -->
          </div>
          <!-- <div class="row type-pay" v-show="isVisible">
            <div class="col-6">
              <label>أدخل قيمة الشبكة</label>
              <input class="" type="text" placeholder="أدخل قيمة الكاش" />
            </div>
            <div class="col-6">
              <label>أدخل قيمة الكاش</label>
              <input class="" type="text" placeholder="أدخل قيمة الشبكة" />
            </div>
          </div> -->
        </div>
        <div class="error-message" v-if="errorMessage">
          {{ errorMessage }}
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
        <button :disabled="isLoading" @click="submitBill" class="btn bill">
          إصدار فاتورة
        </button>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
import ServicesPage from "@/components/ServicesPage.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import orderMixin from "@/Mixins/OrderMixin";
export default {
  name: "PointOfSales",
  components: {
    ServicesPage,
    ProductsPage,
  },
  mixins: [orderMixin],
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/customer/" +
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
      .then((data) => (this.allClients = data))
      .catch((err) => console.log(err.message));
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/employee/" +
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
      .then((data) => (this.allEmployees = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    makeActive: function (component, event) {
      this.component = component;
      event.target.classList.add("blue");
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
    },
    getActive: function (event, value) {
      const siblings = Array.from(event.target.parentNode.children).filter(
        (child) => child !== event.target
      );
      siblings.forEach((sibling) => {
        sibling.classList.remove("blue");
      });
      event.target.classList.add("blue");
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
      if (!this.isComponentVisible && value === "paymentBoth") {
        this.isComponentVisible = true;
      } else if (
        this.isComponentVisible &&
        (value === "tipCash" || value === "tipNetwork")
      ) {
        this.isComponentVisible = true;
      } else {
        this.isComponentVisible = false;
      }
      if (value === "paymentBoth") {
        this.order_info.paymentType = "both";
      }
      if (value === "paymentCash") {
        this.order_info.paymentType = "cash";
      }
      if (value === "paymentNetwork") {
        this.order_info.paymentType = "online";
      }
      if (value === "tipCash") {
        this.order_info.tipType = "cash";
      }
      if (value === "tipNetwork") {
        this.order_info.tipType = "online";
      }
    },
    sumProperty(array, property) {
      return array.reduce(
        (accumulator, currentValue) => accumulator + currentValue[property],
        0
      );
    },
    resetData() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    submitBill() {
      this.isLoading = true;
      if (
        (this.selectedServices.length === 0 &&
          this.selectedProducts.length === 0) ||
        this.order_info.employee.name === "غير محدد" ||
        this.order_info.client.name === "غير محدد" ||
        this.order_info.paymentType === null ||
        (this.order_info.tipType === null && this.order_info.tip !== null) ||
        (this.order_info.paymentType === "both" &&
          (this.order_info.onlineAmount === null ||
            this.order_info.cashAmount === null))
      ) {
        this.errorMessage = "أرجو إدخال كافة المعلومات المطلوبة للفاتورة.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 10000);
        this.isLoading = false;
      } else {
        const requestBody = {
          branch_id: localStorage.getItem("branch_id"),
          employee_id: this.order_info.employee.id,
          customer_id: this.order_info.client.id,
          services:
            this.selectedServices.length > 0
              ? this.selectedServices.map((obj) => obj.id)
              : null,
          products:
            this.selectedProducts.length > 0
              ? this.selectedProducts.map((obj) => obj.id)
              : null,
          products_count:
            this.selectedProducts.length > 0 ? this.productCount : null,
          amount: this.amount,
          amount_pay_type: this.order_info.paymentType,
          discount: this.order_info.discount,
          tip: this.order_info.tip,
          tip_pay_type: this.order_info.tipType,
          cash_amount: this.order_info.cashAmount,
          online_amount: this.order_info.onlineAmount,
        };
        this.deleteUnwantedInfo(requestBody);
        fetch("https://www.setrex.net/haircut/backend/public/api/order", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }).then((response) => {
          this.isLoading = false;
          if (response.ok) {
            // this.$store.commit("clearOrderData");
            // this.resetData();
            // window.location.reload();
            this.$router.push({ name: "SallesBills" });
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

            // const errorEntries = Object.entries(response.errors);

            // errorEntries.forEach(([fieldName, errorMessages]) => {
            //   console.log(`Field: ${fieldName}`);
            //   errorMessages.forEach((errorMessage) => {
            //     console.log(`Error: ${errorMessage}`);
            //   });
            // });
          }
        });
        // .catch((error) => {
        //   if (error.response.status === 400) {
        //     // Log the error details sent by the API
        //     console.error("Validation error:", error.response.data);
        //   } else {
        //     console.error("Failed to add a new bill:", error);
        //   }
        // });
      }
    },
    deleteUnwantedInfo(requestBody) {
      Object.keys(requestBody).forEach((key) => {
        if (requestBody[key] === null) {
          delete requestBody[key];
        }
      });
    },
    isNumber(value) {
      return typeof value === "number" && !isNaN(value);
    },
    computeOnlineAmount(cashAmount) {
      return this.amountAfterDiscount > 0
        ? this.amountAfterDiscount - cashAmount
        : null;
    },
    computeCashAmount(onlineAmount) {
      return this.amountAfterDiscount > 0
        ? this.amountAfterDiscount - onlineAmount
        : null;
    },
    printDailyReport() {
      this.$router.push({ name: "DiaryReport", query: { fromPOS: true } });
    },
  },
  computed: {
    selectedServices() {
      return this.$store.state.selectedServices;
    },
    selectedProducts() {
      const products = this.$store.state.selectedProducts;
      const selectedproducts = products.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.selling_price,
        };
      });
      return selectedproducts;
    },
    selectedItems() {
      return this.selectedServices.concat(this.selectedProducts);
    },

    amount() {
      return (
        this.sumProperty(this.selectedServices, "price") +
        this.sumProperty(this.selectedProducts, "price")
      );
    },
    amountAfterDiscount() {
      return this.isNumber(this.order_info.discount) &&
        this.order_info.discount !== null
        ? ((this.amount * (100 - this.order_info.discount)) / 100).toFixed(0)
        : this.amount;
    },
    productCount() {
      return Array(this.selectedProducts.length).fill(1);
    },
  },
  watch: {
    "order_info.cashAmount": function (newCashAmount) {
      if (!isNaN(newCashAmount)) {
        // If cashAmount is a valid number, update onlineAmount
        this.order_info.onlineAmount = this.computeOnlineAmount(newCashAmount);
      }
    },
    "order_info.onlineAmount": function (newOnlineAmount) {
      if (!isNaN(newOnlineAmount)) {
        // If onlineAmount is a valid number, update cashAmount
        this.order_info.cashAmount = this.computeCashAmount(newOnlineAmount);
      }
    },
  },
  data() {
    return {
      isComponentVisible: false,
      isLoading: false,
      // isVisible: false,
      errorMessage: "",
      component: "ServicesPage",
      allClients: [],
      allEmployees: [],
      errors: [],
      order_info: {
        tip: null,
        discount: null,
        employee: { name: "غير محدد" },
        client: { name: "غير محدد" },
        tipType: null,
        paymentType: null,
        cashAmount: null,
        onlineAmount: null,
      },
    };
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
}
.pointOfSales {
  direction: rtl;
  width: 77%;
}
tr:last-of-type td {
  background-color: #ebedf7;
  font-weight: 500;
}
tr:last-of-type td:last-of-type {
  color: #1a2669;
  font-weight: 600;
}
.pointOfSales h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.pointOfSales p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.pointOfSales .extra-table {
  display: flow-root;
}
.pointOfSales .input-container {
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 2vh;
  font-weight: 500;
  text-align: start;
}
.pointOfSales .input-container img {
  margin-left: 4vh;
  background: #fefefe;
  padding: 4px;
  border-radius: 9px;
  box-shadow: 0px 0px 15px 0px #00000040;
  width: 5%;
}

.pointOfSales .all-table {
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  margin-bottom: 5vh;
}
.pointOfSales table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
}

tbody,
td,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.pointOfSales table thead tr th,
.pointOfSales table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.pointOfSales table tr td,
.pointOfSales table tr th {
  color: #1a2669;
}
.pointOfSales table tr td span {
  border: 1px solid #3f51b5;
  padding: 0.5vh 2vh;
  border-radius: 5px;
  color: #757de8;
}
.pointOfSales .first-step {
  display: inline;
}

.pointOfSales span {
  color: #1a2669;
}
.pointOfSales .formDiv {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1.5px solid #3f51b5;
  border-radius: 8px;
  margin-top: 5vh;
  padding: 2vh;
  margin-bottom: 5vh;
}
.pointOfSales label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.pointOfSales input,
.pointOfSales .form-selec {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 100%;
  outline: none;
}
.pointOfSales input::placeholder,
.pointOfSales .form-selec::placeholder {
  color: #1a2669;
}
.pointOfSales button.bill {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
}
.pointOfSales .chosse {
  background: #ebedf7;
  border-radius: 8px;
  color: #6a6b6f;
  font-weight: 600;
}
.pointOfSales .chosse button {
  width: 33%;
}
.pointOfSales .chosse button:hover {
  background: #3f51b5;
  color: #fff;
}
.pointOfSales .type-pay {
  margin-top: 2vh;
}
.type-pay label {
  color: #1a2669;
}
.pointOfSales .type-pay input {
  font-size: 1.5vmin;
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
  .pointOfSales {
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
  .pointOfSales {
    width: 100%;
  }
  /* .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
  } */
  .services .header .chosse-serv {
    width: auto !important;
  }
}

@media (max-width: 540px) {
  /* .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  } */
  .services .header button {
    float: right !important;
  }
}

.services {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1px solid #3f51b5;
  border-radius: 8px;
  padding: 4vh 2vh;
  text-align: center;
  margin-top: 5vh;
}
.services .header {
  display: flow-root;
  margin-bottom: 4vh;
}
.services .header button,
.services .header .chosse-serv {
  display: inline-block;
  width: auto;
}
.services .header .chosse-serv {
  float: right;
  border: 1px solid #3f51b5;
  color: #1a2669;
  border-radius: 8px;
  background: #ebedf7;
  width: 30%;
  outline: none;
}
.services .header .chosse-serv button {
  width: 50%;
}
.services .chosse-serv button:hover {
  background: #3f51b5;
  color: #fff;
}
.services .header button {
  float: left;
}
.pointOfSales .white-button {
  background: #fff;
  border: 1px solid #3f51b5;
  color: #3f51b5;
}
.pointOfSales .blue-button {
  background: #3f51b5;
  border: 1px solid #fff;
  color: #fff;
  margin-right: 2vh;
}
</style>
