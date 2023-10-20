<template>
  <div class="fundMovement">
    <div class="container">
      <h3>حركة رصيد صندوق الفرع</h3>
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
              <th scope="col">المبيعات (شبكة)</th>
              <th scope="col">المبيعات (كاش)</th>
              <th scope="col">إجمالي المبيعات</th>
              <th scope="col">العمولات</th>
              <th scope="col">العمولات المدفوعة</th>
              <th scope="col">المتبقي من العمولات</th>
              <th scope="col">المشتريات والمصروفات</th>
              <th scope="col">المشتريات النثرية</th>
              <th scope="col">الرصيد</th>
              <th scope="col">الاستقطاعات</th>
              <th scope="col">تغذية الصندوق</th>
              <th scope="col">رصيد الإغلاق</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>97</td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>97</td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>97</td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>97</td>
            </tr>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <th scope="row">456</th>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>97</td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-10 من 100 عنصر</td>
          </tfoot>
        </table>
      </div>
      <div class="feed-the-box">
        <fa icon="coins" />
        <h6>تغذية صندوق الكاشير</h6>
        <p>
          يمكنك إيداع مبلع في رصيد صندوق الكاشير بدون إقفال الحسابات وسيتم خصمه
          من رصيد صندوق الفرع
        </p>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>مبلغ الإيداع </label>
            <input type="text" placeholder="المبلغ " />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>البيان الإيداع </label>
            <input type="text" placeholder="ادخل البيان" />
          </div>
          <button class="btn">أضف المبلغ</button>
        </form>
      </div>
      <div class="feed-the-box">
        <fa icon="coins" />
        <h6>سحب من صندوق الكاشير</h6>
        <p>
          يمكنك سحب مبلغ من رصيد صدوق الكاشير بدون إقفال الحسابات وسيتم إضافته
          إلى رصيد صندوق الفرع
        </p>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>مبلغ الإيداع </label>
            <input type="text" placeholder="المبلغ " />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>البيان الإيداع </label>
            <input type="text" placeholder="ادخل البيان" />
          </div>
          <button class="btn">سحب المبلغ</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FundMovement",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.fundMovement {
  direction: rtl;
  width: 80%;
}
.fundMovement h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.fundMovement p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.fundMovement .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  width: 110%;
}
.fundMovement .search {
  width: 65%;
  float: right;
}
.fundMovement .search span {
  padding-left: 2vh;
  color: #3f51b5;
}
.fundMovement .search svg {
  color: #3f51b5;
  padding-left: 0.7vh;
}
.fundMovement .search span:first-of-type {
  font-weight: 500;
}
.fundMovement .search span:last-of-type {
  font-weight: 400;
}
.fundMovement .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 25%;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}
.fundMovement input {
  border: 0;
}
.fundMovement input::placeholder {
  color: #757575;
  text-align: start;
}
.fundMovement .extra-table button:first-of-type {
  width: 20%;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.fundMovement .extra-table button:last-of-type {
  width: 10%;
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.fundMovement .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.fundMovement table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  width: 115%;
}
.fundMovement table tfoot {
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
.fundMovement table thead tr th,
.fundMovement table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.fundMovement table tr td,
.fundMovement table tr th {
  color: #1a2669;
}

.fundMovement table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.fundMovement table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.fundMovement .feed-the-box {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.fundMovement .feed-the-box h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
  display: inline-block;
  margin-right: 10px;
}
.fundMovement .feed-the-box p {
  color: #1a2669;
}
.fundMovement .feed-the-box label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 700;
  color: #1a2669;
}
.fundMovement .feed-the-box input {
  border: 1px solid #3f51b5;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
}
.fundMovement .feed-the-box input::placeholder {
  color: #c8c9cc;
}
.fundMovement .feed-the-box button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}
@media (max-width: 991px) {
  .extra-table {
    width: 200%;
  }
  .table {
    width: 170%;
  }
  .fundMovement {
    width: 70%;
  }
  .fundMovement .feed-the-box input {
    width: 100%;
  }
  .fundMovement .feed-the-box button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
}
@media (max-width: 765px) {
  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
  .fundMovement {
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
