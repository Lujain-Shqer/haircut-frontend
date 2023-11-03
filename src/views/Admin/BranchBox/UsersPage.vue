<template>
  <div class="usersPage">
    <div class="container">
      <h4>المستخدمين</h4>
      <p>الأشخاص يكون ضمن عملاء الخاص في صالون الحلاقة</p>
      <div class="control-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input class="input-field" type="text" placeholder="البحث عن..." />
          </div>
          <router-link to="/AddUser">
            <button class="btn">إنشاء جديد</button>
          </router-link>
          <button class="btn">Excel</button>
          <button class="btn">PDF</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">النوع</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>فارس الحربي</td>
              <td>مدير الصالون</td>
              <td class="text-center">
                <button class="btn show"><fa icon="pen" /> تعديل</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
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
  name: "UsersPage",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.usersPage {
  direction: rtl;
  width: 80%;
}
.usersPage h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.usersPage p {
  color: #1a2669;
  font-weight: 400;
}
.usersPage .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.usersPage .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.usersPage .input-container {
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
.usersPage input {
  border: 0;
  outline: none;
}
.usersPage input::placeholder {
  color: #3f51b5;
}
.usersPage .input-container svg {
  padding-left: 0.2vh;
}

.usersPage .extra-table button:first-of-type {
  width: 13%;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.usersPage .extra-table button {
  width: 10%;
  float: left;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin: 0 2px;
}
.usersPage table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.usersPage table tr td,
.usersPage table tr th {
  color: #1a2669;
}
.usersPage table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.usersPage table thead tr th,
.usersPage table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.usersPage table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.usersPage table tfoot td:last-of-type {
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
  .usersPage {
    width: 70%;
  }
  .extra-table {
    width: 130%;
  }
  .table {
    width: 140%;
  }
}
@media (max-width: 765px) {
  .usersPage {
    width: 100%;
  }
  .extra-table {
    width: 170%;
  }
  .table {
    width: 182%;
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
