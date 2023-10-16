<template>
  <div class="showReservations">
    <div class="container">
      <h3>حجوزات اليوم</h3>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>

      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>الحجوزات الجديدة</span>
          </div>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn">من الفترة -> إلى الفترة</button>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">تاريخ الحجز</th>
              <th scope="col">اسم العميل</th>
              <th scope="col">رقم هاتف العميل</th>

              <th scope="col">التوقيت</th>
              <th scope="col">الموظف</th>
              <th scope="col">الخدمات</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9-4-2010</td>
              <th>فارس الحربي</th>
              <td>(0559090488)</td>
              <td>03:05 م - 04:38 م</td>
              <td>محمد عصام</td>
              <td>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
              </td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>9-4-2010</td>
              <th>فارس الحربي</th>
              <td>(0559090488)</td>
              <td>03:05 م - 04:38 م</td>
              <td>محمد عصام</td>
              <td>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
              </td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>9-4-2010</td>
              <th>فارس الحربي</th>
              <td>(0559090488)</td>
              <td>03:05 م - 04:38 م</td>
              <td>محمد عصام</td>
              <td>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
              </td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>9-4-2010</td>
              <th>فارس الحربي</th>
              <td>(0559090488)</td>
              <td>03:05 م - 04:38 م</td>
              <td>محمد عصام</td>
              <td>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
              </td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
                </button>
                <button class="btn delete"><fa icon="trash" /> حذف</button>
              </td>
            </tr>
            <tr>
              <td>9-4-2010</td>
              <th>فارس الحربي</th>
              <td>(0559090488)</td>
              <td>03:05 م - 04:38 م</td>
              <td>محمد عصام</td>
              <td>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
                <li>صبغة دقن</li>
              </td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="book" /> عرض الفاتورة
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
  name: "ShowReservations",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.showReservations {
  direction: rtl;
  width: 80%;
}
.showReservations h3,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.showReservations p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.showReservations .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.showReservations .input-container {
  width: 30%;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  font-weight: 500;
  margin: 0;
}

.showReservations .input-container svg {
  padding-left: 2vh;
}

.showReservations .extra-table button {
  width: 20%;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.showReservations .extra-table button:first-of-type,
.showReservations .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.showReservations .extra-table button:last-of-type {
  width: 25%;
}
.showReservations .extra-table button:first-of-type {
  width: 10%;
}
.showReservations .all-table {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.showReservations table {
  margin-bottom: 0;
  border: 1.5px solid #3f51b5;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.showReservations table thead tr th,
.showReservations table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
}
.showReservations table tr td,
.showReservations table tr th {
  color: #1a2669;
}
.showReservations table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 2px;
}
.showReservations table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 2px;
}

@media (max-width: 991px) {
  .showReservations {
    width: 70%;
  }

  .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  }
}
@media (max-width: 765px) {
  .showReservations {
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
  .extra-table {
    width: 210%;
  }
  .table {
    width: 230%;
  }
}
</style>
