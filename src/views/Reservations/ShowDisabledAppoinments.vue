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
              <th scope="col">الرقم</th>
              <th scope="col">التاريخ</th>
              <th scope="col">اسم الموظف</th>
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="disabledAppoinmentsToDisplay.length > 0">
            <tr
              v-for="disabled in disabledAppoinmentsToDisplay"
              :key="disabled.id"
            >
              <td>{{ disabled.id }}</td>
              <td>{{ disabled.date }}</td>
              <td>{{ disabled.employee.name }}</td>
              <td class="text-center">
                <router-link
                  :to="{
                    name: 'UpdateDisabledAppoinments',
                    params: { id: disabled.id },
                  }"
                >
                  <button class="btn show"><fa icon="pen" /> تعديل</button>
                </router-link>
                <button
                  @click="deleteDisabledAppoinment(disabled.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4">{{ message }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>صفوف لكل الصفحة</td>
            <td></td>
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="disabledAppoinments.length"
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
export default {
  name: "ShowDisabledAppoinments",
  components: {
    "ejs-calendar": CalendarComponent,
    PaginationFoot,
  },
  data() {
    return {
      isComponentVisible: false,
      disabledAppoinments: [],
      disabledAppoinmentsPerPage: 7,
      currentPage: 1,
      message: "يتم التحميل .......",
    };
  },
  computed: {
    disabledAppoinmentsToDisplay() {
      const startIndex =
        (this.currentPage - 1) * this.disabledAppoinmentsPerPage;
      const endIndex = startIndex + this.disabledAppoinmentsPerPage;
      return this.disabledAppoinments.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(
        this.disabledAppoinments.length / this.disabledAppoinmentsPerPage
      );
    },
  },
  mounted() {
    return new Promise((resolve, reject) => {
      fetch(
        "http://127.0.0.1:8001/api/stoped-reservation/" +
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
          this.disabledAppoinments = data;
          this.updateMessage();
          resolve();
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  },
  methods: {
    deleteDisabledAppoinment(disabledAppoinmentId) {
      fetch(
        "http://127.0.0.1:8001/api/stoped-reservation/" + disabledAppoinmentId,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            this.disabledAppoinments = this.disabledAppoinments.filter(
              (disabledAppoinment) =>
                disabledAppoinment.id !== disabledAppoinmentId
            );
            this.updateMessage();
          }
        })
        .catch((error) => {
          console.error("Error deleting disabledAppoinment:", error);
        });
    },
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
    updateMessage() {
      if (this.disabledAppoinments.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد مواعيد عطلة لعرضها";
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
  width: 77%;
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
  display: inline-block;
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
  /* .extra-table {
    width: 180%;
  }
  .table {
    width: 192%;
  } */
}
@media (max-width: 765px) {
  .ShowDisabledAppoinments {
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
    width: 210%;
  }
  .table {
    width: 230%;
  } */
}
.control_wrapper {
  width: auto !important;
  float: none !important;
}
</style>
