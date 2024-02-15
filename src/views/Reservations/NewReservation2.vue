<template>
  <div class="newReservation2">
    <div class="container">
      <h4>نقطة البيع</h4>
      <p>
        تهدف الي اصدار فاتورة خاص بالزبون , حيث يساعد في تبسيط عمليات البيع
        وتسريعها، ويسهل على البائع إصدار الفواتير وتسجيل المعاملات بشكل دقيق .
      </p>
      <h6 class="first-step">الخطوة الثاني:</h6>
      <span>إضغط على اسم الموظف لتكون الفاتورة باسمه . </span>
      <div class="employees">
        <div class="row">
          <div
            v-for="employee in this.employees"
            :key="employee.id"
            @click="selectEmployee(employee)"
            :class="{ active: selectedEmployee.name === employee.name }"
            class="employee col-lg-3 col-md-6 col-xs-12 text-center"
          >
            <img src="../../assets/Vector.png" />
            <h6>الاسم الموظف</h6>
            <span>السيد {{ employee.name }}</span>
          </div>
        </div>
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
              <th scope="col">الموظف</th>
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
              <td>{{ selectedServices[0].name }}</td>
              <td>{{ selectedServices[0].duration }} دقائق</td>
              <td>{{ selectedServices[0].price }}</td>
            </tr>
            <tr v-for="service in selectedServices.slice(1)" :key="service.id">
              <td></td>
              <td>{{ service.name }}</td>
              <td>{{ service.duration }} دقائق</td>
              <td>{{ service.price }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4">لم يتم اختيار أي خدمة</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="button-container">
        <router-link to="/NewReservation1">
          <button class="btn">رجوع</button>
        </router-link>
        <router-link to="/NewReservation3">
          <button class="btn">التالي</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import reservationMixin from "@/Mixins/ReservationMixin";
export default {
  name: "NewReservation2",
  mixins: [reservationMixin],
  data() {
    return {
      employees: [],
      // selectedEmployee: "unselected",
    };
  },
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/employee/" + localStorage.getItem("branch_id"),
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
  },
  computed: {
    selectedServices() {
      return this.$store.state.selectedServices;
    },
    selectedEmployee() {
      return this.$store.state.reserveEmployee;
    },
  },
  methods: {
    selectEmployee(employee) {
      // this.selectedEmployee = employeeName;
      this.$store.commit("addEmployee", employee);
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.newReservation2 {
  direction: rtl;
  width: 77%;
}
.newReservation2 h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.newReservation2 p {
  color: #1a2669;
  font-weight: 400;
}
.newReservation2 .first-step {
  display: inline-block;
  margin-top: 5vh;
  color: #3f51b5;
}
.newReservation2 span {
  color: #1a2669;
}
.newReservation2 .employees {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1px solid #3f51b5;
  border-radius: 8px;
  padding: 3vh;
  margin-top: 2vh;
}
.newReservation2 .employees .employee {
  margin-bottom: 2vh;
}
.newReservation2 .employees h6 {
  color: #1a2669;
  margin: 1vh 0;
}

.newReservation2 .extra-table span,
.newReservation2 .employees span {
  color: #3f51b5;
}
.newReservation2 .control-table {
  margin-top: 3vh;
  border: 1px solid #3f51b5;
  padding: 1vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 50%;
}
.newReservation2 .extra-table {
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation2 .extra-table img {
  margin-left: 4vh;
  background: #fefefe;
  padding: 4px;
  border-radius: 9px;
  box-shadow: 0px 0px 4px -1px #14141412;

  box-shadow: 0px 0px 6px -1px #1414141f;
  width: 8%;
}
.newReservation2 .extra-table h6 {
  color: #3f51b5;
}

.newReservation2 table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.newReservation2 table tr td,
.newReservation2 table tr th {
  color: #1a2669;
}

.newReservation2 table thead tr th,
.newReservation2 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.newReservation2 .button-container {
  width: 100%;
  text-align: center;
}
.newReservation2 button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: 5vh 1vh;
  padding: 1vh 4vh;
}
.active {
  border: 1px solid #3f51b5;
}
@media (max-width: 991px) {
  .newReservation2 .control-table {
    width: 75%;
  }
  .newReservation2 {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .newReservation2 .control-table {
    width: 100%;
  }
  .newReservation2 {
    width: 100%;
  }
}
</style>
