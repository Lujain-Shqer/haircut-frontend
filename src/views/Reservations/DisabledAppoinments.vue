<template>
  <div class="disabledAppoinments">
    <div class="container">
      <h4>المواعيد المعطلة</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <div class="input-container">
          <h6>حجز المواعيد المعطلة</h6>
          <router-link to="/ShowDisabledAppoinments"
            ><button class="btn">قائمة المواعيد المعطلة</button></router-link
          >
        </div>
        <div class="row formDiv">
          <div class="col-lg-12">
            <label>تاريخ العطلة</label>
            <button class="btn calendar" @click="showComponent">
              اختر اليوم
            </button>
            <div class="control_wrapper" v-show="isComponentVisible">
              <ejs-calendar
                @change="handleDateChange"
                :showTodayButton="true"
              ></ejs-calendar>
            </div>
          </div>
          <div class="col-lg-12">
            <label>اسم الموظف</label>
            <select
              v-model="offDay_info.employee"
              class="form-selec"
              aria-label="Default select example"
            >
              <option disabled selected value="">اختر موظف</option>
              <option
                v-for="employee in allEmployees"
                :key="employee.id"
                :value="employee.id"
              >
                {{ employee.name }}
              </option>
            </select>
          </div>
          <div class="error-message" v-if="errorMessage">
            {{ errorMessage }}
          </div>
          <button
            :disabled="isLoading"
            @click="addDisabledAppointment"
            class="btn add"
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import { format } from "date-fns";
export default {
  name: "DisabledAppoinments",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isComponentVisible: false,
      allEmployees: [],
      errorMessage: "",
      isLoading: false,
      offDay_info: {
        selectedDay: "",
        employee: "",
      },
    };
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/employee/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.allEmployees = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    addDisabledAppointment(event) {
      event.preventDefault();
      this.isLoading = true;
      if (
        this.offDay_info.employee === "" ||
        this.offDay_info.selectedDay === ""
      ) {
        this.errorMessage =
          "أرجو إدخال كافة المعلومات المطلوبة لحجز موعد عطلة.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      } else {
        fetch("http://127.0.0.1:8001/api/stoped-reservation", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branch_id: localStorage.getItem("branch_id"),
            employee_id: this.offDay_info.employee,
            date: this.offDay_info.selectedDay,
          }),
        }).then((response) => {
          this.isLoading = false;
          if (response.ok) {
            this.$router.push({ name: "ShowDisabledAppoinments" });
            return response.json();
          }
        });
      }
    },

    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    handleDateChange(args) {
      this.offDay_info.selectedDay = format(args.value, "yyyy-MM-dd");
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
  float: right;
}
.row {
  margin: 0;
}
.disabledAppoinments {
  direction: rtl;
  width: 77%;
}

.disabledAppoinments h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.disabledAppoinments p {
  color: #1a2669;
  font-weight: 400;
}
.disabledAppoinments .update-info-client {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.disabledAppoinments .input-container {
  display: flow-root;
}
.disabledAppoinments h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
  display: inline-block;
}
.disabledAppoinments .input-container button {
  float: left;
}
.disabledAppoinments label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.disabledAppoinments .form-selec {
  border: 1px solid #ccc;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  outline: none;
  margin-bottom: 2vh;
}
.disabledAppoinments input::placeholder,
.disabledAppoinments .form-select::placeholder {
  color: #c8c9cc;
}
.disabledAppoinments button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  font-size: 2vh;
}
.disabledAppoinments button.add {
  margin: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
  width: auto;
}
.error-message {
  display: block;
  padding: 1vh;
  text-align: start;
  color: red;
}

@media (max-width: 991px) {
  .disabledAppoinments {
    width: 70%;
  }
  .disabledAppoinments input,
  .disabledAppoinments .form-selec {
    width: 100%;
  }
}
@media (max-width: 765px) {
  .disabledAppoinments {
    width: 100%;
  }
}
</style>
