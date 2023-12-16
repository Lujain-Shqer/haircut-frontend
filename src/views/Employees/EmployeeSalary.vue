<template>
  <div class="employeesalary">
    <div class="container">
      <h4>مسير الرواتب</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="name">
            <fa icon="calendar" /> <span> تقرير مسير الرواتب :</span>
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
              <th scope="col">كود الموظف</th>
              <th scope="col">الاسم</th>
              <th scope="col">الوظيفة</th>
              <th scope="col">نوع الأجر</th>
              <th scope="col">الأجر</th>
              <th scope="col">عمولات أخرى</th>
              <th scope="col">إجمالي الاستحقاق</th>
              <th scope="col">الخصومات</th>
              <th scope="col">السلفيات</th>
              <th scope="col">الصافي</th>
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
              <td>234</td>
              <td>678</td>
              <td>09</td>
              <td>234</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
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
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "EmployeeSalary",
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
.employeesalary {
  direction: rtl;
  width: 77%;
}
.employeesalary h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeesalary p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.employeesalary .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeesalary .extra-table .name {
  width: auto;
  float: right;
  color: #3f51b5;
}
.employeesalary .extra-table .name svg {
  padding-left: 1vh;
}
.employeesalary .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.employeesalary .extra-table button:first-of-type,
.employeesalary .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.employeesalary .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.employeesalary table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
  text-align: center;
}
.employeesalary table tfoot {
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

.employeesalary table thead tr th,
.employeesalary table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.employeesalary table tr td,
.employeesalary table tr th {
  color: #1a2669;
}
.employeesalary table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.employeesalary table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.employeesalary table .update {
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
  .employeesalary {
    width: 70%;
  }
  .extra-table {
    width: 185%;
  }
  .table {
    width: 205%;
  }
}
@media (max-width: 765px) {
  /* .container {
    max-width: 650px;
  } */
  .employeesalary {
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
    width: 255%;
  }
  .table {
    width: 276%;
  }
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
