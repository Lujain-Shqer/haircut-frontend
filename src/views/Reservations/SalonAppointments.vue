<template>
  <div class="salonAppointment">
    <div class="container">
      <h4>مواعيد الصالون</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <h6>مواعيد دوام الصالون</h6>
          </div>
          <button class="btn">تحديث</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">اليوم</th>
              <th scope="col">بداية الفترة</th>
              <th scope="col">نهاية الفترة</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row"><span>الاحد</span></td>
              <td><span>الاحد</span></td>
              <td><span>الاحد</span></td>
              <td class="text-center">
                <button class="btn update">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td scope="row"><span>الاثنين</span></td>
              <td><span>الاثنين</span></td>
              <td><span>الاثنين</span></td>
              <td class="text-center">
                <button class="btn update">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td scope="row"><span>الثلاثاء</span></td>
              <td><span>الثلاثاء</span></td>
              <td><span>الثلاثاء</span></td>
              <td class="text-center">
                <button class="btn update">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td scope="row"><span>الاربعاء</span></td>
              <td><span>الاربعاء</span></td>
              <td><span>الاربعاء</span></td>
              <td class="text-center">
                <button class="btn update">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td scope="row"><span>الخميس</span></td>
              <td><span>الخميس</span></td>
              <td><span>الخميس</span></td>
              <td class="text-center">
                <button class="btn update">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td scope="row"><span>السبت</span></td>
              <td><span>السبت</span></td>
              <td><span>السبت</span></td>
              <td class="text-center">
                <button class="btn update">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SalonAppointments",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.salonAppointment {
  direction: rtl;
  width: 80%;
}
.salonAppointment h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.salonAppointment p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.salonAppointment .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.salonAppointment .input-container {
  width: 40%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}

.salonAppointment .extra-table button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  float: left;
  width: 10%;
}

.salonAppointment .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.salonAppointment table {
  margin-bottom: 0;
  text-align: center;
}
tbody,
td,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.salonAppointment table thead tr th,
.salonAppointment table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.salonAppointment table tr td,
.salonAppointment table tr th {
  color: #1a2669;
  font-weight: 400;
}
.salonAppointment table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.salonAppointment table .update {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
}
.salonAppointment table td span {
  border: 1px solid #1a2669;
  padding: 1vh 8vh;
  border-radius: 8px;
  margin-top: 0vh;
  display: inline-block;
}
@media (max-width: 991px) {
  .salonAppointment {
    width: 70%;
  }
  .salonAppointment select {
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
  .salonAppointment {
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
  .salonAppointment select {
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
