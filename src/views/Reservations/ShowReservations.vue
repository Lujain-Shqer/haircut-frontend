<template>
  <div class="showReservations">
    <div class="container">
      <h4>حجوزات اليوم</h4>
      <router-link to="/NewReservation"
        ><button class="btn">عرض القائمة</button></router-link
      >
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="sched" v-if="showReserve">
        <ejs-schedule
          height="550px"
          :eventSettings="appointmentData"
        ></ejs-schedule>
        <!-- <ejs-schedule height="550px"></ejs-schedule> -->
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
          // {
          //   Subject: "Abd: الاسم",
          //   StartTime: new Date(2023, 11, 26, 10, 30),
          //   EndTime: new Date(2023, 11, 26, 11, 30),
          // },
        ],
      },
      showReserve: false,
    };
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/reservation/" +
        localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.appointmentData.dataSource = data.map((obj) => {
          return this.proccessReservation(obj);
        });
        this.showReserve = true;
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    showSubject(reservation) {
      return "اسم الموظف : " + reservation.customer.name;
    },
    showTime(reservation) {
      const regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
      const match = reservation.date.match(regex);
      let year, month, day, hour, minutes;
      if (match) {
        [, year, month, day, hour, minutes] = match;
      }
      year = parseInt(year, 10);
      month = parseInt(month, 10);
      day = parseInt(day, 10);
      hour = parseInt(hour, 10);
      minutes = parseInt(minutes, 10);

      return new Date(year, month - 1, day, hour, minutes);
    },
    proccessReservation(reservation) {
      const new_reserv = {};
      new_reserv.Subject = this.showSubject(reservation);
      new_reserv.StartTime = this.showTime(reservation);
      new_reserv.EndTime = new Date(
        new_reserv.StartTime.getTime() + reservation.total_duration * 60 * 1000
      );
      return new_reserv;
    },
    showReservations() {
      for (const reservation of this.appointmentData.dataSource) {
        // Access properties of each reservation
        const subject = reservation.Subject;
        const startTime = reservation.StartTime;
        const endTime = reservation.EndTime;
        // Perform operations with the reservation data
        console.log(`Subject: ${subject}`);
        console.log(`Start Time: ${startTime}`);
        console.log(`End Time: ${endTime}`);
      }
    },
  },
};
</script>
<style>
.sched {
  margin: 2vh;
}
.row {
  margin: 0;
}

.showReservations {
  width: 77%;
}

.showReservations h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
  direction: rtl;
  display: inline-block;
  float: right;
}
.showReservations button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
}
.btn:hover {
  background: #3f51b5 !important;
  color: #fff !important;
  border: 1px solid #3f51b5 !important;
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
  overflow-x: auto;
}

@media (max-width: 991px) {
  .showReservations {
    width: 70%;
  }
  /* .extra-table {
    width: 200% !important;
  }
  .table {
    width: 210% !important;
  } */
  .e-schedule .e-table-container,
  .e-schedule-toolbar-container {
    width: 150%;
  }
}

@media (max-width: 765px) {
  .showReservations {
    width: 100%;
  }
  /* .extra-table {
    width: 230% !important;
  }
  .table {
    width: 250% !important;
  } */
  .e-schedule .e-table-container,
  .e-schedule-toolbar-container {
    width: 200%;
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
