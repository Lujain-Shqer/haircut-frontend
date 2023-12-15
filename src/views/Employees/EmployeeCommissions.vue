<template>
  <div class="employeeCommissions">
    <div class="container">
      <h4>عمولات الموظفين</h4>
      <p>
        تُمنح للموظفين بناءً على أداءهم في العمل وقدرتهم على تحقيق أهداف محددة
        تم تحديدها مسبقًا. هذه العمولات تكون عادة مبالغ مالية إضافية للراتب
        الأساسي للموظفين
      </p>
      <p class="card">
        <span
          ><fa icon="warning" /> يمكنك البدء في توزيع عمولات اليوم عن طريق
          الجدول أعلاه ،بعد الانتهاء من توزيع العمولات يمكنك الضغط على الزر
          أدناه لإقفال اليومية واستخراج تقرير العمولات للتوقيع عليه من قبل
          الموظفين</span
        >
        <fa icon="times" class="times" />
      </p>
      <p class="card">
        <span
          ><fa icon="warning" /> الجدول أدناه يظهر العمولات ابتداءً من آخر بداية
          لفترة العمل حتى الوقت الحالي فقط</span
        >
        <fa icon="times" class="times" />
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="search">
            <fa icon="coins" /> <span>رصيد الصندوق :</span>
            <span>SAR 7000</span>
            <div class="input-container">
              <fa icon="search" />
              <input
                class="input-field"
                type="text"
                placeholder="البحث عن..."
              />
            </div>
          </div>
          <button class="btn">
            <fa icon="clock" /> إنهاء فترة العمل وإصدار تقرير العمولات
          </button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الموظف</th>
              <th scope="col">العمولة</th>
              <th scope="col">المدفوع</th>
              <th scope="col">المتبقي</th>
              <th scope="col">تاريخ</th>
              <th scope="col" class="text-center">دفع العمولة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>علي أحدم</td>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>6-11-2020</td>
              <td class="text-center">
                <input
                  class="btn delete"
                  placeholder="المبلغ -SAR
"
                  type="text"
                />
                <button class="btn update">أضف المبلغ</button>
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
  name: "EmployeeCommissions",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.employeeCommissions {
  direction: rtl;
  width: 77%;
}
.employeeCommissions h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.employeeCommissions p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.employeeCommissions p:nth-of-type(2) {
  background: #e5fbff;
  border: 1px solid #11caef;
}
.employeeCommissions p:nth-of-type(3) {
  background: #ffe5e5;
  border: 1px solid #eb3e3e;
  display: inline-block;
}
.employeeCommissions p:nth-of-type(2) svg {
  color: #1298b2;
  padding-left: 1vh;
}
.employeeCommissions p:nth-of-type(3) svg {
  color: #b22f2f;
  padding-left: 1vh;
}
.employeeCommissions svg.times {
  position: absolute;
  top: 5px;
  left: 0;
  color: #646466 !important;
}
.employeeCommissions .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.employeeCommissions .search {
  width: auto;
  float: right;
  margin-bottom: 1vh;
}
.employeeCommissions .search span {
  padding-left: 2vh;
  color: #3f51b5;
}
.employeeCommissions .search svg {
  color: #3f51b5;
  padding-left: 0.7vh;
}
.employeeCommissions .search span:first-of-type {
  font-weight: 500;
}
.employeeCommissions .search span:last-of-type {
  font-weight: 400;
}
.employeeCommissions .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}
.employeeCommissions input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.employeeCommissions input::placeholder {
  color: #3f51b5;
  text-align: start;
}

.employeeCommissions .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.employeeCommissions .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.employeeCommissions table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
  text-align: center;
}
.employeeCommissions table tfoot {
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
.employeeCommissions table thead tr th,
.employeeCommissions table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.employeeCommissions table tr td,
.employeeCommissions table tr th {
  color: #1a2669;
}
.employeeCommissions table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.employeeCommissions table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.employeeCommissions table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.employeeCommissions table tfoot td:last-of-type {
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
  .extra-table {
    width: 140% !important;
  }
  .table {
    width: 165% !important;
  }
  .employeeCommissions {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .extra-table {
    width: 170% !important;
  }
  .table {
    width: 182% !important;
  }
  .employeeCommissions {
    width: 100%;
  }
}
@media (max-width: 540px) {
  .extra-table {
    width: 240% !important;
  }
  .table {
    width: 260% !important;
  }
  .employeeCommissions table .update {
    margin-top: 1vh;
  }
}
</style>
