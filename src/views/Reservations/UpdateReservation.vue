<template>
  <div class="updateReservation">
    <div class="container">
      <h4>تعديل حجز</h4>
      <h6 class="first-step">الخطوة الأولى:</h6>
      <span>إضغط على المنتجات أو الخدمات لتعديلها ضمن الفاتورة . </span>
      <div class="services text-center">
        <ServicesPage :selectedServices="selectedServices" />
      </div>
      <h6 class="first-step">الخطوة الثانية:</h6>
      <span>إضغط على اسم الموظف ليتعدل اسمه ضمن الفاتورة . </span>
      <div class="employees">
        <div class="row">
          <div
            v-for="employee in this.employees"
            :key="employee.id"
            @click="selectEmployee(employee)"
            :class="{
              active: reserv_info.employee_id === employee.id,
            }"
            class="employee col-lg-3 col-md-6 col-xs-12 text-center"
          >
            <img src="../../assets/Vector.png" />
            <h6>الاسم الموظف</h6>
            <span>السيد {{ employee.name }}</span>
          </div>
        </div>
      </div>
      <h6 class="first-step">الخطوة الثالثة:</h6>
      <span>اضغط على تاريخ الحجز ليتعدل ضمن الفاتورة . </span>
      <ejs-calendar @change="handleDateChange"></ejs-calendar>
      <h6 class="first-step">الخطوة الرابعة:</h6>
      <span>ادخل ساعة الحجز لتتعدل ضمن الفاتورة . </span>
      <div class="row times">
        <div class="col-xl-6 col-sm-12">
          <h5 class="first-step">الساعة:</h5>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <input
            min="0"
            max="59"
            v-model="minute"
            type="number"
            @input="validateMinute"
          />
          <span>:</span>
          <input
            min="0"
            max="23"
            v-model="hour"
            type="number"
            @input="validateHour"
          />
        </div>
      </div>
      <label>اختر اسم العميل</label>
      <select
        v-model="reserv_info.customer_id"
        data-live-search="true"
        class="selectpicker show-menu-arrow form-selec"
      >
        <option
          v-for="client in allClients"
          :key="client.id"
          :value="client.id"
        >
          {{ client.name }}
        </option>
      </select>
      <div v-if="errors.length > 0">
        <ul style="margin-top: 30px">
          <li
            class="error-mes"
            dir="rtl"
            v-for="(error, index) in errors"
            :key="index"
          >
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="button-container">
        <button @click="updateReservation" class="btn">إنهاء الطلب</button>
      </div>
    </div>
  </div>
</template>
<script>
import ServicesPage from "@/components/ServicesPage.vue";
import reservationMixin from "@/Mixins/ReservationMixin";
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import { format } from "date-fns";
export default {
  name: "UpdateReservation",
  components: {
    ServicesPage,
    "ejs-calendar": CalendarComponent,
  },
  mixins: [reservationMixin],
  params: ["id"],
  data() {
    return {
      employees: [],
      allClients: [],
      errors: [],
      isLoading: false,
      hour: "",
      minute: "",
      selectedDate: "",
      reserv_info: {
        services: [],
        employee_id: "",
        date: "",
        total_duration: "",
        total_amount: "",
        customer_id: "",
      },
    };
  },
  mounted() {
    fetch(
      "/https://www.setrex.net/haircut/backend/public/api/employee/" +
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
      .then((data) => (this.employees = data))
      .catch((err) => console.log(err.message));
    fetch(
      "/https://www.setrex.net/haircut/backend/public/api/customer/" +
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
      .then((data) => (this.allClients = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    updateReservation(event) {
      event.preventDefault();
      this.isLoading = true;
      this.totalAmount();
      this.totalDuration();
      this.reserv_info.services = this.selectedServices.map(
        (service) => service.id
      );
      this.deleteUnwantedInfo();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/reservation/" +
          this.$route.params.id,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.reserv_info),
        }
      ).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "NewReservation" });
          return response.json();
        } else if (response.status === 400) {
          response.json().then((data) => {
            const errors = data.errors;
            if (errors) {
              if (this.errors.length > 0) {
                this.errors = [];
              }
              if (typeof errors === "string") {
                this.errors.push(errors);
              } else {
                Object.values(errors).forEach((errorMessages) => {
                  errorMessages.forEach((errorMessage) => {
                    this.errors.push(errorMessage);
                  });
                });
              }
              setTimeout(() => {
                this.errors = [];
              }, 10000);
            }
          });
        }
      });
    },

    selectEmployee(employee) {
      this.reserv_info.employee_id = employee.id;
    },
    handleDateChange(args) {
      const selectedDate = format(args.value, "yyyy-MM-dd");
      this.selectedDate = selectedDate;
    },
    selectDate() {
      return this.padZero(this.hour) + ":" + this.padZero(this.minute);
    },
    padZero(value) {
      return value.toString().padStart(2, "0");
    },
    validateMinute() {
      // Ensure minute is within the valid range
      if (this.minute < 0 || this.minute > 59) {
        this.minute = ""; // Or any default value or error handling
      }
      this.reserv_info.date = this.selectedDate + " " + this.selectDate();
    },
    validateHour() {
      // Ensure hour is within the valid range
      if (this.hour < 0 || this.hour > 23) {
        this.hour = ""; // Or any default value or error handling
      }
      this.reserv_info.date = this.selectedDate + " " + this.selectDate();
    },
    totalAmount() {
      this.reserv_info.total_amount = this.selectedServices.reduce(
        (total, obj) => total + obj.price,
        0
      );
    },
    totalDuration() {
      this.reserv_info.total_duration = this.selectedServices.reduce(
        (total, obj) => total + obj.duration,
        0
      );
    },
    deleteUnwantedInfo() {
      Object.keys(this.reserv_info).forEach((key) => {
        if (
          this.reserv_info[key] === "" ||
          this.reserv_info[key].length === 0 ||
          this.reserv_info[key] === 0
        ) {
          delete this.reserv_info[key];
          console.log(key);
        }
      });
    },
  },
  computed: {
    selectedServices() {
      return this.$store.state.selectedServices;
    },
    isOnReservationPage() {
      return this.$store.state.isOnReservationPage;
    },
  },
  // watch: {
  //   selectedServices: {
  //     handler(newSelectedServices) {
  //       // Update reserv_info.services when selectedServices changes
  //       this.reserv_info.services = newSelectedServices.map(
  //         (service) => service.id
  //       );
  //     },
  //     immediate: true, // Trigger the handler immediately to initialize the value
  //   },
  // },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.updateReservation {
  direction: rtl;
  width: 77%;
}

.updateReservation h4 {
  color: #3f51b5;
  font-weight: 700px;
}

.updateReservation p {
  color: #1a2669;
  font-weight: 400;
}

.updateReservation .first-step {
  display: inline-block;
  margin-top: 5vh;
  color: #3f51b5;
}

.updateReservation span {
  color: #1a2669;
}

/* .updateReservation img {
  margin-left: 4vh;
  background: #fefefe;
  padding: 4px;
  border-radius: 9px;
  box-shadow: 0px 0px 4px -1px #14141412;

  box-shadow: 0px 0px 6px -1px #1414141f;
  width: 8%;
} */

.updateReservation button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin: 5vh auto;
  display: block;
  padding: 1vh 4vh;
}
.active {
  border: 1px solid #3f51b5;
}
.updateReservation .employees {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1px solid #3f51b5;
  border-radius: 8px;
  padding: 3vh;
  margin-top: 2vh;
}
.updateReservation .employees .employee {
  margin-bottom: 2vh;
}
.updateReservation .employees h6 {
  color: #1a2669;
  margin: 1vh 0;
}

.updateReservation .employees span {
  color: #3f51b5;
}
.updateReservation input {
  background: #ebedf7;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  width: 8vh;
  height: 8vh;
  outline: none;
  color: #1a2669;
  color: #1a2669;
  font-size: 4vh;
  text-align: center;
  font-weight: 500;
}
.updateReservation input ~ span {
  font-size: 5vmin;
  margin: 1vh;
}
.updateReservation ul {
  display: inline-block;
  color: #1a2669;
  list-style: none;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  margin: 0px 3vh;
}
.updateReservation ul li:hover {
  background: #ebedf7;
}
.updateReservation label {
  display: block;
  margin-top: 2vh;
  margin-bottom: 2vh;

  font-weight: 500;
  color: #3f51b5;
}
.updateReservation .times {
  margin-top: 5vh;
}
.updateReservation .form-selec {
  border: 1px solid #1a2669;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  display: block;
}
.updateReservation .form-selec ~ .first-step {
  margin-top: 2vh;
}
.newReservation4 .button-container {
  width: 100%;
  text-align: center;
}
.e-calendar .e-header .e-title {
  color: #757de8;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: -10vh;
}
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
@media (max-width: 991px) {
  .updateReservation {
    width: 70%;
  }
}

@media (max-width: 765px) {
  .updateReservation {
    width: 100%;
  }
}

@media (max-width: 540px) {
}

.services {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1.5px solid #3f51b5;
  border-radius: 8px;
  padding: 2vh;
  text-align: center;
  margin-top: 5vh;
}
</style>
