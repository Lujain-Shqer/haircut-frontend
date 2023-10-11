<template>
  <div class="salesTax">
    <div class="container">
      <h3>الضريبة (مبيعات)</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>

      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تقرير الضريبة (مبيعات)</span>
          </div>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">تاريخ الحركة</th>
              <th scope="col">رقم الفاتورة</th>
              <th scope="col">اسم العميل</th>
              <th scope="col">القيمة</th>
              <th scope="col">الضريبة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30|12-2</td>
              <th>4567</th>
              <td>أحمد محسن</td>
              <td>3467</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>9:30|12-2</td>
              <th>4567</th>
              <td>أحمد محسن</td>
              <td>3467</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>9:30|12-2</td>
              <th>4567</th>
              <td>أحمد محسن</td>
              <td>3467</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>9:30|12-2</td>
              <th>4567</th>
              <td>أحمد محسن</td>
              <td>3467</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>9:30|12-2</td>
              <th>4567</th>
              <td>أحمد محسن</td>
              <td>3467</td>
              <td>0.00</td>
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
  name: "SalesTax",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.salesTax {
  direction: rtl;
  width: 80%;
}
.salesTax h3,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.salesTax p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.salesTax .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.salesTax .input-container {
  width: 30%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  font-weight: 500;
  margin: 0;
}

.salesTax .input-container svg {
  padding-left: 2vh;
}

.salesTax .extra-table button {
  width: 20%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.salesTax .extra-table button:first-of-type,
.salesTax .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.salesTax .extra-table button:last-of-type {
  width: 25%;
}
.salesTax .extra-table button:first-of-type {
  width: 10%;
}
.salesTax .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.salesTax table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.salesTax table tfoot {
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

.salesTax table thead tr th,
.salesTax table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.salesTax table tr td,
.salesTax table tr th {
  color: #1a2669;
}
.salesTax table .td {
  font-weight: 700;
}
.salesTax table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.salesTax table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.salesTax table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.salesTax table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}

@media (max-width: 991px) {
  .salesTax {
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
  .salesTax {
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
