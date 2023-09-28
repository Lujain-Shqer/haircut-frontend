<template>
  <div class="employeesalary">
    <div class="container">
      <h3>مسير الرواتب</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">كود الموظف</th>
              <th scope="col">الاسم</th>
              <th scope="col">الوظيفة</th>
              <th scope="col">نوع الأجر</th>
              <th scope="col">الأجر</th>
              <th scope="col">عمولات أخرى</th>
              <th scope="col">إجمالي الاستحقاق</th>
              <th scope="col">الخصومات</th>
              <th scope="col">السلفيات</th>
              <th scope="col">الصافي</th>
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
              <td>234</td>
              <td>678</td>
              <td>09</td>
              <td>234</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
              <td>234</td>
              <td>678</td>
              <td>09</td>
              <td>234</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
              <td>234</td>
              <td>678</td>
              <td>09</td>
              <td>234</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
              <td>234</td>
              <td>678</td>
              <td>09</td>
              <td>234</td>
            </tr>
            <tr>
              <td>561</td>
              <th scope="row">علي أحدم</th>
              <td>حلاق</td>
              <td>راتب</td>
              <td>2000</td>
              <td>67</td>
              <td>234</td>
              <td>678</td>
              <td>09</td>
              <td>234</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
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
  name: "EmployeeSalary",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.employeesalary {
  direction: rtl;
}
.employeesalary h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeesalary p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.employeesalary .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeesalary .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.employeesalary input {
  border: 0;
}
.employeesalary input::placeholder {
  color: #757575;
  text-align: start;
}

.employeesalary .extra-table button {
  width: 15%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.employeesalary .extra-table button:first-of-type,
.employeesalary .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.employeesalary .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.employeesalary table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.employeesalary table tfoot {
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

.employeesalary table thead tr th,
.employeesalary table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.employeesalary table tr td,
.employeesalary table tr th {
  color: #1a2669;
}
.employeesalary table .td {
  font-weight: 700;
}
.employeesalary table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.employeesalary table .update {
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
