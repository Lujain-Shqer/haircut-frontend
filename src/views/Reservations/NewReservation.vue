<template>
  <div class="NewReservation">
    <div class="container">
      <h4>سجل تصفية الموظفين</h4>
      <p>
        سجل تصفية الموظفين هو وثيقة تُستخدم لتوثيق وتسجيل جميع التفاصيل
        والإجراءات المتعلقة بتصفية موظف بعد انتهاء علاقته الوظيفية مع منشأة
        معينة. يتم استخدام هذا السجل لأغراض إدارة الموارد البشرية والشفافية في
        الإجراءات
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>سجل تصفية الموظفين</span>
          </div>
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
  name: "NewReservation",
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
  float: left;
}
.e-calendar {
  margin: auto;
}
.row {
  margin: 0;
}
.NewReservation {
  direction: rtl;
  width: 80%;
}
.NewReservation h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.NewReservation p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.NewReservation .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.NewReservation .input-container {
  float: right;
  display: contents;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.NewReservation .input-container svg {
  padding-left: 2vh;
}

.NewReservation .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
  float: left;
}

.NewReservation .extra-table button:first-of-type {
  float: left;
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
}
.NewReservation .extra-table button:last-of-type {
  width: auto;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.NewReservation .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.NewReservation table {
  margin-bottom: 0;
  text-align: center;
}
.NewReservation table tfoot {
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

.NewReservation table thead tr th,
.NewReservation table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.NewReservation table tr td,
.NewReservation table tr th {
  color: #1a2669;
}
.NewReservation table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.NewReservation table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 991px) {
  .NewReservation {
    width: 70%;
  }
  .NewReservation select {
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
  .NewReservation {
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
  .NewReservation select {
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
