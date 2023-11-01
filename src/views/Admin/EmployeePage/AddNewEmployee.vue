<template>
  <div class="addNewEmployee">
    <div class="container">
      <h4>قائمة الموظفين</h4>
      <p>الأشخاص يكون ضمن فريق الإدارة صالون الحلاقة</p>
      <div class="update-info-client">
        <h6>إضافة موظف جديد</h6>
        <form class="row">
          <div class="col-md-12">
            <label> الاسم </label>
            <input type="text" placeholder="  الاسم   " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> رقم الإقامة</label>
            <input type="text" placeholder=" رقم الإقامة" />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> تاريخ الانتهاء الإقامة </label>
            <input type="text" placeholder="  تاريخ الانتهاء الإقامة  " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> رقم الكرت الصحي </label>
            <input type="text" placeholder="  رقم الكرت الصحي  " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> تاريخ الانتهاء الكرت الصحي</label>
            <input type="text" placeholder="   تاريخ الانتهاء الكرت الصحي  " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> الوظيفة</label>
            <input type="text" placeholder="  الوظيفة " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>نوع الأجر </label>
            <input type="text" placeholder="  نوع الأجر  " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>الراتب </label>
            <input type="text" placeholder="  الراتب  " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>حد مجموع الدخل (ان وجد)</label>
            <input type="text" placeholder=" حد مجموع الدخل (ان وجد)  " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>عمولة مجموع الدخل (ان وجد) </label>
            <input type="text" placeholder="  عمولة مجموع الدخل" />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>تكلفة الإقامة</label>
            <input type="text" placeholder="  تكلفة الإقامة " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>تكلفة كرت الصحي </label>
            <input type="text" placeholder="  تكلفة كرت الصحي " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>تكلفة التأمين</label>
            <input type="text" placeholder="تكلفة التأمين   " />
          </div>
          <div class="col-md-6 col-sm-12">
            <label> المسؤول عن التكاليف</label>
            <input
              type="text"
              placeholder="   الصالون مسؤول من دفع قيمة التجديد للإقامة، الكرت الصحي والتامين "
            />
          </div>
          <div class="col-md-6 col-sm-12">
            <label>الحالة</label>
            <input type="text" placeholder="  مفعل " />
          </div>
          <button class="btn">إضافة الموظف</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddNewEmployee",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addNewEmployee {
  direction: rtl;
  width: 80%;
}
.addNewEmployee h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addNewEmployee p {
  color: #1a2669;
  font-weight: 400;
}
.addNewEmployee .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addNewEmployee h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addNewEmployee label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.addNewEmployee input {
  color: #1a2669;
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
.addNewEmployee input:focus {
  border: 1px solid #1a2669;
}
.addNewEmployee form span {
  font-weight: 600;
  color: #1a2669;
}

.addNewEmployee button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}

@media (max-width: 991px) {
  .addNewEmployee input {
    width: 100%;
  }
  .addNewEmployee button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addNewEmployee {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addNewEmployee {
    width: 100%;
  }
}
</style>
