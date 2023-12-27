<template>
  <div class="deletedBills">
    <div class="container">
      <h4>الفواتير المحذوفة</h4>
      <p>هي جميع الفواتير المحذوفة في التطبيق</p>

      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="input-container">
            <fa icon="search" />
            <input
              class="input-field"
              type="text"
              placeholder="البحث عن..."
              v-model="searchQuery"
              @keyup.enter="search"
            />
          </div>
          <button class="btn">EXCEL</button>
          <button class="btn" @click="searchByDate">بحث بالتاريخ</button>
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
          <tbody v-if="deletedBillsToDisplay.length > 0">
            <tr
              v-for="deletedBill in deletedBillsToDisplay"
              :key="deletedBill.id"
            >
              <td>{{ deletedBill.id }}</td>
              <td>{{ deletedBill.employee.name }}</td>
              <td>{{ deletedBill.amount_pay_type }}</td>
              <td>{{ deletedBill.amount }}</td>
              <td>
                {{ deletedBill.discount === 0 ? "-" : deletedBill.discount }}
              </td>
              <td>{{ deletedBill.tax }}</td>
              <td>{{ deletedBill.tip === 0 ? "-" : deletedBill.tip }}</td>
              <td>
                {{
                  deletedBill.tip_pay_type === null
                    ? "-"
                    : deletedBill.tip_pay_type
                }}
              </td>
              <td>{{ deletedBill.amount_after_discount }}</td>
              <td>{{ deletedBill.employee_commission }}</td>
              <td>{{ deletedBill.manager_commission }}</td>
              <td>{{ deletedBill.representative_commission }}</td>
              <td>
                <p>{{ deletedBill.created_at.split("T")[0] }}|</p>
                <p>{{ deletedBill.created_at.split("T")[1].split(".")[0] }}</p>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="13">{{ info }}</td>
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
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="deletedBills.length"
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
  name: "DeletedBills",
  components: {
    PaginationFoot,
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isComponentVisible: false,
      isMultiSelection: true,
      info: "يتم التحميل .......",
      selectedDate: [],
      deletedBills: [],
      searchQuery: "",
      deletedBillsPerPage: 7,
      currentPage: 1,
    };
  },
  computed: {
    deletedBillsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.deletedBillsPerPage;
      const endIndex = startIndex + this.deletedBillsPerPage;
      return this.deletedBills.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.deletedBills.length / this.deletedBillsPerPage);
    },
  },
  mounted() {
    this.fetchAllDeletedBills();
  },
  methods: {
    fetchAllDeletedBills() {
      return new Promise((resolve, reject) => {
        fetch(
          "http://127.0.0.1:8001/api/deleted-order/" +
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
          .then((data) => {
            this.deletedBills = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
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
    updateMessage() {
      if (this.deletedBills.length > 0) {
        this.info = "";
      } else {
        this.info = "لا يوجد فواتير محذوفة لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "http://127.0.0.1:8001/api/deleted-order/" +
          localStorage.getItem("branch_id"),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: this.searchQuery,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => ((this.deletedBills = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
    searchByDate(event) {
      event.preventDefault();
      if (this.selectedDate.length < 2) {
        this.info = " أرجو إدخال تاريخ بداية الفترة ونهايتها";
        this.deletedBills = [];
      } else {
        fetch(
          "http://127.0.0.1:8001/api/filter-deleted-order/" +
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
            this.deletedBills = data;
            // if (this.deletedBills.length === 0) {
            //   this.info = "لا يوجد في الفترة المحددة فواتير محذوفة لعرضها";
            // }
            this.updateMessage();
          })
          .catch((err) => {
            this.deletedBills = [];
            this.info = err.message;
          });
      }
    },
    showComponent() {
      if (this.isComponentVisible) {
        this.isComponentVisible = false;
      } else {
        this.isComponentVisible = true;
      }
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllDeletedBills().then(() => {
          this.updateMessage();
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
  margin: auto;
  width: 100%;
}
.e-calendar {
  margin: 0 auto;
}
.row {
  margin: 0;
}
.deletedBills {
  direction: rtl;
  width: 77%;
}
.deletedBills h4,
h5 {
  color: #3f51b5;
  font-weight: 700px;
}
.deletedBills p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}

.deletedBills .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
/* .deletedBills .input-container {
  width: auto;
  float: right;
  display: inline;
  float: right;
  color: #3f51b5;
  font-weight: 500;
  margin: 0;
} */
.deletedBills .input-container {
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
.deletedBills .input-container svg {
  padding-left: 2vh;
}
.deletedBills input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.deletedBills .extra-table button {
  width: auto;
  margin-right: 10px;
  float: left;
  background: #3f51b5;
  color: #fff;
}
.deletedBills .extra-table button:first-of-type,
.deletedBills .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.deletedBills .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.deletedBills table {
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

.deletedBills table thead tr th,
.deletedBills table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.deletedBills table tr td,
.deletedBills table tr th {
  color: #1a2669;
}
.deletedBills table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}
.deletedBills table tfoot td:last-of-type {
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
  .deletedBills {
    width: 70%;
  }

  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
}
@media (max-width: 765px) {
  .deletedBills {
    width: 100%;
  }
  /* .extra-table {
    width: 175%;
  }
  .table {
    width: 192%;
  } */
}

@media (max-width: 540px) {
  /* .extra-table {
    width: 230%;
  }
  .table {
    width: 250%;
  } */
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
