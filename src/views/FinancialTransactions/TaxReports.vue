<template>
  <div class="taxReport">
    <div class="container">
      <h3>تقرير الضريبة (مشتريات)</h3>
      <p>
        غرض تسجيل وتوثيق المعاملات المتعلقة بالمشتريات التي تؤثر على الضرائب
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تقرير الضريبة (مشتريات)</span>
          </div>
          <label for="">اختر السنة</label>
          <select>
            <option>2023</option>
            <option>2023</option>
            <option>2023</option>
          </select>
          <label for="">اختر الربع السنوي</label>
          <select>
            <option>2023</option>
            <option>2023</option>
            <option>2023</option>
          </select>
          <button class="btn">بحث</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">المورد</th>
              <th scope="col">القيمة المضافة</th>
              <th scope="col">مبلغ الخصم (إن وجد)</th>
              <th scope="col">المجموع</th>
              <th scope="col">تاريخ الإنشاء</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td class="td">678</td>
              <td class="td">678</td>
              <td class="td">9-12|8:30</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td class="td">678</td>
              <td class="td">678</td>
              <td class="td">9-12|8:30</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td class="td">678</td>
              <td class="td">678</td>
              <td class="td">9-12|8:30</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td>567</td>
              <td class="td">678</td>
              <td class="td">678</td>
              <td class="td">9-12|8:30</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">991</th>
              <td class="td">678</td>
              <td>567</td>
              <td class="td">678</td>
              <td class="td">9-12|8:30</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
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
    </div>
  </div>
</template>
<script>
export default {
  name: "TaxReports",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.taxReport {
  direction: rtl;
  width: 80%;
}
.taxReport h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.taxReport p {
  color: #1a2669;
  font-weight: 400;
}
.taxReport .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.taxReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.taxReport .input-container {
  border-radius: 8px;
  width: 25%;
  float: right;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.taxReport label {
  display: inline;
  color: #3f51b5;
  font-weight: 500;
}

.taxReport select {
  display: inline;
  width: auto !important;
  border: 1px solid #1a2669;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  outline: none;
  font-weight: 700;
}
.taxReport .extra-table button {
  background: #3f51b5;
  color: #fff;
  margin-right: 2vh;
  width: 10%;
}
.taxReport table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
}
.taxReport table tr td,
.taxReport table tr th {
  color: #1a2669;
}
.taxReport table .td {
  font-weight: 700;
}
.taxReport table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.taxReport table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
  margin-bottom: 1vh;
}
.taxReport table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.taxReport table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.taxReport table thead tr th,
.taxReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}

@media (max-width: 991px) {
  .taxReport {
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
  .taxReport {
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
