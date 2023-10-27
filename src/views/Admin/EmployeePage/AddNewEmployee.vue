<template>
  <div class="AddNewEmployee">
    <div class="container">
      <h3>العملاء</h3>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="update-info-client">
        <h5>إضافة بيانات العميل الجديد</h5>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input type="text" placeholder="إضافة اسم العميل" />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>هاتف العميل</label>
            <input type="text" placeholder="إضافة هاتف العميل" />
          </div>
          <button class="btn">إضافة عميل</button>
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
.AddNewEmployee {
  direction: rtl;
  width: 80%;
}
.AddNewEmployee h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddNewEmployee p {
  color: #1a2669;
  font-weight: 400;
}
.AddNewEmployee .update-info-client {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddNewEmployee h5 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddNewEmployee label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 700;
}
.AddNewEmployee input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
}
.AddNewEmployee input::placeholder {
  color: #c8c9cc;
}
.AddNewEmployee button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}
@media (max-width: 991px) {
  .AddNewEmployee input {
    width: 100%;
  }
  .AddNewEmployee button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .AddNewEmployee {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddNewEmployee {
    width: 100%;
  }
}
</style>
