<template>
  <div class="expenses">
    <div class="container">
      <h3>بنود المصاريف العمومية</h3>
      <p>
        تشمل العديد من النفقات التي لا تندرج تحت تصنيف معين ولا تتعلق بالإنتاج
        المباشر أو تقديم الخدمات. بنود المصاريف العمومية تشمل عادة مجموعة متنوعة
        من التكاليف .
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
              <th scope="col">رقم</th>
              <th scope="col">الاسم</th>
              <th scope="col">حالة الضربية</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>علي الأحد</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>سعيد طراب</td>
              <td class="td">0937467</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>محمد الخطاب</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>محمد الخطاب</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>محمد الخطاب</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
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
  name: "GeneralExpenses",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.expenses {
  direction: rtl;
  width: 80%;
}
.expenses h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.expenses p {
  color: #1a2669;
  font-weight: 400;
}
.expenses .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.expenses .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.expenses .input-container {
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
.expenses input {
  border: 0;
}
.expenses input::placeholder {
  color: #3f51b5;
}
.expenses .input-container svg {
  padding-left: 0.2vh;
}

.expenses .extra-table button {
  width: 20%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.expenses table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
}
.expenses table tr td,
.expenses table tr th {
  color: #1a2669;
}
.expenses table .td {
  font-weight: 700;
}
.expenses table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.expenses table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.expenses table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.expenses table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.expenses table thead tr th,
.expenses table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}

@media (max-width: 991px) {
  .expenses {
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
  .expenses {
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
