<template>
  <div class="sallesBills">
    <div class="container">
      <h4>فواتير المبيعات</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="control-table" style="overflow-x: auto">
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
          <router-link to="/PointOfSales"
            ><button class="btn">إنشاء فاتورة</button></router-link
          >
          <button class="btn excel" @click="exportToExcel">EXCEL</button>
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
              <th scope="col" class="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody v-if="salesBillsToDisplay.length > 0">
            <tr v-for="salesBill in salesBillsToDisplay" :key="salesBill.id">
              <td>{{ salesBill.id }}</td>
              <td>{{ salesBill.employee.name }}</td>
              <td>{{ salesBill.amount_pay_type }}</td>
              <td>{{ salesBill.amount }}</td>
              <td>{{ salesBill.discount === 0 ? "-" : salesBill.discount }}</td>
              <td>{{ salesBill.tax }}</td>
              <td>{{ salesBill.tip === 0 ? "-" : salesBill.tip }}</td>
              <td>
                {{
                  salesBill.tip_pay_type === null ? "-" : salesBill.tip_pay_type
                }}
              </td>
              <td>{{ salesBill.amount_after_discount }}</td>
              <td>{{ salesBill.employee_commission }}</td>
              <td>{{ salesBill.manager_commission }}</td>
              <td>{{ salesBill.representative_commission }}</td>
              <td>
                <p>{{ salesBill.created_at.split("T")[0] }}|</p>
                <p>{{ salesBill.created_at.split("T")[1].split(".")[0] }}</p>
              </td>
              <td class="text-center">
                <button
                  @click="deleteSalesBill(salesBill.id)"
                  class="btn delete"
                >
                  <fa icon="trash" /> حذف
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="14">{{ message }}</td>
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
            <td></td>
            <paginationFoot
              :current-page="currentPage"
              :total-pages="pageNumber"
              :total-data="salesBills.length"
              @page-change="changePage"
            ></paginationFoot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationFoot from "/src/components/PaginationFoot.vue";
import * as ExcelJS from "exceljs";
export default {
  name: "SallesBills",
  components: {
    PaginationFoot,
  },
  data() {
    return {
      salesBills: [],
      salesBillsPerPage: 7,
      currentPage: 1,
      searchQuery: "",
      message: "يتم التحميل .......",
    };
  },
  computed: {
    salesBillsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.salesBillsPerPage;
      const endIndex = startIndex + this.salesBillsPerPage;
      return this.salesBills.slice(startIndex, endIndex);
    },
    pageNumber() {
      return Math.ceil(this.salesBills.length / this.salesBillsPerPage);
    },
  },
  mounted() {
    this.fetchAllSalesBills();
  },
  methods: {
    fetchAllSalesBills() {
      return new Promise((resolve, reject) => {
        fetch(
          "/https://www.setrex.net/haircut/backend/public/api/order/" +
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
            this.salesBills = data;
            this.updateMessage();
            resolve();
          })
          .catch((err) => {
            console.log(err.message);
            reject(err);
          });
      });
    },
    deleteSalesBill(salesBillId) {
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/order/" +
          salesBillId,
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
            this.salesBills = this.salesBills.filter(
              (salesBill) => salesBill.id !== salesBillId
            );
          }
        })
        .catch((error) => {
          console.error("Error deleting sales bills:", error);
        });
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    updateMessage() {
      if (this.salesBills.length > 0) {
        this.message = "";
      } else {
        this.message = "لا يوجد فواتير لعرضها";
      }
    },
    search(event) {
      event.preventDefault();
      fetch(
        "/https://www.setrex.net/haircut/backend/public/api/order/" +
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
        .then((data) => ((this.salesBills = data), this.updateMessage()))
        .catch((err) => console.log(err.message));
    },
    async exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      const headerRow = worksheet.addRow([
        "رقم الفاتورة",
        "الموظف",
        "طريقة الدفع",
        "القيمة",
        "مبلغ الخصم",
        "القيمة المضافة",
        "مكافأة من العميل",
        "طريقة دفع المكافأة",
        "المجموع",
        "عمولة موظف",
        "عمولة مدير فرع",
        "عمولة مندوب",
        "تاريخ الإنشاء",
      ]);
      headerRow.font = { bold: true };
      worksheet.columns = [
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 30 },
      ];
      this.salesBills.forEach((salesBill) => {
        const dataRow = worksheet.addRow([
          salesBill.id,
          salesBill.employee.name,
          salesBill.amount_pay_type,
          salesBill.amount,
          salesBill.discount === 0 ? "-" : salesBill.discount,
          salesBill.tax,
          salesBill.tip === 0 ? "-" : salesBill.tip,
          salesBill.tip_pay_type === null ? "-" : salesBill.tip_pay_type,
          salesBill.amount_after_discount,
          salesBill.employee_commission,
          salesBill.manager_commission,
          salesBill.representative_commission,
          salesBill.created_at.split("T")[0] +
            "|" +
            salesBill.created_at.split("T")[1].split(".")[0],
        ]);
        dataRow.eachCell((cell) => {
          cell.font = { size: 13 };
        });
      });

      worksheet.columns.forEach((column) => {
        column.alignment = { horizontal: "center" };
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = "فواتير_المبيعات.xlsx";

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  watch: {
    searchQuery(newValue) {
      if (newValue.trim() === "") {
        this.fetchAllSalesBills().then(() => {
          this.updateMessage();
        });
      }
    },
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.sallesBills {
  direction: rtl;
  width: 77%;
}
.sallesBills h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.sallesBills p {
  color: #1a2669;
  font-weight: 400;
}
.sallesBills .control-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
}
.sallesBills .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
  border-collapse: collapse;
  border-spacing: 0;
}
.sallesBills .input-container {
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
.sallesBills input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.sallesBills input::placeholder {
  color: #3f51b5;
}
.sallesBills .input-container svg {
  padding-left: 0.2vh;
}

.sallesBills .extra-table button {
  width: auto;
  float: left;
  background: #3f51b5;
  color: #fff;
  margin-right: 2vh;
}
.sallesBills .extra-table button.excel {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.sallesBills table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  text-align: center;
}
.sallesBills table tr td,
.sallesBills table tr th {
  color: #1a2669;
}
.sallesBills table tr td p {
  margin: 0;
}

.sallesBills table thead tr th,
.sallesBills table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  height: 5vh;
  font-weight: 400;
}
.sallesBills table .delete {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.sallesBills table tfoot {
  border-radius: 8px;
  background: #3f51b5;
  width: 100%;
  color: #fff;
  font-weight: 300;
}

tfoot svg {
  background: transparent;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 991px) {
  .sallesBills {
    width: 70%;
  }
  /* .extra-table {
    width: 200% !important;
  }
  .table {
    width: 210% !important;
  } */
}
@media (max-width: 765px) {
  .sallesBills {
    width: 100%;
  }
  /* .extra-table {
    width: 230% !important;
  }
  .table {
    width: 250% !important;
  } */
}
@media (max-width: 540px) {
  /* .extra-table {
    width: 300% !important;
  }
  .table {
  } */
}
</style>
