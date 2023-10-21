<template>
  <div class="expensesNotTax">
    <div class="container">
      <h4>المصاريف العمومية الغير خاضعة للضرببة</h4>
      <p>
        المصاريف التي يمكن خصمها من الإيرادات الخاضعة للضرائب لغرض حساب الضرائب
        الصافية.
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <router-link to="/AddNotTaxable">
            <button class="btn">إنشاء جديد</button>
          </router-link>
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
              <td>Gosi</td>
              <td>التأمينات الاجتماعية</td>
              <td>120.00</td>
              <td>09-12 | 03:09 ص</td>
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
  name: "ExpensesNotTax",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.expensesNotTax {
  direction: rtl;
  width: 80%;
}
.expensesNotTax h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.expensesNotTax p {
  color: #1a2669;
  font-weight: 400;
}
.expensesNotTax .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.expensesNotTax .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.expensesNotTax .input-container {
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
.expensesNotTax input {
  border: 0;
}
.expensesNotTax input::placeholder {
  color: #3f51b5;
}
.expensesNotTax .input-container svg {
  padding-left: 0.2vh;
}

.expensesNotTax .extra-table button {
  width: 20%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.expensesNotTax table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.expensesNotTax table tr td,
.expensesNotTax table tr th {
  color: #1a2669;
}

.expensesNotTax table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.expensesNotTax table thead tr th,
.expensesNotTax table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}

.expensesNotTax table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.expensesNotTax table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}

@media (max-width: 991px) {
  .expensesNotTax {
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
  .expensesNotTax {
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
