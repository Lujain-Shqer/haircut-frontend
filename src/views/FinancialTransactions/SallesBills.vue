<template>
  <div class="sallesBills">
    <div class="container">
      <h3>فواتير المبيعات</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <button class="btn">إنشاء جديد</button>
          <button class="btn"><fa icon="filter" /> فلتر</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">رقم الفاتورة</th>
              <th scope="col">الموظف</th>
              <th scope="col">طريقة الدفع</th>
              <th scope="col">القيمة</th>
              <th scope="col">مبلغ الخصم</th>
              <th scope="col">القيمة المضافة</th>
              <th scope="col">مكافأة من العميل</th>
              <th scope="col">طريقة دفع المكافأة</th>
              <th scope="col">المجموع</th>
              <th scope="col">موظف</th>
              <th scope="col">مدير الفرع</th>
              <th scope="col">مندوب</th>
              <th scope="col">تاريخ الإنشاء</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>567</td>
              <td>678</td>
              <td>088</td>
              <td>1-10</td>
              <td>0</td>
              <td>-</td>
              <td>34567</td>
              <td>1-10</td>
              <td>45</td>
              <td>-</td>
              <td>-</td>
              <td>
                <span>9-12|</span>
                <span>10:30ص</span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>567</td>
              <td>678</td>
              <td>088</td>
              <td>1-10</td>
              <td>0</td>
              <td>-</td>
              <td>34567</td>
              <td>1-10</td>
              <td>45</td>
              <td>-</td>
              <td>-</td>
              <td>
                <span>9-12|</span>
                <span>10:30ص</span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>567</td>
              <td>678</td>
              <td>088</td>
              <td>1-10</td>
              <td>0</td>
              <td>-</td>
              <td>34567</td>
              <td>1-10</td>
              <td>45</td>
              <td>-</td>
              <td>-</td>
              <td>
                <span>9-12|</span>
                <span>10:30ص</span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>567</td>
              <td>678</td>
              <td>088</td>
              <td>1-10</td>
              <td>0</td>
              <td>-</td>
              <td>34567</td>
              <td>1-10</td>
              <td>45</td>
              <td>-</td>
              <td>-</td>
              <td>
                <span>9-12|</span>
                <span>10:30ص</span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>567</td>
              <td>678</td>
              <td>088</td>
              <td>1-10</td>
              <td>0</td>
              <td>-</td>
              <td>34567</td>
              <td>1-10</td>
              <td>45</td>
              <td>-</td>
              <td>-</td>
              <td>
                <span>9-12|</span>
                <span>10:30ص</span>
              </td>
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
            <td>1-10 من 100 عنصر</td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SallesBills",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.sallesBills {
  direction: rtl;
  width: 80%;
}
.sallesBills h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.sallesBills p {
  color: #1a2669;
  font-weight: 400;
}
.sallesBills .control-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.sallesBills .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.sallesBills .input-container {
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
.sallesBills input {
  border: 0;
}
.sallesBills input::placeholder {
  color: #3f51b5;
}
.sallesBills .input-container svg {
  padding-left: 0.2vh;
}

.sallesBills .extra-table button {
  width: 10%;
  float: left;
  background: #3f51b5;
  color: #fff;
  margin-right: 2vh;
}
.sallesBills .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.sallesBills table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  font-weight: 700;
}
.sallesBills table tr td,
.sallesBills table tr th {
  color: #1a2669;
}
.sallesBills table .td {
  font-weight: 700;
}
.sallesBills table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.sallesBills table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
.sallesBills table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.sallesBills table tfoot td:last-of-type {
  text-align: end;
  padding-left: 5vh;
}
.sallesBills table thead tr th,
.sallesBills table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}

@media (max-width: 991px) {
  .sallesBills {
    width: 70%;
  }
  .extra-table {
    width: 200% !important;
  }
  .table {
    width: 210% !important;
  }
}
@media (max-width: 765px) {
  .sallesBills {
    width: 100%;
  }
  .extra-table {
    width: 230% !important;
  }
  .table {
    width: 250% !important;
  }
}
@media (max-width: 540px) {
  .extra-table {
    /* width: 210%; */
  }
  .table {
    /* width: 230%; */
  }
}
</style>
