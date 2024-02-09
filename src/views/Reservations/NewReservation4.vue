<template>
  <div class="newReservation4">
    <div class="container">
      <h4>نقطة البيع</h4>
      <p>
        تهدف الي اصدار فاتورة خاص بالزبون , حيث يساعد في تبسيط عمليات البيع
        وتسريعها، ويسهل على البائع إصدار الفواتير وتسجيل المعاملات بشكل دقيق .
      </p>
      <h5 class="first-step">الخطوة الرابعة:</h5>
      <span>ادخل ساعة الحجز لتكون بالفاتورة من حيث المواعيد . </span>
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
        v-model="client"
        @change="selectClient"
        data-live-search="true"
        class="selectpicker show-menu-arrow form-selec"
      >
        <option
          v-for="client in allClients"
          :key="client.id"
          :value="{ id: client.id, name: client.name }"
        >
          {{ client.name }}
        </option>
      </select>
      <h4 class="first-step">تفاصيل حجز الجديد</h4>
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
              <th scope="col">اسم العميل</th>
              <th scope="col">ساعة الحجز</th>
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
              <td rowspan="{{ selectedServices.length }}">
                {{ selectedClient.name }}
              </td>
              <td rowspan="{{ selectedServices.length }}">
                {{ selectedHour }}
              </td>
              <td>{{ selectedServices[0].name }}</td>
              <td>{{ selectedServices[0].duration }} دقائق</td>
              <td>{{ selectedServices[0].price }}</td>
            </tr>
            <tr v-for="service in selectedServices.slice(1)" :key="service.id">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{ service.name }}</td>
              <td>{{ service.duration }} دقائق</td>
              <td>{{ service.price }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">لم يتم اختيار أي خدمة</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="error-message" v-if="errorMessage">
        {{ errorMessage }}
      </div>
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
        <router-link to="/NewReservation3">
          <button class="btn">رجوع</button>
        </router-link>
        <button :disabled="isLoading" @click="addReserve" class="btn">
          إنهاء الطلب
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import reservationMixin from "@/Mixins/ReservationMixin";
export default {
  name: "NewReservation4",
  mixins: [reservationMixin],
  data() {
    return {
      allClients: [],
      client: "",
      hour: "",
      minute: "",
      errorMessage: "",
      isLoading: false,
      errors: [],
    };
  },
  mounted() {
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
    selectedHour() {
      return this.$store.state.reserveHour;
    },
    selectedClient() {
      return this.$store.state.reserveClient;
    },
    totalAmount() {
      return this.selectedServices.reduce((total, obj) => total + obj.price, 0);
    },
    totalDuration() {
      return this.selectedServices.reduce(
        (total, obj) => total + obj.duration,
        0
      );
    },
  },
  methods: {
    addReserve(event) {
      event.preventDefault();
      this.isLoading = true;
      if (
        this.selectedServices.length === 0 ||
        this.selectedEmployee.name === "غير محدد" ||
        this.selectedClient.name === "غير محدد" ||
        this.selectedHour === "غير محدد" ||
        this.selectedDate === "غير محدد"
      ) {
        this.errorMessage = "أرجو إدخال كافة المعلومات المطلوبة للحجز.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 10000);
      } else {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/reservation",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              branch_id: localStorage.getItem("branch_id"),
              employee_id: this.selectedEmployee.id,
              customer_id: this.selectedClient.id,
              services: this.selectedServices.map((service) => service.id),
              date: this.selectedDate + " " + this.selectedHour,
              total_duration: this.totalDuration,
              total_amount: this.totalAmount,
            }),
          }
        )
          .then((response) => {
            this.isLoading = false;
            if (response.ok) {
              this.$router.push({ name: "ShowReservations" });
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
          })
          .catch((error) => {
            console.error("Error adding reservation:", error);
          });
      }
    },
    selectClient() {
      // this.selectedEmployee = employeeName;
      this.$store.commit("addClient", this.client);
    },
    selectDate() {
      this.$store.commit(
        "addHour",
        `${this.padZero(this.hour)}:${this.padZero(this.minute)}`
      );
    },
    padZero(value) {
      return value.toString().padStart(2, "0");
    },
    validateMinute() {
      if (this.minute < 0 || this.minute > 59) {
        this.minute = "";
      }
      this.selectDate();
    },
    validateHour() {
      if (this.hour < 0 || this.hour > 23) {
        this.hour = "";
      }
      this.selectDate();
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.newReservation4 {
  direction: rtl;
  width: 77%;
}
.newReservation4 h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.newReservation4 p {
  color: #1a2669;
  font-weight: 400;
}
.newReservation4 .first-step {
  display: inline-block;
  color: #3f51b5;
}
.newReservation4 span {
  color: #1a2669;
}
.newReservation4 input {
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
.newReservation4 input ~ span {
  font-size: 5vmin;
  margin: 1vh;
}
.newReservation4 .times {
  margin-top: 5vh;
}
.newReservation4 ul {
  display: inline-block;
  color: #1a2669;
  list-style: none;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  margin: 0px 3vh;
}
/* .newReservation4 ul li {
  padding: 10px;
} */
.newReservation4 ul li:hover {
  background: #ebedf7;
}
.newReservation4 label {
  display: block;
  margin-top: 2vh;
  margin-bottom: 2vh;

  font-weight: 500;
  color: #3f51b5;
}
.newReservation4 .form-selec {
  border: 1px solid #1a2669;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  display: block;
}
.newReservation4 .form-selec ~ .first-step {
  margin-top: 2vh;
}
.newReservation4 .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 1vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 80%;
}
.newReservation4 .extra-table {
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation4 .extra-table span {
  color: #3f51b5;
}
.newReservation4 .extra-table img {
  margin-left: 2vh;
  background: #fefefe;
  padding: 4px;
  border-radius: 9px;
  box-shadow: 0px 0px 4px -1px #14141412;

  box-shadow: 0px 0px 6px -1px #1414141f;
  width: 6%;
}

.newReservation4 table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.newReservation4 table tr td,
.newReservation4 table tr th {
  color: #1a2669;
  font-weight: 400;
}
.newReservation4 table .td {
  font-weight: 700;
}
.newReservation4 table thead tr th,
.newReservation4 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.newReservation4 .button-container {
  width: 100%;
  text-align: center;
}
.newReservation4 button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: 5vh 1vh;
  padding: 1vh 4vh;
}
.error-message {
  display: block;
  padding: 1vh;
  text-align: start;
  color: red;
}

.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}

@media (max-width: 991px) {
  .newReservation4 {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .newReservation4 {
    width: 100%;
  }
  .newReservation4 .control-table {
    width: 100%;
  }
  .newReservation4 .form-selec {
    width: auto;
  }
  .newReservation4 h5 {
    display: block;
    width: 100%;
  }
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
