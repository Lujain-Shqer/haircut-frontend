<template>
  <div class="AddClient">
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
  name: "AddClient",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddClient {
  direction: rtl;
  width: 80%;
}
.AddClient h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddClient p {
  color: #1a2669;
  font-weight: 400;
}
.AddClient .update-info-client {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddClient h5 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddClient label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 700;
}
.AddClient input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
}
.AddClient input::placeholder {
  color: #c8c9cc;
}
.AddClient button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}
@media (max-width: 991px) {
  .AddClient input {
    width: 100%;
  }
  .AddClient button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .AddClient {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddClient {
    width: 100%;
  }
}
</style>
