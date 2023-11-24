<template>
  <div class="showReservations">
    <div class="container">
      <h4>حجوزات اليوم</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="">
        <ejs-schedule
          height="550px"
          :eventSettings="appointmentData"
        ></ejs-schedule>
      </div>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Week } from "@syncfusion/ej2-vue-schedule";

export default {
  name: "ShowReservations",
  components: {
    "ejs-schedule": ScheduleComponent,
  },
  provide: {
    schedule: [Week],
  },
  data() {
    return {
      appointmentData: {
        dataSource: [
          {
            Subject: "الاسم الموظف:" + "فارس الحربي",
            StartTime: "التوقيت" + new Date(2023, 10, 13, 8, 0),
            EndTime: new Date(2023, 10, 13, 10, 30),
          },
          {
            Subject: "الاسم الموظف:" + "فارس الحربي",
            StartTime: "التوقيت" + new Date(2023, 10, 5, 10, 0),
            EndTime: new Date(2023, 10, 5, 10, 50),
          },
        ],
      },
    };
  },
};
</script>
<style>
.row {
  margin: 0;
}
.showReservations {
  width: 80%;
}
.showReservations h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
  direction: rtl;
}
.showReservations p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
  direction: rtl;
}
.e-schedule .e-vertical-view .e-header-cells .e-header-day {
  display: table;
  font-size: 13px;
  line-height: unset;
  padding-bottom: 0;
  color: #71717a;
  text-transform: uppercase;
}
.e-schedule .e-vertical-view .e-header-cells .e-header-date {
  font-size: 3vmin;
}
.e-schedule .e-vertical-view .e-time-cells-wrap table td,
.e-schedule .e-vertical-view .e-header-cells .e-header-day {
  font-weight: 900;
}
.e-toolbar .e-toolbar-items.e-tbar-pos .e-toolbar-right {
  display: none;
}
.e-schedule
  .e-vertical-view
  .e-day-wrapper
  .e-appointment:not(.e-schedule-event-clone) {
  cursor: default;
  background: #cdefff;
  font-weight: 100;
  color: #1a2669;
  border-left: 4px solid #0ea5e9;
  width: 100% !important;
  direction: rtl;
  padding: 0 0 8vh;
}
.e-popup.e-popup-open {
  display: none;
}
.e-schedule .e-vertical-view .e-header-cells.e-current-day,
.e-schedule .e-vertical-view .e-current-time {
  color: #0ea5e9;
}
.e-schedule .e-vertical-view .e-current-timeline,
.e-schedule .e-vertical-view .e-previous-timeline {
  border-top: 1px solid #0ea5e9;
}
.e-popup.e-popup-open.e-dialog {
  display: none;
}
.e-dlg-container {
  display: none !important;
}
.e-schedule {
}

@media (max-width: 991px) {
  .showReservations {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .showReservations {
    width: 100%;
  }
}
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
