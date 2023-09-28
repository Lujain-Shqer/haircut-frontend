<template>
  <div class="employeeReport">
    <div class="container">
      <h3>تقرير الموظف (مفصل)</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <h5>لإظهار بيانات تقرير الموظف المفصل يلزم اختيار المراد البحث عنه</h5>
      <select class="form-select" aria-label="Default select example">
        <option selected>اختر الموظف</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="print" />
            <span>تقرير الموظف (مفصل)</span>
          </div>
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
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>

              <th scope="col" class="text-center"></th>
            </tr>
          </tfoot>
        </table>
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
.employeeReport .input-container {
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.employeeReport .input-container svg {
  color: #000;
  padding-left: 2vh;
}

.employeeReport .extra-table button {
  width: 15%;
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
@media (max-width: 991px) {
  .all-table {
    overflow-x: auto;
  }
}
</style>
