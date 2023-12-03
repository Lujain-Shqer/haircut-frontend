<template>
  <div class="employeeSalary">
    <div class="container">
      <h4>الرواتب الموظفين</h4>
      <p>يتم إضافة الرواتب تلقائيا عند نهاية كل شهر</p>
      <h6>لإظهار بيانات الخاص بالراتب يلزم اختيار المراد البحث عنه</h6>
      <select class="form-selec" aria-label="Default select example">
        <option selected>اختر الموظف</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>رصيد الموظف</span>
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
              <th scope="col">التاريخ</th>
              <th scope="col">البند</th>
              <th scope="col">الرصيد الافتتاحي</th>
              <th scope="col">الخصومات والسلفيات</th>
              <th scope="col">له</th>

              <th scope="col">عليه</th>
              <th scope="col">رصيد الأغلاق</th>
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
              <td>0.00</td>
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
  name: "EmployeesSalary",
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
  position: fixed;
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
.employeeSalary {
  direction: rtl;
  width: 80%;
}
.employeeSalary h4,
.employeeSalary h6 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeeSalary p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.employeeSalary .form-selec {
  border: 1px solid #c8c9cc;
  color: #3f51b5;
  border-radius: 8px;
  padding: 0.5vh 4vh;
  width: auto;
  outline: none;
  margin-top: 2vh;
}
.employeeSalary .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeeSalary .input-container {
  float: right;
  display: contents;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.employeeSalary .input-container svg {
  padding-left: 2vh;
}

.employeeSalary .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
  float: left;
}
.extra-table button:first-of-type,
.employeeSalary .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.employeeSalary .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.employeeSalary table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  text-align: center;
}
.employeeSalary table tfoot {
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

.employeeSalary table thead tr th,
.employeeSalary table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.employeeSalary table tr td,
.employeeSalary table tr th {
  color: #1a2669;
}
.employeeSalary table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.employeeSalary table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.v table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.employeeSalary table .update {
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
  .employeeSalary {
    width: 70%;
  }
  .employeeSalary select {
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
  .employeeSalary {
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
  .employeeSalary select {
    width: 80%;
  }
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
