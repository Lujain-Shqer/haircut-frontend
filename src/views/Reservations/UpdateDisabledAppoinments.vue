<template>
  <div class="updateDisabledAppoinments">
    <div class="container">
      <h4>المواعيد المعطلة</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <div class="input-container">
          <h6>حجز المواعيد المعطلة</h6>
        </div>
        <div class="row formDiv">
          <div class="col-lg-12">
            <label>تاريخ العطلة</label>
            <button class="btn calendar" @click="showComponent">
              اختر اليوم
            </button>
            <div class="control_wrapper" v-show="isComponentVisible">
              <ejs-calendar
                :isMultiSelection="isMultiSelection"
                @change="handleDateChange"
              ></ejs-calendar>
            </div>
          </div>
          <div class="col-lg-12">
            <label>اسم الموظف</label>
            <select
              v-model="offDay_info.employee_id"
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
          <button
            :disabled="isLoading"
            @click="updateDisabledAppointment"
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
  name: "UpdateDisabledAppoinments",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  props: ["id"],
  data() {
    return {
      isComponentVisible: false,
      allEmployees: [],
      isLoading: false,
      errors: [],
      offDay_info: {
        date: "",
        employee_id: "",
      },
    };
  },
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/employee/" +
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
      .then((data) => (this.allEmployees = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    updateDisabledAppointment(event) {
      event.preventDefault();
      this.isLoading = true;
      this.deleteUnwantedInfo();
      console.log(this.offDay_info);
      fetch(
        "https://www.setrex.net/haircut/backend/public/api/stoped-reservation/" +
          this.$route.params.id,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.offDay_info),
        }
      ).then((response) => {
        this.isLoading = false;
        if (response.ok) {
          this.$router.push({ name: "ShowDisabledAppoinments" });
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

    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    handleDateChange(args) {
      this.offDay_info.date = format(args.value, "yyyy-MM-dd");
    },
    deleteUnwantedInfo() {
      Object.keys(this.offDay_info).forEach((key) => {
        if (this.offDay_info[key] === "") {
          delete this.offDay_info[key];
        }
      });
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
.updateDisabledAppoinments {
  direction: rtl;
  width: 77%;
}

.updateDisabledAppoinments h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateDisabledAppoinments p {
  color: #1a2669;
  font-weight: 400;
}
.updateDisabledAppoinments .update-info-client {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateDisabledAppoinments .input-container {
  display: flow-root;
}
.updateDisabledAppoinments h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
  display: inline-block;
}
.updateDisabledAppoinments .input-container button {
  float: left;
}
.updateDisabledAppoinments label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.updateDisabledAppoinments .form-selec {
  border: 1px solid #ccc;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  outline: none;
  margin-bottom: 2vh;
}
.updateDisabledAppoinments input::placeholder,
.updateDisabledAppoinments .form-select::placeholder {
  color: #c8c9cc;
}
.updateDisabledAppoinments button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  font-size: 2vh;
}
.updateDisabledAppoinments button.add {
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
.error-mes {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
@media (max-width: 991px) {
  .updateDisabledAppoinments {
    width: 70%;
  }
  .updateDisabledAppoinments input,
  .updateDisabledAppoinments .form-selec {
    width: 100%;
  }
}
@media (max-width: 765px) {
  .updateDisabledAppoinments {
    width: 100%;
  }
}
</style>
