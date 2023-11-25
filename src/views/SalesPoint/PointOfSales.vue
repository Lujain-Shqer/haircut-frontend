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
          <tbody>
            <tr>
              <td>علي إسماعيل</td>
              <td>عامر يوسف</td>
              <td>67</td>
              <td>234</td>
              <td>صبغة ذقن اسود</td>
              <td>
                <span>1</span>
              </td>
              <td><span>15.00</span> SAR</td>
            </tr>
            <tr>
              <td>المجموع</td>
              <td></td>
              <td>197.60</td>
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
          <button class="btn blue-button">إنهاء فترة العمل</button>
          <router-link to="/AddServices">
            <button class="btn white-button">
              <fa icon="plus" /> أضف خدمة جديدة
            </button>
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
          <input type="text" placeholder="عميل افتراضي" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>اسم الموظف</label>
          <select class="form-selec" aria-label="Default select example">
            <option selected>اختر الموظف</option>
            <option value="1">السيد صابر</option>
            <option value="2">محمد عصام</option>
            <option value="3">أشرف عبدالعزيز</option>
          </select>
        </div>

        <div class="col-lg-4 col-md-12">
          <label>اختر طريقة الدفع</label>
          <div class="chosse">
            <button class="btn" @click="getActive">كاش</button>
            <button class="btn" @click="getActive">شبكة</button>
            <button @click="showComponent" class="btn">معا</button>
          </div>
          <div class="row type-pay" v-show="isComponentVisible">
            <div class="col-6">
              <label>أدخل قيمة الشبكة</label>
              <input class="" type="text" placeholder="أدخل قيمة الكاش" />
            </div>
            <div class="col-6">
              <label>أدخل قيمة الكاش</label>
              <input class="" type="text" placeholder="أدخل قيمة الشبكة" />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <label>مبلغ الخصم (إن وجد)</label>
          <input type="text" placeholder="مبلغ الخصم" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>مكافأة من العميل</label>
          <input type="text" placeholder="ادخل قيمة مكافأة من العميل" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>طريقة دفع المكافأة</label>
          <div class="chosse">
            <button class="btn" @click="getActive">كاش</button>
            <button class="btn" @click="getActive">شبكة</button>
            <button class="btn" @click="show">معا</button>
          </div>
          <div class="row type-pay" v-show="isVisible">
            <div class="col-6">
              <label>أدخل قيمة الشبكة</label>
              <input class="" type="text" placeholder="أدخل قيمة الكاش" />
            </div>
            <div class="col-6">
              <label>أدخل قيمة الكاش</label>
              <input class="" type="text" placeholder="أدخل قيمة الشبكة" />
            </div>
          </div>
        </div>
        <button class="btn bill">إصدار فاتورة</button>
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
  // mounted() {
  //   this.$store.commit("clearSelectedServices");
  // },
  methods: {
    makeActive: function (component, event) {
      this.component = component;
      event.target.classList.add("blue");
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
      console.log(this.component);
    },
    getActive: function (event) {
      event.target.classList.add("blue");
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      }
    },
    showComponent(event) {
      event.target.classList.add("blue");
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    show(event) {
      const siblings = Array.from(event.target.parentNode.children).filter(
        (child) => child !== event.target
      );
      console.log(siblings);
      event.target.classList.add("blue");
      // <li v-for="(value, key) in event">
      // </li>
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
      if (this.isVisible) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    },
  },
  data() {
    return {
      isComponentVisible: false,
      isVisible: false,
      component: "ServicesPage",
      payment: "",
      reward: "",
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
  width: 80%;
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

@media (max-width: 991px) {
  .pointOfSales {
    width: 70%;
  }
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
}
@media (max-width: 765px) {
  .pointOfSales {
    width: 100%;
  }
  .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
  }
  .services .header .chosse-serv {
    width: auto !important;
  }
}

@media (max-width: 540px) {
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
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
