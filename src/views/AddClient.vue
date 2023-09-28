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
        <h6>إضافة بيانات العميل</h6>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input type="text" placeholder="إضافة اسم العميل" />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>هاتف العميل</label>
            <input type="text" placeholder="إضافة هاتف العميل" />
          </div>
          <button class="btn">إضافة البيانات</button>
        </form>
      </div>
    </div>
    <!-- <div class="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "AddClient",
};
</script>
<style scoped>
/* .my-custom-scrollbar {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
} */
.row {
  margin: 0;
}
.AddClient {
  direction: rtl;
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
.AddClient h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddClient label {
  display: block;
  margin-bottom: 2vh;
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
  width: 20%;
  margin: auto;
  margin-top: 5vh;
}
</style>
