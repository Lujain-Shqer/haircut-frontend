<template>
  <div class="newReservation3">
    <div class="container">
      <h3>نقطة البيع</h3>
      <p>
        تهدف الي اصدار فاتورة خاص بالزبون , حيث يساعد في تبسيط عمليات البيع
        وتسريعها، ويسهل على البائع إصدار الفواتير وتسجيل المعاملات بشكل دقيق .
      </p>
      <h3 class="first-step">الخطوة الثالثة:</h3>
      <span>اضغط على تاريخ الحجز لتكون بالفاتورة من حيث المواعيد . </span>

      <h3 class="first-step">تفاصيل حجز الجديد</h3>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <h5 class="text-center">صالون شعر ذقن للحلاقة</h5>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">اسم الموظف</th>
              <th scope="col">تاريخ الحجز</th>
              <th scope="col">الخدمة</th>
              <th scope="col">مدة العمل</th>
              <th scope="col">سعر لخدمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>
              <td>صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>

              <td scope="row">صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>

              <td scope="row">صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>

              <td scope="row">صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="button-container">
        <button class="btn">رجوع</button>
        <button class="btn">التالي</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewReservation3",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.newReservation3 {
  direction: rtl;
  width: 80%;
}
.newReservation3 h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.newReservation3 p {
  color: #1a2669;
  font-weight: 400;
}
.newReservation3 .first-step {
  display: inline-block;
  margin-top: 5vh;
}
.newReservation3 span {
  color: #1a2669;
}

.newReservation3 .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 80%;
}
.newReservation3 .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation3 .extra-table h5 {
  color: #3f51b5;
}

.newReservation3 table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation3 table tr td,
.newReservation3 table tr th {
  color: #1a2669;
}
.newReservation3 table .td {
  font-weight: 700;
}
.newReservation3 table thead tr th,
.newReservation3 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.newReservation3 .button-container {
  width: 100%;
  text-align: center;
}
.newReservation3 button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: 5vh 1vh 0;
}

@media (max-width: 991px) {
  .newReservation3 {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .newReservation3 {
    width: 100%;
  }
}
</style>
