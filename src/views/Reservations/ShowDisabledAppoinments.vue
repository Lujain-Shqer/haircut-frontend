<template>
  <div class="ShowDisabledAppoinments">
    <div class="container">
      <h4>المواعيد المعطلة</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="calendar" />
            <span>المواعيد المعطلة</span>
          </div>
          <!-- <button class="btn">بحث بالتاريخ</button>

          <button class="btn" @click="showComponent">
            من الفترة -> إلى الفترة
          </button> -->
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
              <th scope="col">التاريخ</th>
              <th scope="col">اسم الموظف</th>
              <th scope="col">رقم</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-09-05</td>
              <td>فارس الحربي</td>
              <td>(0559090488)</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
            <td></td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "ShowDisabledAppoinments",
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
  float: left;
}
.e-calendar {
  margin: auto;
}
.row {
  margin: 0;
}
.ShowDisabledAppoinments {
  direction: rtl;
  width: 80%;
}
.ShowDisabledAppoinments h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
  direction: rtl;
  display: inline-block;
}
.ShowDisabledAppoinments button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  float: left;
}
.ShowDisabledAppoinments p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.ShowDisabledAppoinments .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.ShowDisabledAppoinments .input-container {
  float: right;
  display: contents;
  float: right;
  color: #3f51b5;
  padding: 1vh;
  font-weight: 500;
}
.ShowDisabledAppoinments .input-container svg {
  padding-left: 2vh;
}

.ShowDisabledAppoinments .extra-table button {
  width: auto;
  margin-right: 10px;
  background: #3f51b5;
  color: #fff;
  float: left;
}
.ShowDisabledAppoinments .extra-table ul {
  line-height: 1.1;
  font-size: 1.5vmin;
}

.ShowDisabledAppoinments .extra-table button:first-of-type {
  float: left;
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
}
.ShowDisabledAppoinments .extra-table button:last-of-type {
  width: auto;
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.ShowDisabledAppoinments .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.ShowDisabledAppoinments table {
  margin-bottom: 0;
  text-align: center;
}
.ShowDisabledAppoinments table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.ShowDisabledAppoinments table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-left: 5px;
  margin-bottom: 1vh;
}
.ShowDisabledAppoinments table tfoot {
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

.ShowDisabledAppoinments table thead tr th,
.ShowDisabledAppoinments table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.ShowDisabledAppoinments table tr td,
.ShowDisabledAppoinments table tr th {
  color: #1a2669;
}
.ShowDisabledAppoinments table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  color: #fff;
  font-weight: 300;
}
.ShowDisabledAppoinments table tfoot td:last-of-type {
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
  .ShowDisabledAppoinments {
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
  .ShowDisabledAppoinments {
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
