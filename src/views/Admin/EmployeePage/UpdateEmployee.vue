<template>
  <div class="updateEmployee">
    <div class="container">
      <h4>قائمة الموظفين</h4>
      <p>الأشخاص يكون ضمن فريق الإدارة صالون الحلاقة</p>
      <div class="update-info-client">
        <h6>تعديل بيانات موظف</h6>
        <form @submit="updateEmployee" class="row">
          <div class="col-md-12">
            <label> الاسم </label>
            <input
              type="text"
              placeholder="  الاسم   "
              v-model="employee_info.name"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> رقم الإقامة</label>
            <input
              type="text"
              placeholder=" رقم الإقامة"
              v-model="employee_info.residence_number"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> تاريخ الانتهاء الإقامة </label>
            <input
              type="text"
              placeholder="  تاريخ الانتهاء الإقامة  "
              v-model="employee_info.residence_expire_date"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> رقم الكرت الصحي </label>
            <input
              type="text"
              placeholder="  رقم الكرت الصحي  "
              v-model="employee_info.health_number"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> تاريخ الانتهاء الكرت الصحي</label>
            <input
              type="text"
              placeholder="   تاريخ الانتهاء الكرت الصحي  "
              v-model="employee_info.health_expire_date"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> الوظيفة</label>
            <input
              type="text"
              placeholder="  الوظيفة "
              v-model="employee_info.job"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>نوع الأجر </label>
            <input
              type="text"
              placeholder="  نوع الأجر  "
              v-model="employee_info.pay_type"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>الراتب </label>
            <input
              type="text"
              placeholder="  الراتب  "
              v-model="employee_info.salary"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>حد مجموع الدخل (ان وجد)</label>
            <input
              type="text"
              placeholder=" حد مجموع الدخل (ان وجد)  "
              v-model="employee_info.income_limit"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>عمولة مجموع الدخل (ان وجد) </label>
            <input
              type="text"
              placeholder="  عمولة مجموع الدخل"
              v-model="employee_info.commission"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>تكلفة الإقامة</label>
            <input
              type="text"
              placeholder="  تكلفة الإقامة "
              v-model="employee_info.residence_cost"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>تكلفة كرت الصحي </label>
            <input
              type="text"
              placeholder="  تكلفة كرت الصحي "
              v-model="employee_info.health_cost"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>تكلفة التأمين</label>
            <input
              type="text"
              placeholder="تكلفة التأمين   "
              v-model="employee_info.insurance_cost"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> المسؤول عن التكاليف</label>
            <input
              type="text"
              placeholder="   الصالون مسؤول من دفع قيمة التجديد للإقامة، الكرت الصحي والتامين "
              v-model="employee_info.costs_responsible"
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>الحالة</label>
            <input type="text" placeholder="  مفعل " />
          </div>
          <button :disabled="isLoading" type="submit" class="btn">
            تحديث بيانات الموظف
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateEmployee",
  props: ["id"],
  data() {
    return {
      employee_info: {
        name: "",
        residence_number: "",
        residence_expire_date: "",
        health_number: "",
        health_expire_date: "",
        job: "",
        pay_type: "",
        salary: "",
        income_limit: "-1",
        commission: "",
        residence_cost: "",
        health_cost: "",
        insurance_cost: "",
        costs_responsible: "",
      },
      isLoading: false,
    };
  },
  methods: {
    updateEmployee(event) {
      event.preventDefault();
      this.isLoading = true;
      Object.keys(this.employee_info).forEach((key) => {
        if (
          this.employee_info[key] === "" ||
          this.employee_info[key] === "-1"
        ) {
          delete this.employee_info[key];
        }
      });
      fetch("http://127.0.0.1:8001/api/employee/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.employee_info),
      })
        .then((response) => {
          this.isLoading = false;
          if (response.ok) {
            this.$router.push({ name: "ListOfEmployees" });
            return response.json();
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            // Log the error details sent by the API
            console.error("Validation error:", error.response.data);
          } else {
            console.error("Failed to update employee:", error);
          }
        });
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.updateEmployee {
  direction: rtl;
  width: 80%;
}
.updateEmployee h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateEmployee p {
  color: #1a2669;
  font-weight: 400;
}
.updateEmployee .update-info-client {
  margin: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateEmployee h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateEmployee label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
  color: #1a2669;
}
.updateEmployee input {
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.col-md-12 input {
  width: 35%;
}
.updateEmployee input:focus {
  border: 1px solid #1a2669;
}
.updateEmployee form span {
  font-weight: 600;
  color: #1a2669;
}

.updateEmployee button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
}

@media (max-width: 991px) {
  .updateEmployee input {
    width: 100%;
  }
  .updateEmployee button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .updateEmployee {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .updateEmployee {
    width: 100%;
  }
}
</style>
