<template>
  <div class="cashierBox">
    <div class="container">
      <h4>صندوق الكاشير</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>حركة صندوق الكاشير</span>
          </div>
          <button class="btn" @click="showComponent">
            من الفترة -> إلى الفترة
          </button>
          <button class="btn">بحث بالتاريخ</button>

          <button class="btn"><fa icon="filter" /> تصفية العمولات</button>
        </div>
        <div class="control_wrapper" v-show="isComponentVisible">
          <ejs-calendar
            :isMultiSelection="isMultiSelection"
            @change="handleDateChange"
          ></ejs-calendar>
        </div>
        <table class="table" cellpadding="5" border="1" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">التاريخ الحركة</th>
              <th scope="col">الرصيد الإفتتاحي</th>
              <th scope="col">الوارد (كاش)</th>
              <th scope="col">إيداع/سحب</th>
              <th scope="col">المشتريات والمصروفات</th>
              <th scope="col">المشتريات النثرية</th>
              <th scope="col">العمولات المدفوعة</th>
              <th scope="col">الرصيد</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ص11:54 | 2023-09-05</td>
              <td>69807.60</td>
              <td>130.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>70002.60</td>
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
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "CashierBox",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isComponentVisible: false,
    };
  },
  methods: {
    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
  },
};
</script>
<style scoped>
.control_wrapper {
  position: fixed;
  z-index: 1111111111111;
  margin: auto;
  width: 100%;
}
.e-calendar {
}
.row {
  margin: 0;
}
.cashierBox {
  direction: rtl;
  width: 77%;
}
.cashierBox h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.cashierBox p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.cashierBox .extra-table {
  margin: 0 2vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.cashierBox .input-container {
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.cashierBox .input-container svg {
  margin-left: 2vh;
  background: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #14141412;
  padding: 0 1vh;
  box-shadow: 0px 0px 6px -1px #1414141f;
}

.cashierBox .extra-table button {
  width: auto;
  margin-right: 10px;
  float: right;
  background: #3f51b5;
  color: #fff;
}
.cashierBox .extra-table button:first-of-type,
.cashierBox .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.cashierBox .extra-table button:last-of-type {
  float: left;
}
.cashierBox .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  text-align: center;
}
.cashierBox table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
}
.cashierBox table tfoot {
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

.cashierBox table thead tr th,
.cashierBox table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.cashierBox table tr td,
.cashierBox table tr th {
  color: #1a2669;
}
.cashierBox table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
}
.cashierBox table tr td:last-of-type {
  color: #3bd34a;
}
.cashierBox table tfoot td:last-of-type {
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
  .cashierBox {
    width: 70%;
  }
  .cashierBox select {
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
  .cashierBox {
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
  .cashierBox select {
    width: 80%;
  }
  .extra-table {
    width: 260%;
  }
  .table {
    width: 270%;
  }
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
