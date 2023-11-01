<template>
  <div class="employeeSalary">
    <div class="container">
      <h4>الرواتب الموظفين</h4>
      <p>يتم إضافة الرواتب تلقائيا عند نهاية كل شهر</p>
      <h6>لإظهار بيانات الخاص بالراتب يلزم اختيار المراد البحث عنه</h6>
      <select class="form-select" aria-label="Default select example">
        <option selected>اختر الموظف</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>رصيد الموظف</span>
          </div>
          <button class="btn">من الفترة -> إلى الفترة</button>
          <button class="btn">بحث بالتاريخ</button>

          <button class="btn">EXCEL</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">التاريخ</th>
              <th scope="col">البند</th>
              <th scope="col">الرصيد الافتتاحي</th>
              <th scope="col">الخصومات والسلفيات</th>
              <th scope="col">له</th>

              <th scope="col">عليه</th>
              <th scope="col">رصيد الأغلاق</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ص11:54 | 2023-09-05</td>
              <td>الراتب</td>
              <td>2000</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
          </tfoot>
          <tr>
            <td>الأحصائيات</td>
            <td></td>
            <td>70002</td>
            <td>0.00</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeesSalary",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.employeeSalary {
  direction: rtl;
  width: 80%;
}
.employeeSalary h4,
.employeeSalary h6 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeeSalary p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.employeeSalary select {
  margin-top: 3vh;
  width: 35%;
  color: #3f51b5;
  border: 1px solid #1a2669;
}

.employeeSalary .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeeSalary .input-container {
  float: right;
  display: contents;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.employeeSalary .input-container svg {
  padding-left: 2vh;
}

.employeeSalary .extra-table button {
  width: 16%;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
}
.extra-table button:first-of-type,
.employeeSalary .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.employeeSalary .extra-table button:last-of-type {
  width: 10%;
  float: left;
}
.employeeSalary .extra-table button:first-of-type {
  width: 25%;
}
.employeeSalary .all-table {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.employeeSalary table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  text-align: center;
}
.employeeSalary table tfoot {
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

.employeeSalary table thead tr th,
.employeeSalary table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.employeeSalary table tr td,
.employeeSalary table tr th {
  color: #1a2669;
}
.employeeSalary table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.employeeSalary table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.v table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.employeeSalary table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 991px) {
  .employeeSalary {
    width: 70%;
  }
  .employeeSalary select {
    width: 50%;
  }
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
}
@media (max-width: 765px) {
  .employeeSalary {
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
  .employeeSalary select {
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
