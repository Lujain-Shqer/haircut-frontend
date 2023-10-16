<template>
  <div class="pointOfSales">
    <div class="container">
      <h3>نقطة البيع</h3>
      <p>
        هي نظام يُستخدم لإتمام معاملات البيع ومعالجة المدفوعات في صالونات
        الحلاقة. تُعد نقطة البيع واحدة من أهم الأدوات في إدارة الأعمال التجارية
        وتشمل العديد من الوظائف والمميزات التي تساعد في تيسير العمليات وزيادة
        الكفاءة.
      </p>
      <div class="all-table text-center" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="barbbar" />
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
              <td>1</td>
              <td>15.00</td>
            </tr>
            <tr>
              <td>علي إسماعيل</td>
              <td>عامر يوسف</td>
              <td>67</td>
              <td>234</td>
              <td>صبغة ذقن اسود</td>
              <td>1</td>
              <td>15.00</td>
            </tr>
            <tr>
              <td>علي إسماعيل</td>
              <td>عامر يوسف</td>
              <td>67</td>
              <td>234</td>
              <td>صبغة ذقن اسود</td>
              <td>1</td>
              <td>15.00</td>
            </tr>
            <tr>
              <td>علي إسماعيل</td>
              <td>عامر يوسف</td>
              <td>67</td>
              <td>234</td>
              <td>صبغة ذقن اسود</td>
              <td>1</td>
              <td>15.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="first-step">الخطوة الأولى:</h3>
      <span
        >إضغط على المنتجات أو الخدمات لإضافتها إلى الطلب لتكون ضمن الفاتورة .
      </span>

      <div class="services text-center">
        <div class="header">
          <div class="chosse-serv">
            <button class="btn" v-on:click="component = 'ProductsPage'">
              منتجات
            </button>
            <button class="btn" v-on:click="component = 'ServicesPage'">
              خدمات
            </button>
          </div>
          <button class="btn blue-button">إنهاء فترة العمل</button>
          <button class="btn white-button">أضف خدمة جديدة</button>
        </div>
        <component v-bind:is="component"></component>
      </div>
      <br />
      <h3 class="first-step">الخطوة الثاني:</h3>
      <span>ادخل البيانات المطلوبة بالجدول ادناه لاصدار الفاتورة </span>
      <form class="row">
        <div class="col-lg-4 col-md-12">
          <label>الاسم العميل</label>
          <input type="text" placeholder="إضافة اسم العميل" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>اسم الموظف</label>
          <input type="text" placeholder="إضافة هاتف العميل" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>اختر طريقة الدفع</label>
          <div class="chosse">
            <button class="btn">كاش</button>
            <button class="btn">شبكة</button>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <label>مبلغ الخصم (إن وجد)</label>
          <input type="text" placeholder="إضافة اسم العميل" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>اسم الموظف</label>
          <input type="text" placeholder="إضافة هاتف العميل" />
        </div>
        <div class="col-lg-4 col-md-12">
          <label>طريقة دفع المكافأة</label>
          <div class="chosse">
            <button class="btn">كاش</button>
            <button class="btn">شبكة</button>
          </div>
        </div>
        <button class="btn bill">إصدار فاتورة</button>
      </form>
    </div>
  </div>
  <router-view />
</template>
<script>
import ServicesPage from "@/components/ServicesPage.vue";
import ProductsPage from "@/components/ProductsPage.vue";
export default {
  name: "PointOfSales",
  components: {
    ServicesPage,
    ProductsPage,
  },
  data() {
    return {
      component: "ServicesPage",
    };
  },
};
</script>

<style scoped>
.row {
  margin: 0;
}
.pointOfSales {
  direction: rtl;
  width: 80%;
}
.pointOfSales h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.pointOfSales p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.pointOfSales .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.pointOfSales .input-container {
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
  text-align: start;
}
.pointOfSales .input-container svg {
  padding-left: 2vh;
}

.pointOfSales .all-table {
  margin: 2vh 0;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.pointOfSales table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
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
}
.pointOfSales table tr td,
.pointOfSales table tr th {
  color: #1a2669;
}
.pointOfSales .first-step {
  display: inline;
}
.pointOfSales span {
  color: #1a2669;
}
.pointOfSales form {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1.5px solid #3f51b5;
  border-radius: 8px;
  margin-top: 5vh;
  padding: 2vh;
}
.pointOfSales label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.pointOfSales input {
  border: 1px solid #3f51b5;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.pointOfSales input::placeholder {
  color: #3f51b5;
}
.pointOfSales button.bill {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}
.pointOfSales .chosse {
  background: #ebedf7;
  width: 70%;
  border-radius: 8px;
  color: #6a6b6f;
  font-weight: 600;
}
.pointOfSales .chosse button {
  width: 50%;
}
.pointOfSales .chosse button:hover {
  background: #3f51b5;
  color: #fff;
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
  border: 1.5px solid #3f51b5;
  border-radius: 8px;
  padding: 6vh 2vh;
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
}
.services .header .chosse-serv {
  float: right;
  border: 1px solid #3f51b5;
  color: #1a2669;
  border-radius: 8px;
  /* padding: 1vh; */
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
