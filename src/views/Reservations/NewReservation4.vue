<template>
  <div class="newReservation4">
    <div class="container">
      <h4>نقطة البيع</h4>
      <p>
        تهدف الي اصدار فاتورة خاص بالزبون , حيث يساعد في تبسيط عمليات البيع
        وتسريعها، ويسهل على البائع إصدار الفواتير وتسجيل المعاملات بشكل دقيق .
      </p>
      <h4 class="first-step">الخطوة الرابعة:</h4>
      <span>ادخل ساعة الحجز لتكون بالفاتورة من حيث المواعيد . </span>
      <div class="row">
        <div class="col-xl-6 col-sm-12">
          <h4 class="first-step">من الساعة:</h4>
          <ul>
            <li>ص</li>
            <li>م</li>
          </ul>
          <input type="text" /> <span>:</span> <input type="text" />
        </div>
        <div class="col-xl-6 col-sm-12">
          <h4 class="first-step">الى الساعة:</h4>
          <ul>
            <li>ص</li>
            <li>م</li>
          </ul>
          <input type="text" /> <span>:</span> <input type="text" />
        </div>
      </div>
      <label>اختر اسم العميل</label>
      <select
        data-live-search="true"
        class="selectpicker show-menu-arrow form-selec"
      >
        <option>اختر اسم العميل</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <h4 class="first-step">تفاصيل حجز الجديد</h4>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <h5 class="text-center">صالون شعر ذقن للحلاقة</h5>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">اسم الموظف</th>
              <th scope="col">تاريخ الحجز</th>
              <th scope="col">اسم العميل</th>
              <th scope="col">ساعة الحجز</th>
              <th scope="col">الخدمة</th>
              <th scope="col">مدة العمل</th>
              <th scope="col">سعر لخدمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>
              <td>عبدالله علي</td>
              <td>من 7:00م إلى 7:50م</td>
              <td>صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>
              <td>عبدالله علي</td>
              <td>من 7:00م إلى 7:50م</td>
              <td>صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <td>محمد العلي</td>
              <td>2023- May- 15</td>
              <td>عبدالله علي</td>
              <td>من 7:00م إلى 7:50م</td>
              <td>صبغة ذقن اسود</td>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="button-container">
        <button class="btn">رجوع</button>
        <button class="btn">إنهاء الطلب</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewReservation4",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.newReservation4 {
  direction: rtl;
  width: 80%;
}
.newReservation4 h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.newReservation4 p {
  color: #1a2669;
  font-weight: 400;
}
.newReservation4 .first-step {
  display: inline-block;
  margin-top: 5vh;
}
.newReservation4 span {
  color: #1a2669;
}
.newReservation4 input {
  background: #ebedf7;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  width: 8vh;
  height: 8vh;
  outline: none;
  color: #1a2669;
  color: #1a2669;
  font-size: 4vh;
  text-align: center;
  font-weight: 500;
}
.newReservation4 ul {
  display: inline-block;
  color: #1a2669;
  list-style: none;
  border: 1px solid #ebedf7;
  border-radius: 8px;
  height: 100%;
  padding: 6px;
  text-align: center;
  margin: 0px 3vh;
}
/* .newReservation4 ul li {
  padding: 6px;
} */
.newReservation4 ul li:hover {
  background: #ebedf7;
}
.newReservation4 label {
  display: block;
  margin-top: 2vh;
  margin-bottom: 2vh;

  font-weight: 500;
  color: #3f51b5;
}
.newReservation4 .form-selec {
  border: 1px solid #1a2669;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  display: block;
}
.newReservation4 .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 80%;
}
.newReservation4 .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation4 .extra-table h5 {
  color: #3f51b5;
}

.newReservation4 table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation4 table tr td,
.newReservation4 table tr th {
  color: #1a2669;
}
.newReservation4 table .td {
  font-weight: 700;
}
.newReservation4 table thead tr th,
.newReservation4 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.newReservation4 .button-container {
  width: 100%;
  text-align: center;
}
.newReservation4 button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: 5vh 1vh 0;
}

@media (max-width: 991px) {
  .newReservation4 {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .newReservation4 {
    width: 100%;
  }
}
</style>
