<template>
  <div class="DiaryReport">
    <div class="container">
      <h4>تقرير اليوميات</h4>
      <p>
        تقرير اليومية هو وثيقة تستخدم لتسجيل الأحداث والأنشطة اليومية في صالون
        الحلاقة. يحتوي هذا التقرير عادةً على المعلومات خاص باليوميات
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
              <th scope="col">بداية الفترة</th>
              <th scope="col">نهاية الفترة</th>
              <th scope="col">إجمالي الفواتير</th>
              <th scope="col">إجمالي الإيراد</th>
              <th scope="col">العمولات</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ص11:54 | 2023-09-05</td>
              <td>ص11:54 | 2023-09-05</td>
              <td>1369</td>
              <td>57005.00</td>
              <td>3298.45</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
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
  name: "SalesTax",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.DiaryReport {
  direction: rtl;
  width: 80%;
}
.DiaryReport h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.DiaryReport p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.DiaryReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.DiaryReport .input-container {
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
.DiaryReport input {
  border: 0;
  outline: none;
}
.DiaryReport input::placeholder {
  color: #3f51b5;
}
.DiaryReport .input-container svg {
  padding-left: 0.2vh;
}

.DiaryReport .extra-table button {
  width: 16%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.DiaryReport .extra-table button:first-of-type,
.DiaryReport .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.DiaryReport .extra-table button:last-of-type {
  width: 25%;
}
.DiaryReport .extra-table button:first-of-type {
  width: 10%;
}
.DiaryReport .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.DiaryReport table {
  margin-bottom: 0;
  text-align: center;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.DiaryReport table thead tr th,
.DiaryReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.DiaryReport table tr td,
.DiaryReport table tr th {
  color: #1a2669;
}
.DiaryReport table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
}
.DiaryReport table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.DiaryReport table tfoot td:last-of-type {
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
  .DiaryReport {
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
  .DiaryReport {
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
