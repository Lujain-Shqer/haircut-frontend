<template>
  <div class="clearingCommissions">
    <div class="container">
      <h4>تصفية العمولات</h4>
      <p>عملية حساب وسداد العمولات للموظفين من الخدمات أو المنتجات</p>
      <div class="all-table text-center" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تصفية العمولات</span>
          </div>
          <button class="btn">من الفترة -> إلى الفترة</button>
          <button class="btn">بحث بالتاريخ</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">الررصيد الإفتتاحي</th>
              <th scope="col">المراد دفعه</th>
              <th scope="col">المتبقي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>علي إسماعيل</td>
              <td>4567</td>
              <td>
                <input
                  type="text"
                  placeholder="SAR-
المبلغ "
                />
              </td>
              <td>6002.60</td>
            </tr>
          </tbody>
        </table>
        <button class="btn">حفظ تصفية العمولات</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClearingCommissions",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.clearingCommissions {
  direction: rtl;
  width: 80%;
}
.clearingCommissions h4 {
  color: #3f51b5;
  font-weight: 600px;
}
.clearingCommissions p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.clearingCommissions .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.clearingCommissions .input-container {
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
  text-align: start;
}
.clearingCommissions .input-container svg {
  padding-left: 2vh;
}

.clearingCommissions .extra-table button {
  width: 15%;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
}
.clearingCommissions .extra-table button:first-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  width: 25%;
  float: right;
}
.clearingCommissions .extra-table button:last-of-type {
  width: 15%;
  float: right;
}
.clearingCommissions .all-table {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  text-align: center;
}
.clearingCommissions table {
  margin-bottom: 0;
}
.clearingCommissions table td:last-child {
  color: #3bd34a;
}
.clearingCommissions table tfoot {
  border-radius: 8px;
  font-weight: 300;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.clearingCommissions table thead tr th,
.clearingCommissions table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.clearingCommissions table tr td,
.clearingCommissions table tr th {
  color: #1a2669;
}
.clearingCommissions table .td {
  font-weight: 700;
}
.clearingCommissions table input {
  border: 1px solid #c8c9cc;
  padding: 1vh;
  border-radius: 8px;
  width: 80%;
}
.clearingCommissions table ~ button {
  background: #3f51b5;
  color: #fff;
  margin-top: 5vh;
  margin-bottom: 2vh;
}
@media (max-width: 991px) {
  .clearingCommissions {
    width: 70%;
  }
  .clearingCommissions select {
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
  .clearingCommissions {
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
  .clearingCommissions select {
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
