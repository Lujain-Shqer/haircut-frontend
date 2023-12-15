<template>
  <div class="DiaryReport">
    <div class="container">
      <h4>تقرير اليوميات</h4>
      <p>
        تقرير اليومية هو وثيقة تستخدم لتسجيل الأحداث والأنشطة اليومية في صالون
        الحلاقة. يحتوي هذا التقرير عادةً على المعلومات خاص باليوميات
      </p>

      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <button class="btn">EXCEL</button>
          <button class="btn" @click="search">بحث بالتاريخ</button>
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
              <th scope="col">التاريخ</th>
              <th scope="col">إجمالي الفواتير</th>
              <th scope="col">إجمالي الإيراد</th>
              <th scope="col">العمولات</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="diaryReportsToDisplay.length > 0">
            <tr
              v-for="diaryReport in diaryReportsToDisplay"
              :key="diaryReport.id"
            >
              <td>{{ diaryReport.day }}</td>
              <td>{{ diaryReport.Total_Orders }}</td>
              <td>{{ diaryReport.Total_Revenues }}</td>
              <td>{{ diaryReport.Total_Commissions }}</td>
              <td class="text-center">
                <button class="btn show">
                  <fa icon="fa-file-pdf" /> عرض الفاتورة
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">{{ info }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="diaryReports.length"
              @page-change="changePage"
            ></paginationFoot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import PaginationFoot from "/src/components/PaginationFoot.vue";
import { format } from "date-fns";
export default {
  name: "DiaryReport",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      diaryReports: [],
      diaryReportsPerPage: 7,
      currentPage: 1,
      isComponentVisible: false,
      isMultiSelection: true,
      selectedDate: [],
      info: "لا يوجد تقارير يومية لعرضها",
    };
  },
  computed: {
    diaryReportsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.diaryReportsPerPage;
      const endIndex = startIndex + this.diaryReportsPerPage;
      return this.diaryReports.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.diaryReports.length / this.diaryReportsPerPage);
    },
  },
  mounted() {
    fetch(
      "http://127.0.0.1:8001/api/daily-report/" +
        localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.diaryReports = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
    handleDateChange(args) {
      const dateString = format(args.value, "yyyy-MM-dd");

      if (!this.selectedDate.includes(dateString)) {
        this.selectedDate.push(dateString);

        if (this.selectedDate.length > 2) {
          this.selectedDate.shift();
        }
      }
    },
    search(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.diaryReports = [];
      } else {
        fetch(
          "http://127.0.0.1:8001/api/filter-daily-report/" +
            localStorage.getItem("branch_id"),
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              start_date: this.selectedDate[0],
              end_date: this.selectedDate[1],
            }),
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(
                "يجب أن يكون تاريخ بداية الفترة أصغر من تاريخ نهاية الفترة "
              );
            }
          })
          .then((data) => {
            this.diaryReports = data;
            if (this.diaryReports.length === 0) {
              this.info = "لا يوجد في الفترة المحددة تقارير يومية لعرضها";
            }
          })
          .catch((err) => {
            this.diaryReports = [];
            this.info = err.message;
          });
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
.DiaryReport {
  direction: rtl;
  width: 77%;
}
.DiaryReport h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.DiaryReport p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.DiaryReport .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.DiaryReport .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  padding: 1vh;
}
.DiaryReport input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.DiaryReport input::placeholder {
  color: #3f51b5;
}
.DiaryReport .input-container svg {
  padding-left: 0.2vh;
}

.DiaryReport .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.DiaryReport .extra-table button:first-of-type,
.DiaryReport .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}

.DiaryReport .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.DiaryReport table {
  margin-bottom: 0;
  text-align: center;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-bottom: 1px solid #d9d5ec;
}

.DiaryReport table thead tr th,
.DiaryReport table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.DiaryReport table tr td,
.DiaryReport table tr th {
  color: #1a2669;
}
.DiaryReport table .show {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
}
.DiaryReport table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.DiaryReport table tfoot td:last-of-type {
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
  .DiaryReport {
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
  .DiaryReport {
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
.control_wrapper {
    width: auto !important;
    float: none !important;
  }
</style>
