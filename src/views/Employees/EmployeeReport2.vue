<template>
  <div class="employeeReport">
    <div class="container">
      <h4>تقرير الموظف (مفصل)</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <h6>لإظهار بيانات تقرير الموظف المفصل يلزم اختيار المراد البحث عنه</h6>
      <select class="form-selec" aria-label="Default select example">
        <option selected>اختر الموظف</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="row personal-information">
        <div class="col-xl-6 col-lg-8 col-md-12">
          <div class="row">
            <div class="col-4 text-center">
              <img src="../../assets/Vector.png" />
              <h6>المعلومات الشخصية</h6>
            </div>
            <div class="col-8 information">
              <div class="row">
                <h6 class="col-6"><fa icon="user" /> الاسم:</h6>
                <span class="col-6">أشرف عبد العزيز</span>
              </div>
              <div class="row">
                <h6 class="col-6"><fa icon="coins" /> نوع الأجر:</h6>
                <span class="col-6">راتب و عمولة</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-12 stay-info">
          <h6><fa icon="id-card" />معلومات الإقامة:</h6>
          <div class="row">
            <span class="col-6">الرقم:</span>
            <span class="col-6">أشرف عبد العزيز</span>
            <span class="col-6">تاريخ الانتهاء:</span>
            <span class="col-6">راتب و عمولة</span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-12 healthy-info">
          <h6><fa icon="heartbeat" /> معلومات الرقم الصحي:</h6>
          <div class="row">
            <span class="col-6">الرقم:</span>
            <span class="col-6">أشرف عبد العزيز</span>
            <span class="col-6">تاريخ الانتهاء:</span>
            <span class="col-6">راتب و عمولة</span>
          </div>
        </div>
      </div>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <select class="form-selec" aria-label="Default select example">
            <option selected>اختر الموظف</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn" @click="showComponent">
            من الفترة -> إلى الفترة
          </button>
        </div>

        <div class="control_wrapper" v-show="isComponentVisible">
          <ejs-calendar
            :isMultiSelection="isMultiSelection"
            @change="handleDateChange"
          ></ejs-calendar>
        </div>

        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">التاريخ</th>
              <th scope="col">رقم الفاتورة</th>
              <th scope="col">القيمة</th>
              <th scope="col">طريقة الدفع</th>
              <th scope="col">نوع الخدمة</th>
              <th scope="col">العمولة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>561</td>
              <td>علي أحدم</td>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
          </tfoot>
        </table>
      </div>
      <div class="row personal-information per-info">
        <div class="col-xl-4 col-lg-6 col-md-12 img-info">
          <div class="row">
            <img src="../../assets/six.png" class="col-6" />
            <div class="col-6">
              <h6><fa icon="coins" />متوسط الدخل الشهري:</h6>
              <span>456.00</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-12 healthy-info">
          <h6><fa icon="file-text" />متوسط الفواتير الشهري:</h6>
          <span>456.00</span>
        </div>
        <div class="col-xl-2 col-lg-6 col-md-12 stay-info">
          <h6><fa icon="fas fa-divide" />متوسط الدخل اليومي:</h6>
          <span>456.00</span>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-12 healthy-info">
          <h6><fa icon="file-text" />متوسط عدد الفواتير اليومي:</h6>
          <span>456.00</span>
        </div>
      </div>
      <div class="row personal-information per-info r">
        <div class="col-xl-4 col-lg-6 col-md-12 img-info">
          <div class="row">
            <img src="../../assets/five.png" class="col-6" />
            <div class="col-6">
              <h6 style="color: #1cd123">
                <fa icon="coins" /> الخدمة الأكثر مبيعا :
              </h6>
              <span>شعر &ذقن</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-12 healthy-info">
          <h6 style="color: #ff2f22">
            <fa icon="fas fa-divide " /> الخدمة الأقل مبيعا :
          </h6>
          <span>صبغة ذقن شامبو</span>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-12 stay-info">
          <h6><fa icon="cut" /> خدمات لم تبع أبدا:</h6>
          <ul class="row">
            <div class="col-lg-4 col-sm-12">
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
            </div>
            <div class="col-lg-4 col-sm-12">
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
            </div>
            <div class="col-lg-4 col-sm-12">
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "EmployeeReport",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isComponentVisible: false,
    };
  },
  methods: {
    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
  },
};
</script>
<style scoped>
.control_wrapper {
  position: absolute;
  z-index: 1111111111111;
  margin: auto;
  width: 100%;
}
.e-calendar {
  margin: 0 auto;
}
.row {
  margin: 0;
  justify-content: space-around;
}
.employeeReport {
  direction: rtl;
  width: 80%;
}
.employeeReport h4,
h5,
h6 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeeReport h6 {
  margin-bottom: 2vh;
}
.employeeReport p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.employeeReport .personal-information {
  box-shadow: 0px 0px 8px 0px #00000040;
  padding: 4vh 1vh;
  border-radius: 8px;
  font-size: 1.7vmin;
  margin: 4vh 0;
}
.employeeReport .personal-information h6 {
  font-weight: 600;
  color: #1a2669;
}
.employeeReport .personal-information span:nth-child(odd) {
  color: #1a2669;
  font-weight: 600;
}
.employeeReport .personal-information span:nth-child(even) {
  color: #3f51b5;
  font-weight: 500;
}
.employeeReport .personal-information .healthy-info,
.employeeReport .personal-information .stay-info {
  padding-top: 2vh;
  border-right: 2px solid #757de882;
}
.employeeReport .personal-information img {
  width: 20%;
  margin-bottom: 1vh;
}
.employeeReport .personal-information .information {
  margin: auto;
}
.employeeReport .personal-information .information span {
  line-height: 3;
}
.employeeReport .personal-information svg {
  margin-left: 1vh;
  background: #f7f7f7;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #14141412;

  box-shadow: 0px 0px 6px -1px #1414141f;
  color: #1a2669;
}
.employeeReport .form-selec {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh 4vh;
  width: auto;
  outline: none;
}

.employeeReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeeReport .form-select {
  width: auto;
  display: inline;
  float: right;
  color: #3f51b5;
  font-weight: 500;
  margin: 0;
}
.employeeReport .input-container svg {
  color: #000;
  padding-left: 2vh;
}

.employeeReport .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.employeeReport .extra-table button:first-of-type,
.employeeReport .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.employeeReport .all-table {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.employeeReport table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.employeeReport table tfoot {
  border-radius: 8px;
  font-weight: 300;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.employeeReport table thead tr th,
.employeeReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.employeeReport table tr td,
.employeeReport table tr th {
  color: #1a2669;
}
.employeeReport table .td {
  font-weight: 700;
}
.employeeReport table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.employeeReport table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
.employeeReport .per-info span {
  display: block;
  margin-top: 5vh;
}
.employeeReport .per-info .img-info {
  margin: auto;
  padding-top: 2vh;
}
.employeeReport .per-info .img-info img {
  width: 40%;
}
.employeeReport .per-info h6 {
  font-size: 2vmin;
}
.employeeReport .per-info span {
  text-align: center;
}
.employeeReport .per-info ul {
  padding-top: 1.8vmin;
}
.employeeReport .per-info li {
  color: #3f51b5;
}
@media (max-width: 991px) {
  .employeeReport {
    width: 70%;
  }
  .employeeReport .healthy-info,
  .employeeReport .stay-info {
    margin-top: 4vh;
    border-right: 0 !important;
  }
  .employeeReport select {
    width: 50%;
  }
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
  .employeeReport .per-info .img-info img,
  .employeeReport .personal-information img {
    width: 25%;
  }
}
@media (max-width: 765px) {
  .employeeReport {
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
  .employeeReport select {
    width: 80%;
  }
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
  .employeeReport .per-info .img-info img {
    width: 30%;
  }
  .employeeReport .per-info h6 {
    font-size: medium;
  }
  .employeeReport .personal-information span:nth-child(even) {
    font-size: small;
  }
  .employeeReport .personal-information span:nth-child(odd) {
    font-size: medium;
  }
  .employeeReport .per-info li {
    font-size: small;
  }
  /* .employeeReport .personal-information img {
    width: 100%;
  } */

  .employeeReport .personal-information .information {
    width: 100%;
  }
  .employeeReport .per-info .img-info img,
  .employeeReport .personal-information img {
    width: 50%;
  }
}
</style>
