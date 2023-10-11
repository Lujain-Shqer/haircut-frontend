<template>
  <div class="expensesTax">
    <div class="container">
      <h3>المصاريف العمومية خاضعة للضرببة</h3>
      <p>
        يتم تضمينها في حساب الإيرادات الإجمالية للفرد أو الشركة لغرض حساب
        الضرائب عليها.
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <button class="btn">إنشاء جديد</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">مقدم الخدمة</th>
              <th scope="col">المجموع</th>
              <th scope="col">تاريخ الإنشاء</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td>678</td>
              <td>9-12|8:30</td>
              <td class="text-center">
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td>678</td>
              <td>9-12|8:30</td>
              <td class="text-center">
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td>678</td>
              <td>9-12|8:30</td>
              <td class="text-center">
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td>678</td>
              <td>9-12|8:30</td>
              <td class="text-center">
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td>678</td>
              <td>9-12|8:30</td>
              <td class="text-center">
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
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
  name: "ExpensesTax",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.expensesTax {
  direction: rtl;
  width: 80%;
}
.expensesTax h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.expensesTax p {
  color: #1a2669;
  font-weight: 400;
}
.expensesTax .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.expensesTax .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.expensesTax .input-container {
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
.expensesTax input {
  border: 0;
}
.expensesTax input::placeholder {
  color: #3f51b5;
}
.expensesTax .input-container svg {
  padding-left: 0.2vh;
}

.expensesTax .extra-table button {
  width: 20%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.expensesTax table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
  font-weight: 700;
}
.expensesTax table tr td,
.expensesTax table tr th {
  color: #1a2669;
}
.expensesTax table .td {
  font-weight: 700;
}
.expensesTax table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.expensesTax table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
  margin-bottom: 1vh;
}
.expensesTax table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.expensesTax table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.expensesTax table thead tr th,
.expensesTax table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}

@media (max-width: 991px) {
  .expensesTax {
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
  .expensesTax {
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
