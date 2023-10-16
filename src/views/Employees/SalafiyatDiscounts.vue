<template>
  <div class="salafiyatDiscounts">
    <div class="container">
      <h3>الخصومات والسلفيات</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <select class="form-select" aria-label="Default select example">
        <option selected>اختر الموظف المراد البحث عنه</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="gift" />
            <span>تقرير الخصومات والسلفيات</span>
          </div>
          <button class="btn">EXCEL</button>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">تاريخ الحركة</th>
              <th scope="col">البند</th>
              <th scope="col">القيمة</th>
              <th scope="col">المتبقي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
            </tr>
            <tr>
              <td>20-4-2019</td>
              <td>INGDU</td>
              <td>2000</td>
              <td>67</td>
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
  name: "SalafiyatDiscounts",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.salafiyatDiscounts {
  direction: rtl;
  width: 80%;
}
.salafiyatDiscounts h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.salafiyatDiscounts p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.salafiyatDiscounts select {
  margin-top: 3vh;
  width: 35%;
  color: #3f51b5;
  border: 1px solid #1a2669;
}

.salafiyatDiscounts .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.salafiyatDiscounts .input-container {
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.salafiyatDiscounts .input-container svg {
  padding-left: 2vh;
}

.salafiyatDiscounts .extra-table button {
  width: 15%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.salafiyatDiscounts .extra-table button:first-of-type,
.salafiyatDiscounts .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.salafiyatDiscounts .extra-table button:last-of-type {
  width: 25%;
}
.salafiyatDiscounts .extra-table button:first-of-type {
  width: 10%;
}
.salafiyatDiscounts .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.salafiyatDiscounts table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.salafiyatDiscounts table tfoot {
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

.salafiyatDiscounts table thead tr th,
.salafiyatDiscounts table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.salafiyatDiscounts table tr td,
.salafiyatDiscounts table tr th {
  color: #1a2669;
}
.salafiyatDiscounts table .td {
  font-weight: 700;
}
.salafiyatDiscounts table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.salafiyatDiscounts table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.salafiyatDiscounts table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.salafiyatDiscounts table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
@media (max-width: 991px) {
  .salafiyatDiscounts {
    width: 70%;
  }
  .salafiyatDiscounts select {
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
  .salafiyatDiscounts {
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
  .salafiyatDiscounts select {
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
