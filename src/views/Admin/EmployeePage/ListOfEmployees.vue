<template>
  <div class="listOfEmployee">
    <div class="container">
      <h4>قائمة الموظفين</h4>
      <p>الأشخاص يكون ضمن فريق الإدارة صالون الحلاقة</p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <button class="btn">PDF</button>

          <button class="btn">EXCEL</button>

          <button class="btn">أنشاء جديد</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">كود الموظف</th>
              <th scope="col">الموظف</th>
              <th scope="col">المدفوع</th>
              <th scope="col">الأجر</th>
              <th scope="col">تاريخ</th>
              <th scope="col">رقم الإقامة</th>
              <th scope="col">الحالة</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>55900</td>
              <td>أشرف عبدالعزيز</td>
              <td>حلاق</td>
              <td class="row">
                <div class="col-5">الراتب :</div>
                <div class="col-5">2000</div>
                <div class="col-5">العمولة :</div>
                <div class="col-5">9%</div>
              </td>
              <td>صالون شعر & ذقن للحلاقة</td>
              <td>3129745448</td>
              <td>مفعل</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
              </td>
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
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListOfEmployees",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.listOfEmployee {
  direction: rtl;
  width: 80%;
}
.listOfEmployee h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.listOfEmployee p {
  color: #1a2669;
  font-weight: 400;
}
.listOfEmployee .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.listOfEmployee .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.listOfEmployee .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 32%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.listOfEmployee input {
  border: 0;
  outline: none;
}
.listOfEmployee input::placeholder {
  color: #3f51b5;
}
.listOfEmployee .input-container svg {
  padding-left: 0.2vh;
}

.listOfEmployee .extra-table button {
  width: 7%;
  float: left;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 1vh;
}
.listOfEmployee .extra-table button:last-child {
  background: #3f51b5;
  color: #fff;
  width: 10%;
}
.listOfEmployee table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.listOfEmployee table tr td,
.listOfEmployee table tr th {
  color: #1a2669;
}
.listOfEmployee table tr td.row div:nth-child(odd) {
  color: #3f51b5;
  font-weight: 600;
}

.listOfEmployee table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.listOfEmployee table thead tr th,
.listOfEmployee table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.listOfEmployee table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.listOfEmployee table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 991px) {
  .listOfEmployee {
    width: 70%;
  }
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .listOfEmployee {
    width: 100%;
  }
  .extra-table {
    width: 170%;
  }
  .table {
    width: 182%;
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
