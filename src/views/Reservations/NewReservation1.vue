<template>
  <div class="newReservation1">
    <div class="container">
      <h3>انشاء حجز جديد</h3>
      <p>
        تهدف الي اصدار فاتورة خاص بالزبون , حيث يساعد في تبسيط عمليات البيع
        وتسريعها، ويسهل على البائع إصدار الفواتير وتسجيل المعاملات بشكل دقيق .
      </p>
      <h3 class="first-step">الخطوة الأولى:</h3>
      <span
        >إضغط على المنتجات أو الخدمات لإضافتها إلى الطلب لتكون ضمن الفاتورة .
      </span>
      <div class="services text-center">
        <ServicesPage />
      </div>
      <h3 class="first-step">تفاصيل حجز الجديد</h3>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <h5 class="text-center">صالون شعر ذقن للحلاقة</h5>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الخدمة</th>
              <th scope="col">مدة العمل</th>
              <th scope="col">سعر لخدمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">صبغة ذقن اسود</th>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <th scope="row">صبغة ذقن اسود</th>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <th scope="row">صبغة ذقن اسود</th>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
            <tr>
              <th scope="row">صبغة ذقن اسود</th>
              <td>15 دقائق</td>
              <td>130</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn">التالي</button>
    </div>
  </div>
</template>
<script>
import ServicesPage from "@/components/ServicesPage.vue";

export default {
  name: "NewReservation1",
  components: {
    ServicesPage,
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.newReservation1 {
  direction: rtl;
  width: 80%;
}
.newReservation1 h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.newReservation1 p {
  color: #1a2669;
  font-weight: 400;
}
.newReservation1 .first-step {
  display: inline-block;
  margin-top: 5vh;
}
.newReservation1 span {
  color: #1a2669;
}
.newReservation1 .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  width: 50%;
}
.newReservation1 .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation1 .extra-table h5 {
  color: #3f51b5;
}

.newReservation1 table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
}
.newReservation1 table tr td,
.newReservation1 table tr th {
  color: #1a2669;
}
.newReservation1 table .td {
  font-weight: 700;
}
.newReservation1 table thead tr th,
.newReservation1 table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.newReservation1 button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 30%;
  margin: auto;
  margin-top: 5vh;
  display: block;
}

@media (max-width: 991px) {
  .newReservation1 {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .newReservation1 {
    width: 100%;
  }
}
@media (max-width: 540px) {
}
.services {
  box-shadow: 0px 0px 15px 0px #00000040;
  border: 1.5px solid #3f51b5;
  border-radius: 8px;
  padding: 2vh;
  text-align: center;
  margin-top: 5vh;
}
</style>
