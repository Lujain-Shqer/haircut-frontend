<template>
  <div class="salafiyatDiscounts">
    <div class="container">
      <h4>الخصومات والسلفيات</h4>
      <p>
        السلفيات هي مبالغ مالية تُعطى للعملاء أو الموظفين مقدمًا قبل تقديم
        الخدمة أو السلعة المقابلة. هذه المبالغ تُمنح عادة كجزء من اتفاق مسبق بين
        الطرفين ويجري تحصيلها في وقت لاحق.
      </p>
      <h6>
        لإظهار بيانات الخاص بالخصومات والسلفيات يلزم اختيار المراد البحث عنه
      </h6>
      <select class="form-selec" aria-label="Default select example">
        <option selected>اختر الموظف المراد البحث عنه</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="gift" />
            <span>تقرير الخصومات والسلفيات</span>
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
              <th scope="col">تاريخ الحركة</th>
              <th scope="col">البند</th>
              <th scope="col">القيمة</th>
              <th scope="col">المتبقي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
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
  name: "SalafiyatDiscounts",
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
.salafiyatDiscounts {
  direction: rtl;
  width: 77%;
}
.salafiyatDiscounts h4,
h6 {
  color: #3f51b5;
  font-weight: 700px;
}
.salafiyatDiscounts h6 {
  margin-bottom: 2vh;
}
.salafiyatDiscounts p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.salafiyatDiscounts .form-selec {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: auto;
  outline: none;
}

.salafiyatDiscounts .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.salafiyatDiscounts .input-container {
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.salafiyatDiscounts .input-container svg {
  padding-left: 2vh;
}

.salafiyatDiscounts .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.salafiyatDiscounts .extra-table button:first-of-type,
.salafiyatDiscounts .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.salafiyatDiscounts .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.salafiyatDiscounts table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
  text-align: center;
}
.salafiyatDiscounts table tfoot {
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

.salafiyatDiscounts table thead tr th,
.salafiyatDiscounts table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.salafiyatDiscounts table tr td,
.salafiyatDiscounts table tr th {
  color: #1a2669;
}
.salafiyatDiscounts table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.salafiyatDiscounts table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.salafiyatDiscounts table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.salafiyatDiscounts table .update {
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
  .salafiyatDiscounts {
    width: 70%;
  }
  .salafiyatDiscounts select {
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
  .salafiyatDiscounts {
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
  .salafiyatDiscounts select {
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
