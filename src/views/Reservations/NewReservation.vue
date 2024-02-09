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
            <fa icon="search" />
            <input
              class="input-field"
              type="text"
              placeholder="البحث عن..."
              v-model="searchQuery"
              @keyup.enter="search"
            />
          </div>
          <button class="btn" @click="searchByDate">بحث بالتاريخ</button>

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

                <button class="btn show" @click="elementPdf(reserve.id)">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">{{ info }}</td>
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
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import PaginationFoot from "/src/components/PaginationFoot.vue";
import { format } from "date-fns";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Fonts = {
  arabic: {
    normal: "Amiri-Regular.ttf",
    bold: "Amiri-Bold.ttf",
    italics: "Amiri-Slanted.ttf",
    bolditalics: "Amiri-BoldSlanted.ttf",
  },
};
export default {
  name: "NewReservation",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isComponentVisible: false,
      isMultiSelection: true,
      info: "يتم التحميل .......",
      searchQuery: "",
      appointmentsPerPage: 7,
      currentPage: 1,
      appointments: [],
      selectedDate: [],
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
    this.fetchAllAppointments();
  },
  methods: {
    fetchAllAppointments() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/reservation/" +
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
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    handleDateChange(args) {
      const dateString = format(args.value, "yyyy-MM-dd");

      if (!this.selectedDate.includes(dateString)) {
        this.selectedDate.push(dateString);

        if (this.selectedDate.length > 2) {
          this.selectedDate.shift();
        }
      }
    },
    updateMessage() {
      if (this.appointments.length > 0) {
        this.info = "";
      } else {
        this.info = "لا يوجد حجوزات لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/reservation/" +
          localStorage.getItem("branch_id"),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: this.searchQuery,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          this.appointments = data.map((obj) => {
            return this.proccessReservation(obj);
          });
          this.updateMessage();
        })
        .catch((err) => console.log(err.message));
    },
    searchByDate(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.appointments = [];
      } else {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/filter-reservation/" +
            localStorage.getItem("branch_id"),
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              start_date: this.selectedDate[0],
              end_date: this.selectedDate[1],
            }),
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(
                "يجب أن يكون تاريخ بداية الفترة أصغر من تاريخ نهاية الفترة "
              );
            }
          })
          .then((data) => {
            this.appointments = data;
            this.updateMessage();
            // if (this.appointments.length === 0) {
            //   this.info = "لا يوجد في الفترة المحددة حجوزات لعرضها";
            // }
          })
          .catch((err) => {
            this.appointments = [];
            this.info = err.message;
          });
      }
    },
    deleteAppointment(appointmentId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/reservation/" +
          appointmentId,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            this.appointments = this.appointments.filter(
              (appointment) => appointment.id !== appointmentId
            );
            this.updateMessage();
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
      new_reserv.totalDuration = reservation.total_duration;
      new_reserv.totalAmount = reservation.total_amount;
      return new_reserv;
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    reverseTextToRtl(text) {
      return text.split(" ").reverse().join(" ");
    },
    containsArabic(text) {
      const arabicRegex = /[\u0600-\u06FF]/;
      return arabicRegex.test(text);
    },
    elementPdf(id) {
      const reserve = this.appointments.find((reserve) => reserve.id === id);
      const reserveServices = reserve.services.map((service) => ({
        text: this.containsArabic(service.name)
          ? this.reverseTextToRtl(service.name)
          : service.name,
        alignment: "center",
      }));
      const docDefinition = {
        content: [
          {
            text: this.reverseTextToRtl("حجز  في الصالون"),
            style: "header",
          },
          {
            style: "tableExample",
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  { text: "Reserveation id", alignment: "center" },
                  { text: reserve.id, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("رقم الحجز"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Reservation issue date", alignment: "center" },
                  {
                    text: reserve.date,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("تاريخ الحجز"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Reservation time", alignment: "center" },
                  {
                    text: reserve.time,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("التوقيت"),
                    alignment: "center",
                  },
                ],

                [
                  { text: "Total duration", alignment: "center" },
                  {
                    text: "دقيقة " + reserve.totalDuration,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("مدة الحجز الكلية"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Total amount", alignment: "center" },
                  { text: reserve.totalAmount, alignment: "center" },
                  {
                    text: this.reverseTextToRtl("المبلغ الكلي"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Employee name", alignment: "center" },
                  {
                    text: this.containsArabic(reserve.employee)
                      ? this.reverseTextToRtl(reserve.employee)
                      : reserve.employee,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("اسم الموظف"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Customer name", alignment: "center" },
                  {
                    text: this.containsArabic(reserve.customerName)
                      ? this.reverseTextToRtl(reserve.customerName)
                      : reserve.customerName,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("اسم الزبون"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Customer phone number", alignment: "center" },
                  {
                    text: this.containsArabic(reserve.customerPhoneNumber)
                      ? this.reverseTextToRtl(reserve.customerPhoneNumber)
                      : reserve.customerPhoneNumber,
                    alignment: "center",
                  },
                  {
                    text: this.reverseTextToRtl("رقم الزبون"),
                    alignment: "center",
                  },
                ],
                [
                  { text: "Services", alignment: "center" },
                  {
                    stack: reserveServices,
                  },
                  {
                    text: this.reverseTextToRtl("الخدمات"),
                    alignment: "center",
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: function (i, node) {
                return i === 0 || i === node.table.body.length ? 1 : 0;
              },
              // vLineWidth: function (i, node) {
              //   return i === 0 || i === node.table.widths.length ? 2 : 1;
              // },
              hLineColor: function (i, node) {
                return i === 0 || i === node.table.body.length
                  ? "gray"
                  : "white";
              },
              vLineColor: function () {
                return "white";
              },
              // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              // paddingLeft: function(i, node) { return 4; },
              // paddingRight: function(i, node) { return 4; },
              // paddingTop: function(i, node) { return 2; },
              // paddingBottom: function(i, node) { return 2; },
              // fillColor: function (rowIndex, node, columnIndex) { return null; }
            },
          },
        ],
        styles: {
          tableHeader: {
            color: "#D3D3D3",
            bold: true,
          },
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
            alignment: "center",
          },
        },
        defaultStyle: {
          font: "arabic",
        },
      };
      pdfMake.createPdf(docDefinition, null, Fonts).open();
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllAppointments().then(() => {
          this.updateMessage();
        });
      }
    },
  },
};
</script>
<style>
.control_wrapper {
  position: absolute;
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
  width: 77%;
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
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.NewReservation .input-container svg {
  padding-left: 2vh;
}
.NewReservation input {
  border: 0;
  outline: none;
  color: #3f51b5;
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
  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
}
@media (max-width: 765px) {
  .NewReservation {
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
  /* .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  } */
}
</style>
