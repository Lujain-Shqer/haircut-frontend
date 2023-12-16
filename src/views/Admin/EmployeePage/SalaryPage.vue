<template>
  <div class="salaryPage">
    <div class="container">
      <h4>الرواتب</h4>
      <p>يتم إضافة الرواتب تلقائيا عند نهاية كل شهر</p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>إقفال حسابات الرواتب</span>
          </div>
          <button class="btn">EXCEL</button>

          <button class="btn">بحث بالتاريخ</button>

          <button class="btn" @click="showComponent">
            من الفترة -> إلى الفترة
          </button>
        </div>
        <div class="control_wrapper" v-show="isComponentVisible">
          <ejs-calendar></ejs-calendar>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">كود الموظف</th>
              <th scope="col">الموظف</th>
              <th scope="col">الأجر</th>
              <th scope="col">الاستقطاع</th>
              <th scope="col">البيان</th>

              <th scope="col">المتبقي</th>
              <th scope="col">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>55900</td>
              <td>أشرف عبدالعزيز</td>
              <td class="row">
                <div class="col-5">الراتب :</div>
                <div class="col-5">2000</div>
                <div class="col-5">العمولة :</div>
                <div class="col-5">9%</div>
              </td>
              <td>150</td>
              <td>خصومات</td>
              <td>1850</td>
              <td>
                <button class="btn update">سدد</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
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
  name: "SalaryPage",
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
.salaryPage {
  direction: rtl;
  width: 77%;
}
.salaryPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.salaryPage p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.salaryPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.salaryPage .input-container {
  float: right;
  display: contents;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.salaryPage .input-container svg {
  padding-left: 2vh;
}

.salaryPage .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
  float: left;
}
.extra-table button:first-of-type,
.salaryPage .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.salaryPage .all-table {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.salaryPage table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  text-align: center;
}
.salaryPage table tr td.row div:nth-child(odd) {
  color: #3f51b5;
  font-weight: 600;
}
.salaryPage table tfoot {
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

.salaryPage table thead tr th,
.salaryPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.salaryPage table tr td,
.salaryPage table tr th {
  color: #1a2669;
}
.salaryPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.salaryPage table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.salaryPage table .update {
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
  .salaryPage {
    width: 70%;
  }
  .salaryPage select {
    width: 50%;
  }
  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
}
@media (max-width: 765px) {
  .salaryPage {
    width: 100%;
  }
  /* .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
  } */
}

@media (max-width: 540px) {
  .salaryPage select {
    width: 80%;
  }
  /* .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  } */
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
