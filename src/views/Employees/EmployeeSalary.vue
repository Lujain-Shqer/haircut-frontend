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
          <div class="name">
            <fa icon="calendar" /> <span> تقرير مسير الرواتب :</span>
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
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-10 من 100 عنصر</td>
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
  width: 80%;
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
.employeesalary .extra-table .name {
  width: 30%;
  float: right;
  color: #3f51b5;
}
.employeesalary .extra-table .name svg {
  padding-left: 1vh;
}
.employeesalary .extra-table button {
  width: 20%;
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
.employeesalary .extra-table button:last-of-type {
  width: 25%;
}
.employeesalary .extra-table button:first-of-type {
  width: 10%;
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
.employeesalary table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.employeesalary table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
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
  .employeesalary {
    width: 70%;
  }
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
}
@media (max-width: 765px) {
  /* .container {
    max-width: 650px;
  } */
  .employeesalary {
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
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
