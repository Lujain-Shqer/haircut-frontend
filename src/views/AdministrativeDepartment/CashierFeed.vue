<template>
  <div class="cashierFeed">
    <div class="container">
      <h3>سجل تغذية الكاشير</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="search">
            <fa icon="coins" /> <span>رصيد الصندوق :</span>
            <span> 7000</span>
            <div class="input-container">
              <fa icon="search" />
              <input
                class="input-field"
                type="text"
                placeholder="البحث عن..."
              />
            </div>
          </div>
          <button class="btn">من الفترة -> إلى الفترة</button>
          <button class="btn">بحث بالتاريخ</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">التاريخ</th>
              <th scope="col">الرصيد الافتتاحي</th>
              <th scope="col">الرصيد</th>
              <th scope="col">البيان</th>
              <th scope="col">رصيد الإغلاق</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th>456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td class="text-center">
                <button class="btn show"><fa icon="book" /> طباعة</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th>456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td class="text-center">
                <button class="btn show"><fa icon="book" /> طباعة</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th>456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td class="text-center">
                <button class="btn show"><fa icon="book" /> طباعة</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th>456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td class="text-center">
                <button class="btn show"><fa icon="book" /> طباعة</button>
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
  name: "CashierFeed",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.cashierFeed {
  direction: rtl;
  width: 80%;
}
.cashierFeed h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.cashierFeed p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.cashierFeed .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.cashierFeed .search {
  width: 65%;
  float: right;
}
.cashierFeed .search span {
  padding-left: 2vh;
  color: #3f51b5;
}
.cashierFeed .search svg {
  color: #3f51b5;
  padding-left: 0.7vh;
}
.cashierFeed .search span:first-of-type {
  font-weight: 500;
}
.cashierFeed .search span:last-of-type {
  font-weight: 400;
}
.cashierFeed .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 25%;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}
.cashierFeed input {
  border: 0;
}
.cashierFeed input::placeholder {
  color: #757575;
  text-align: start;
}
.cashierFeed .extra-table button:first-of-type {
  width: 20%;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.cashierFeed .extra-table button:last-of-type {
  width: 10%;
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.cashierFeed .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.cashierFeed table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.cashierFeed table tfoot {
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
tbody tr th {
  font-weight: 400;
}
.cashierFeed table thead tr th,
.cashierFeed table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.cashierFeed table tr td,
.cashierFeed table tr th {
  color: #1a2669;
}

.cashierFeed table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.cashierFeed table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.cashierFeed table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.cashierFeed table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}

@media (max-width: 991px) {
  .extra-table {
    width: 200%;
  }
  .table {
    width: 170%;
  }
  .cashierFeed {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
  .cashierFeed {
    width: 100%;
  }
}
@media (max-width: 540px) {
  .extra-table {
    width: 220%;
  }
  .table {
    width: 250%;
  }
}
</style>
