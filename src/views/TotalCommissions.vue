<template>
  <div class="totalCommissions">
    <div class="container">
      <h3>إجمالي العمولات</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="gift" />
            <span>تقرير إجمالي العمولات</span>
          </div>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">إجمالي الفواتير</th>
              <th scope="col">إجمالي الإيراد</th>
              <th scope="col">العمولات</th>
              <th scope="col">المدفوع</th>
              <th scope="col">المتبقي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>2000</td>
              <td>67</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
              <td>2000</td>
              <td>67</td>
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
  name: "TotalCommissions",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.totalCommissions {
  direction: rtl;
  width: 80%;
}
.totalCommissions h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.totalCommissions p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.totalCommissions .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.totalCommissions .input-container {
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.totalCommissions .input-container svg {
  padding-left: 2vh;
}

.totalCommissions .extra-table button {
  width: 15%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.totalCommissions .extra-table button:first-of-type,
.totalCommissions .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.totalCommissions .extra-table button:last-of-type {
  width: 25%;
}
.totalCommissions .extra-table button:first-of-type {
  width: 10%;
}
.totalCommissions .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.totalCommissions table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.totalCommissions table tfoot {
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

.totalCommissions table thead tr th,
.totalCommissions table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.totalCommissions table tr td,
.totalCommissions table tr th {
  color: #1a2669;
}
.totalCommissions table .td {
  font-weight: 700;
}
.totalCommissions table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.totalCommissions table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.totalCommissions table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.totalCommissions table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
@media (max-width: 991px) {
  .totalCommissions {
    width: 70%;
  }
  .totalCommissions select {
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
  .totalCommissions {
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
  .totalCommissions select {
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
