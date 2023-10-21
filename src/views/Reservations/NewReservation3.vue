<template>
  <div class="newReservation3">
    <div class="container">
      <h4>نقطة البيع</h4>
      <p>
        تهدف الي اصدار فاتورة خاص بالزبون , حيث يساعد في تبسيط عمليات البيع
        وتسريعها، ويسهل على البائع إصدار الفواتير وتسجيل المعاملات بشكل دقيق .
      </p>
      <h6 class="first-step">الخطوة الثالثة:</h6>
      <span>اضغط على تاريخ الحجز لتكون بالفاتورة من حيث المواعيد . </span>
      <div class="control_wrapper">
        <ejs-calendar :isMultiSelection="isMultiSelection"></ejs-calendar>
      </div>
      <h6 class="first-step">تفاصيل حجز الجديد</h6>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table text-center">
          <img src="../../assets/salePoints/salon.png" />
          <span class="">صالون شعر ذقن للحلاقة</span>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">اسم الموظف</th>
              <th scope="col">تاريخ الحجز</th>
              <th scope="col">الخدمة</th>
              <th scope="col">مدة العمل</th>
              <th scope="col">سعر لخدمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>
              <td>صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>

              <td scope="row">صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>

              <td scope="row">صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>

              <td scope="row">صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="button-container">
        <router-link to="/NewReservation2">
          <button class="btn">رجوع</button>
        </router-link>
        <router-link to="/NewReservation4">
          <button class="btn">التالي</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "NewReservation3",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isMultiSelection: true,
    };
  },
};
</script>
<style scoped>
.control_wrapper {
  max-width: 250px;
  margin: 2vh auto;
  border-radius: 10px;
}
.e-calendar {
  border-radius: 10px;
}

.e-calendar .e-content td.e-focused-date.e-today span.e-day {
  color: #3f51b5 !important;
}
.row {
  margin: 0;
}
.newReservation3 {
  direction: rtl;
  width: 80%;
}
.newReservation3 h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.newReservation3 p {
  color: #1a2669;
  font-weight: 400;
}
.e-calendar .e-content span.e-day {
  color: #757de8;
}
.newReservation3 .first-step {
  display: inline-block;
  margin-top: 5vh;
  color: #3f51b5;
}
.newReservation3 span {
  color: #1a2669;
}

.newReservation3 .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 80%;
}
.newReservation3 .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation3 .extra-table img {
  margin-left: 2vh;
  background: #fefefe;
  padding: 4px;
  border-radius: 9px;
  box-shadow: 0px 0px 4px -1px #14141412;

  box-shadow: 0px 0px 6px -1px #1414141f;
  width: 5%;
}
.newReservation3 .extra-table span {
  color: #3f51b5;
}

.newReservation3 table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.newReservation3 table tr td,
.newReservation3 table tr th {
  color: #1a2669;
}
.newReservation3 table .td {
  font-weight: 700;
}
.newReservation3 table thead tr th,
.newReservation3 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.newReservation3 .button-container {
  width: 100%;
  text-align: center;
}
.newReservation3 button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: 5vh 1vh 0;
}

@media (max-width: 991px) {
  .newReservation3 {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .newReservation3 {
    width: 100%;
  }
}
.e-calendar .e-header .e-title {
  color: #757de8 !important;
}
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
.control_wrapper .e-calendar .e-header .e-title,
.e-bigger.e-small .e-calendar .e-header .e-title {
  color: #757de8 !important;
}
</style>
