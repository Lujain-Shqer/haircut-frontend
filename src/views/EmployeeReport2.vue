<template>
  <div class="employeeReport">
    <div class="container">
      <h3>تقرير الموظف (مفصل)</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="row personal-information">
        <div class="col-xl-6 col-lg-8 col-md-12">
          <div class="row">
            <img src="../assets/three.png" class="col-4" />
            <div class="col-8 information">
              <div class="row">
                <h6 class="col-6"><fa icon="user" /> الاسم:</h6>
                <span class="col-6">أشرف عبد العزيز</span>
                <h6 class="col-6"><fa icon="coins" /> نوع الأجر:</h6>
                <span class="col-6">راتب و عمولة</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-12 stay-info">
          <h6><fa icon="user" />معلومات الإقامة:</h6>
          <div class="row">
            <span class="col-6">الرقم:</span>
            <span class="col-6">أشرف عبد العزيز</span>
            <span class="col-6">تاريخ الانتهاء:</span>
            <span class="col-6">راتب و عمولة</span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-12 healthy-info">
          <h6><fa icon="user" /> معلومات الرقم الصحي:</h6>
          <div class="row">
            <span class="col-6">الرقم:</span>
            <span class="col-6">أشرف عبد العزيز</span>
            <span class="col-6">تاريخ الانتهاء:</span>
            <span class="col-6">راتب و عمولة</span>
          </div>
        </div>
      </div>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <select class="form-select" aria-label="Default select example">
            <option selected>اختر الموظف</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">التاريخ</th>
              <th scope="col">رقم الفاتورة</th>
              <th scope="col">القيمة</th>
              <th scope="col">طريقة الدفع</th>
              <th scope="col">نوع الخدمة</th>
              <th scope="col">العمولة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-10 من 100 عنصر</td>
          </tfoot>
        </table>
      </div>
      <div class="row personal-information per-info">
        <div class="col-xl-4 col-lg-6 col-md-12 img-info">
          <div class="row">
            <img src="../assets/six.png" class="col-6" />
            <div class="col-6">
              <h6><fa icon="user" />متوسط الدخل الشهري:</h6>
              <span>456.00</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-12 healthy-info">
          <h6><fa icon="user" />متوسط الفواتير الشهري:</h6>
          <span>456.00</span>
        </div>
        <div class="col-xl-2 col-lg-6 col-md-12 stay-info">
          <h6><fa icon="user" />متوسط الدخل اليومي:</h6>
          <span>456.00</span>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-12 healthy-info">
          <h6><fa icon="user" />متوسط عدد الفواتير اليومي:</h6>
          <span>456.00</span>
        </div>
      </div>
      <div class="row personal-information per-info r">
        <div class="col-xl-4 col-lg-6 col-md-12 img-info">
          <div class="row">
            <img src="../assets/five.png" class="col-6" />
            <div class="col-6">
              <h6 style="color: #1cd123">
                <fa icon="user" /> الخدمة الأكثر مبيعا :
              </h6>
              <span>456.00</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-12 healthy-info">
          <h6 style="color: #ff2f22">
            <fa icon="user" /> الخدمة الأقل مبيعا :
          </h6>
          <span>456.00</span>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-12 stay-info">
          <h6><fa icon="user" /> خدمات لم تبع أبدا:</h6>
          <ul class="row">
            <div class="col-4">
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
            </div>
            <div class="col-4">
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
            </div>
            <div class="col-4">
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
              <li>بروتين كيرلي</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeeReport",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.employeeReport {
  direction: rtl;
  width: 80%;
}
.employeeReport h3,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeeReport p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.employeeReport .personal-information {
  box-shadow: 0px 0px 8px 0px #00000040;
  padding: 4vh 1vh;
  border-radius: 8px;
  font-size: 1.7vmin;
  margin: 4vh 0;
}
.employeeReport .personal-information h6 {
  font-weight: 700;
  color: #1a2669;
}
.employeeReport .personal-information span:nth-child(odd) {
  color: #1a2669;
  font-weight: 700;
}
.employeeReport .personal-information span:nth-child(even) {
  color: #3f51b5;
  font-weight: 500;
}
.employeeReport .personal-information .healthy-info,
.employeeReport .personal-information .stay-info {
  padding-top: 2vh;
  border-right: 1px solid #757de882;
}
.employeeReport .personal-information img {
  width: 20%;
}
.employeeReport .personal-information .information {
  margin: auto;
}
.employeeReport select {
  margin-top: 3vh;
  width: 20%;
  color: #3f51b5;
  border: 1px solid #1a2669;
}

.employeeReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeeReport .form-select {
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  font-weight: 500;
  margin: 0;
}
.employeeReport .input-container svg {
  color: #000;
  padding-left: 2vh;
}

.employeeReport .extra-table button {
  width: 20%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.employeeReport .extra-table button:first-of-type,
.employeeReport .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.employeeReport .extra-table button:last-of-type {
  width: 25%;
}
.employeeReport .extra-table button:first-of-type {
  width: 10%;
}
.employeeReport .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.employeeReport table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.employeeReport table tfoot {
  border-radius: 8px;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.employeeReport table thead tr th,
.employeeReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.employeeReport table tr td,
.employeeReport table tr th {
  color: #1a2669;
}
.employeeReport table .td {
  font-weight: 700;
}
.employeeReport table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.employeeReport table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.employeeReport table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.employeeReport table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.employeeReport .per-info span {
  display: block;
  margin-top: 5vh;
}
.employeeReport .per-info .img-info {
  margin: auto;
  padding-top: 2vh;
}
.employeeReport .per-info .img-info img {
  width: 40%;
}
.employeeReport .per-info ul {
  padding-top: 2vh;
}
.employeeReport .per-info li {
  color: #3f51b5;
}
@media (max-width: 991px) {
  .employeeReport {
    width: 70%;
  }
  .employeeReport .healthy-info,
  .employeeReport .stay-info {
    margin-top: 4vh;
    border-right: 0 !important;
  }
  .employeeReport select {
    width: 50%;
  }
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
  .employeeReport .per-info .img-info img {
    width: 20%;
  }
}
@media (max-width: 765px) {
  .employeeReport {
    width: 100%;
  }
  .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
  }
}

@media (max-width: 540px) {
  .employeeReport select {
    width: 80%;
  }
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
