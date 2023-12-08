<template>
  <div class="NewReservation">
    <div class="container">
      <h4>حجوزات اليوم</h4>
      <router-link to="/ShowReservations"
        ><button class="btn">عرض التقويم</button></router-link
      >
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>الحجوزات الجديدة</span>
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
              <th scope="col">التاريخ الحجز</th>
              <th scope="col">الاسم العميل</th>
              <th scope="col">رقم هاتف العميل</th>
              <th scope="col">التوقيت</th>
              <th scope="col">الموظف</th>

              <th scope="col">الخدمات</th>
              <th scope="col">الاجراءات</th>
            </tr>
          </thead>
          <tbody v-if="appointmentsToDisplay.length > 0">
            <tr v-for="reserve in appointmentsToDisplay" :key="reserve.id">
              <td>{{ reserve.date }}</td>
              <td>{{ reserve.customerName }}</td>
              <td>{{ reserve.customerPhoneNumber }}</td>
              <td>{{ reserve.time }}</td>
              <td>{{ reserve.employee }}</td>
              <td>
                <ul>
                  <li v-for="service in reserve.services" :key="service.id">
                    {{ service.name }}
                  </li>
                </ul>
              </td>
              <td>
                <button
                  @click="deleteAppointment(reserve.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
                <router-link
                  :to="{
                    name: 'UpdateReservation',
                    params: { id: reserve.id },
                  }"
                >
                  <button class="btn show"><fa icon="pen" /> تعديل</button>
                </router-link>

                <button class="btn show">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td>لا يوجد حجوزات لعرضها</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="appointments.length"
              @page-change="changePage"
            ></paginationFoot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationFoot from "/src/components/PaginationFoot.vue";
export default {
  name: "NewReservation",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      isComponentVisible: false,
      appointmentsPerPage: 7,
      currentPage: 1,
      appointments: [],
    };
  },
  computed: {
    appointmentsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.appointmentsPerPage;
      const endIndex = startIndex + this.appointmentsPerPage;
      return this.appointments.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.appointments.length / this.appointmentsPerPage);
    },
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
        this.appointments = data.map((obj) => {
          return this.proccessReservation(obj);
        });
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteAppointment(appointmentId) {
      fetch("http://127.0.0.1:8001/api/reservation/" + appointmentId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.appointments = this.appointments.filter(
              (appointment) => appointment.id !== appointmentId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting appointment:", error);
        });
    },

    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    showDate(reservation) {
      const regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
      const match = reservation.date.match(regex);
      let year, month, day;
      if (match) {
        [, year, month, day] = match;
      }
      year = parseInt(year, 10);
      month = parseInt(month, 10);
      day = parseInt(day, 10);
      return year + "-" + month + "-" + day;
    },
    showTime(reservation) {
      const regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
      const match = reservation.date.match(regex);
      let hour, minutes;
      if (match) {
        [, , , , hour, minutes] = match;
      }
      hour = parseInt(hour, 10);
      minutes = parseInt(minutes, 10);
      // Creating a new Date object with the provided hour and minutes
      let startTime = new Date();
      startTime.setHours(hour);
      startTime.setMinutes(minutes);

      // Calculating endTime by adding total_duration to startTime
      let endTime = new Date(
        startTime.getTime() + reservation.total_duration * 60 * 1000
      );

      // Formatting startTime and endTime for display
      const formattedStartTime = startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const formattedEndTime = endTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      return formattedStartTime + "-" + formattedEndTime;
    },
    proccessReservation(reservation) {
      const new_reserv = {};
      new_reserv.id = reservation.id;
      new_reserv.employee = reservation.employee.name;
      new_reserv.services = reservation.services;
      new_reserv.customerName = reservation.customer.name;
      new_reserv.customerPhoneNumber = reservation.customer.phone_number;
      new_reserv.time = this.showTime(reservation);
      new_reserv.date = this.showDate(reservation);
      return new_reserv;
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
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
.NewReservation h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
  direction: rtl;
  display: inline-block;
}
.NewReservation button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  float: left;
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
.NewReservation .extra-table ul {
  line-height: 1.1;
  font-size: 1.5vmin;
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
.NewReservation table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.NewReservation table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
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
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
