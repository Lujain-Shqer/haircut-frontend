<template>
  <div class="client">
    <div class="container">
      <h3>العملاء</h3>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <button class="btn">إضافة عميل جديد</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">رقم</th>
              <th scope="col">الموظف</th>
              <th scope="col">رقم الجوال</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>علي الأحد</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>سعيد طراب</td>
              <td class="td">0937467</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>محمد الخطاب</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>محمد الخطاب</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>محمد الخطاب</td>
              <td class="td">096367364</td>
              <td class="text-center">
                <button class="btn update"><fa icon="pencil" /> تعديل</button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col" class="text-center"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientPage",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.client {
  direction: rtl;
}
.client h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.client p {
  color: #1a2669;
  font-weight: 400;
}
.client .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.client .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: 25%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.client input {
  border: 0;
}
.client input::placeholder {
  color: #3f51b5;
}

.client .extra-table button {
  width: 20%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.client .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.client table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
.client table tfoot {
  border-radius: 8px;
}
.client table thead tr th,
.client table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.client table tr td,
.client table tr th {
  color: #1a2669;
}
.client table .td {
  font-weight: 700;
}
.client table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.client table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}
@media (max-width: 991px) {
  .all-table {
    overflow-x: auto;
  }
}
</style>
