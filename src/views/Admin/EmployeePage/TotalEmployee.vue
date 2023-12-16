<template>
  <div class="totalEmployee">
    <div class="container">
      <h4>تقرير موظف أجمالي</h4>
      <p>
        تقرير الموظف الإجمالي هو وثيقة تُستخدم لتلخيص وتوثيق معلومات وأداء موظف
        معين خلال فترة زمنية معينة. يتم إعداد هذا التقرير لأغراض متنوعة، بما في
        ذلك تقييم الأداء واتخاذ القرارات الإدارية والإحصاءات العامة حول العمل
        الذي يقوم به الموظف.
      </p>
      <h6>لإظهار بيانات موظف أجمالي يلزم اختيار المراد البحث عنه</h6>
      <select class="form-selec" aria-label="Default select example">
        <option selected>اختر الموظف</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
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
              <th scope="col">بداية الفترة</th>
              <th scope="col">إجمالي الفواتير</th>
              <th scope="col">إجمالي الإيراد</th>
              <th scope="col">العمولات</th>
              <th scope="col">المدفوعات</th>

              <th scope="col">المجموع</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ص11:54 | 2023-09-05</td>
              <td>الراتب</td>
              <td>2000</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
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
          <tr>
            <td>الأحصائيات</td>
            <td></td>
            <td>70002</td>
            <td>0.00</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "TotalEmployee",
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
}
.totalEmployee {
  direction: rtl;
  width: 77%;
}
.totalEmployee h4,
.totalEmployee h6 {
  color: #3f51b5;
  font-weight: 700px;
}
.totalEmployee h6 {
  margin-bottom: 2vh;
}
.totalEmployee p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.totalEmployee .form-selec {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh 4vh;
  width: auto;
  outline: none;
}

.totalEmployee .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.totalEmployee .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.totalEmployee input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.listOftotalEmployeeEmployee input::placeholder {
  color: #3f51b5;
}
.totalEmployee .input-container svg {
  padding-left: 0.2vh;
}

.totalEmployee .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
  float: left;
}
.extra-table button:first-of-type,
.totalEmployee .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.totalEmployee .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.totalEmployee table {
  margin-bottom: 0;
  text-align: center;
}
.totalEmployee table tfoot {
  border-radius: 8px;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.totalEmployee table thead tr th,
.totalEmployee table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.totalEmployee table tr td,
.totalEmployee table tr th {
  color: #1a2669;
}
.totalEmployee table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.totalEmployee table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.totalEmployee table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 991px) {
  .totalEmployee {
    width: 70%;
  }
  .totalEmployee select {
    width: 50%;
  }
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
}
@media (max-width: 765px) {
  .totalEmployee {
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
  .totalEmployee select {
    width: 80%;
  }
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
