<template>
  <div class="closingAccounts">
    <div class="container">
      <h4>تقرير إقفال الحسابات</h4>
      <p>
        تقرير مالي يُعد عادة في نهاية الفترة المحاسبية (مثل السنة المالية أو
        الربع السنوي)، وهو يهدف إلى تلخيص حالة الحسابات المالية
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="coins" />
            <span>تقرير إقفال الحسابات</span>
          </div>
          <button class="btn">بحث بالتاريخ</button>
          <button class="btn" @click="showComponent">
            من الفترة -> إلى الفترة
          </button>
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
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style="height: 10vh"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "ClosingAccounts",
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
  width: 78%;
  margin: auto;
}
.e-calendar {
  float: left;
}
.row {
  margin: 0;
}
.closingAccounts {
  direction: rtl;
  width: 80%;
}
.closingAccounts h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.closingAccounts p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.closingAccounts .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.closingAccounts .input-container {
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.closingAccounts .input-container svg {
  padding-left: 2vh;
}

.closingAccounts .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
  float: left;
}
.closingAccounts .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.closingAccounts .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.closingAccounts table {
  margin-bottom: 0;
}

tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.closingAccounts table thead tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.closingAccounts table tr td,
.closingAccounts table tr th {
  color: #1a2669;
}

@media (max-width: 991px) {
  .closingAccounts {
    width: 70%;
  }
  .closingAccounts select {
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
  .closingAccounts {
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
  .closingAccounts select {
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
