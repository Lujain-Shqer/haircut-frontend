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
        <ejs-calendar
          :isMultiSelection="isMultiSelection"
          @change="handleDateChange"
        ></ejs-calendar>
      </div>
      <h6 class="first-step">تفاصيل حجز الجديد</h6>
      <div class="control-table">
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
          <tbody v-if="selectedServices.length > 0">
            <tr :key="selectedServices[0].id">
              <td rowspan="{{ selectedServices.length }}">
                {{ selectedEmployee.name }}
              </td>
              <td rowspan="{{ selectedServices.length }}">
                {{ selectedDate }}
              </td>
              <td>{{ selectedServices[0].name }}</td>
              <td>{{ selectedServices[0].duration }} دقائق</td>
              <td>{{ selectedServices[0].price }}</td>
            </tr>
            <tr v-for="service in selectedServices.slice(1)" :key="service.id">
              <td></td>
              <td></td>
              <td>{{ service.name }}</td>
              <td>{{ service.duration }} دقائق</td>
              <td>{{ service.price }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">لم يتم اختيار أي خدمة</td>
            </tr>
          </tbody>

          <!-- <thead>
            <tr>
              <th :rowspan="selectedServices.length" scope="col">اسم الموظف</th>
              <th :rowspan="selectedServices.length" scope="col">
                تاريخ الحجز
              </th>
              <th scope="col">الخدمة</th>
              <th scope="col">مدة العمل</th>
              <th scope="col">سعر لخدمة</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="service in selectedServices" :key="service.id">
              <td>{{ selectedEmployee }}</td>
              <td>{{ selectedDate }}</td>
              <td>{{ service.name }}</td>
              <td>{{ service.duration }} دقائق</td>
              <td>{{ service.price }}</td>
            </tr>
          </tbody> -->
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
import { format } from "date-fns";
import reservationMixin from "@/Mixins/ReservationMixin";
export default {
  name: "NewReservation3",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  mixins: [reservationMixin],
  data() {
    return {
      isMultiSelection: true,
      // selectedDate: null,
    };
  },
  computed: {
    selectedServices() {
      return this.$store.state.selectedServices;
    },
    selectedDate() {
      return this.$store.state.reserveDate;
    },
    selectedEmployee() {
      return this.$store.state.reserveEmployee;
    },
  },
  methods: {
    handleDateChange(args) {
      const selectedDate = format(args.value, "yyyy-MM-dd");
      console.log("Selected Date:", selectedDate);
      this.$store.commit("addDate", selectedDate);
    },
  },
};
</script>
<style>
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
  padding: 1vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 60%;
}
.newReservation3 .extra-table {
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
  width: 8%;
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
.newReservation3 .control-table table tr td,
.newReservation3 .control-table table tr th {
  color: #1a2669;
}
.newReservation3 table .td {
  font-weight: 700;
}
.newReservation3 table thead tr th,
.newReservation3 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3 !important;
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
  width: auto;
  margin: 5vh 1vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .newReservation3 {
    width: 70%;
  }
  .newReservation3 .control-table {
    width: 80%;
  }
}
@media (max-width: 765px) {
  .newReservation3 .control-table {
    width: 100%;
  }
  .newReservation3 {
    width: 100%;
  }
  .newReservation3 .control-table {
    overflow-x: auto;
  }
}

@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
.control_wrapper {
  width: 400px;
  margin: 2vh auto;
}
.e-calendar {
  width: 350px;
  max-width: none;
  box-shadow: 0px 0px 8px 0px #00000040;
  padding: 0 1vh;
  border-radius: 10px;
}
.control_wrapper .e-calendar .e-header .e-title,
.e-bigger.e-small .e-calendar .e-header .e-title {
  color: #757de8;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: -10vh;
}

.e-calendar .e-header .e-date-icon-next::before {
  content: "\27F5";
  position: absolute;
  left: 0;
  top: 20vh;
  font-size: 2.4vmin;
}
.e-calendar .e-header .e-date-icon-prev::before {
  content: "\2192";
  position: absolute;
  right: 0;
  top: 20vh;
  font-size: 3vmin;
}
.e-calendar .e-header span,
.e-bigger.e-small .e-calendar .e-header span {
  font-size: 5vh;
  font-weight: 900;
  color: #1a2669;
}
.e-calendar table thead tr th {
  background: transparent;
  color: #757de8 !important;
  font-weight: 700;
  text-transform: uppercase;
}
.e-calendar table tbody tr td {
  color: #3f51b5;
}
.e-calendar .e-content td.e-focused-date.e-today span.e-day,
.e-bigger.e-small .e-calendar .e-content td.e-focused-date.e-today span.e-day {
  background: #3f51b5;
  border: 1px solid #3f51b5;
  box-shadow: none;
  color: #fff;
  border-radius: 10px;
}
.e-calendar .e-content td.e-selected span.e-day,
.e-calendar .e-content td.e-today.e-selected span.e-day,
.e-bigger.e-small .e-calendar .e-content td.e-today.e-selected span.e-day {
  background: #3f51b5;
  border: 1px solid #3f51b5;
  border-radius: 10px;
  color: #fff;
}
.e-btn.e-flat.e-primary,
.e-css.e-btn.e-flat.e-primary {
  display: none;
}
.e-calendar .e-header .e-icon-container,
.e-bigger.e-small .e-calendar .e-header .e-icon-container {
  /* display: none; */
}
.e-calendar .e-content table {
  margin-top: -2vh;
  padding: 0 5vh;
}
.e-calendar .e-content td.e-selected span.e-day:hover,
.e-bigger.e-small .e-calendar .e-content td.e-selected:hover,
.e-calendar .e-content td.e-today span.e-day,
.e-calendar .e-content td.e-today span.e-day:hover {
  background: #3f51b5 !important;
  border: 1px solid #3f51b5 !important;
  border-radius: 10px;
  color: #fff !important;
}
.e-calendar .e-content.e-month td,
.e-calendar .e-content.e-month td:hover {
  background: transparent !important;
}
.app ~ div {
  display: none !important;
}
</style>
