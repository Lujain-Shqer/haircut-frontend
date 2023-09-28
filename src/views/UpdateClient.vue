<template>
  <div class="updateClient">
    <div class="container">
      <h3>العملاء</h3>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="update-info-client">
        <h6>تحديث بيانات العميل</h6>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input type="text" />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>هاتف العميل</label>
            <input type="text" />
          </div>
          <button class="btn">تحديث عميل</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateClient",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.updateClient {
  direction: rtl;
}
.updateClient h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.updateClient p {
  color: #1a2669;
  font-weight: 400;
}
.updateClient .update-info-client {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.updateClient h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.updateClient label {
  display: block;
  margin-bottom: 2vh;
}
.updateClient input {
  border: 1px solid #1a2669;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
}

.updateClient button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 20%;
  margin: auto;
  margin-top: 5vh;
}
</style>
