<template>
  <div class="fundMovement">
    <div class="container">
      <h4>حركة رصيد صندوق الفرع</h4>
      <p>
        تعتبر وثائق مالية تُستخدم لتوثيق عمليات البيع بصالون حلاقة خاص بك. تحتوي
        فاتورة المبيعات عادةً على معلومات مهمة تتعلق بالخدمات التي تم بيعها
        والمبلغ المستحق للدفع.
      </p>
      <div class="all-table" style="overflow-x: auto">
        <div class="row extra-table">
          <div class="search">
            <fa icon="coins" /> <span>رصيد الصندوق :</span>
            <span> 7000</span>
            <div class="input-container">
              <fa icon="search" />
              <input
                class="input-field"
                type="text"
                placeholder="البحث عن..."
              />
            </div>
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
              <th scope="col">التاريخ</th>
              <th scope="col">الرصيد الافتتاحي</th>
              <th scope="col">المبيعات (شبكة)</th>
              <th scope="col">المبيعات (كاش)</th>
              <th scope="col">إجمالي المبيعات</th>
              <th scope="col">العمولات</th>
              <th scope="col">العمولات المدفوعة</th>
              <th scope="col">المتبقي من العمولات</th>
              <th scope="col">المشتريات والمصروفات</th>
              <th scope="col">المشتريات النثرية</th>
              <th scope="col">الرصيد</th>
              <th scope="col">الاستقطاعات</th>
              <th scope="col">تغذية الصندوق</th>
              <th scope="col">رصيد الإغلاق</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>11:35ص</h6>
                <h6>2023-09-05</h6>
              </td>
              <td>456</td>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>456</td>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>456</td>
              <td>561</td>
              <td>6</td>
              <td>97</td>
              <td>97</td>
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
            <td>
              <fa icon="	fas fa-angle-right" />
              <fa icon="	fas fa-angle-left" />1-10 من 100 عنصر
            </td>
          </tfoot>
        </table>
      </div>
      <div class="feed-the-box">
        <fa icon="coins" />
        <h6>تغذية صندوق الكاشير</h6>
        <p>
          يمكنك إيداع مبلغ في رصيد صندوق الكاشير بدون إقفال الحسابات وسيتم خصمه
          من رصيد صندوق الفرع
        </p>
        <form @submit="addFeed" class="row">
          <div class="col-lg-6 col-md-12">
            <label>مبلغ الإيداع </label>
            <input
              type="text"
              placeholder="المبلغ "
              required
              v-model="feed_info.amount"
            />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>البيان الإيداع </label>
            <input
              type="text"
              placeholder="ادخل البيان"
              required
              v-model="feed_info.state"
            />
          </div>
          <div v-if="errors1.length > 0">
            <ul>
              <li
                class="error-message"
                dir="rtl"
                v-for="(error, index) in errors1"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button :disabled="isLoading1" class="btn">أضف المبلغ</button>
        </form>
      </div>
      <div class="feed-the-box">
        <fa icon="coins" />
        <h6>سحب من صندوق الكاشير</h6>
        <p>
          يمكنك سحب مبلغ من رصيد صدوق الكاشير بدون إقفال الحسابات وسيتم إضافته
          إلى رصيد صندوق الفرع
        </p>
        <form @submit="addDrawal" class="row">
          <div class="col-lg-6 col-md-12">
            <label>مبلغ الإيداع </label>
            <input
              type="text"
              placeholder="المبلغ "
              required
              v-model="drawal_info.amount"
            />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>البيان الإيداع </label>
            <input
              type="text"
              placeholder="ادخل البيان"
              required
              v-model="drawal_info.state"
            />
          </div>
          <div v-if="errors2.length > 0">
            <ul>
              <li
                class="error-message"
                dir="rtl"
                v-for="(error, index) in errors2"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button :disabled="isLoading2" class="btn">سحب المبلغ</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "FundMovement",
  components: {
    "ejs-calendar": CalendarComponent,
  },
  data() {
    return {
      isComponentVisible: false,
      isLoading1: false,
      isLoading2: false,
      errors1: [],
      errors2: [],
      feed_info: {
        amount: "",
        state: "",
      },
      drawal_info: {
        amount: "",
        state: "",
      },
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
    addFeed(event) {
      event.preventDefault();
      this.isLoading1 = true;
      fetch("https://www.setrex.net/haircut/backend/public/api/deposit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          amount: this.feed_info.amount,
          statement: this.feed_info.state,
        }),
      }).then((response) => {
        this.isLoading1 = false;
        if (response.ok) {
          this.$router.push({ name: "CashierFeed" });
          return response.json();
        } else if (response.status === 400) {
          response.json().then((data) => {
            const errors = data.errors;
            if (errors) {
              if (this.errors1.length > 0) {
                this.errors1 = [];
              }
              if (typeof errors === "string") {
                this.errors2.push(errors);
              } else {
                Object.values(errors).forEach((errorMessages) => {
                  errorMessages.forEach((errorMessage) => {
                    this.errors2.push(errorMessage);
                  });
                });
              }
              setTimeout(() => {
                this.errors1 = [];
              }, 10000);
            }
          });
        }
      });
    },
    addDrawal(event) {
      event.preventDefault();
      this.isLoading2 = true;
      fetch("https://www.setrex.net/haircut/backend/public/api/withdraw", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: localStorage.getItem("branch_id"),
          amount: this.drawal_info.amount,
          statement: this.drawal_info.state,
        }),
      }).then((response) => {
        this.isLoading2 = false;
        if (response.ok) {
          this.$router.push({ name: "CashierWithdrawals" });
          return response.json();
        } else if (response.status === 400) {
          response.json().then((data) => {
            const errors = data.errors;
            if (errors) {
              if (this.errors2.length > 0) {
                this.errors2 = [];
              }
              if (typeof errors === "string") {
                this.errors2.push(errors);
              } else {
                Object.values(errors).forEach((errorMessages) => {
                  errorMessages.forEach((errorMessage) => {
                    this.errors2.push(errorMessage);
                  });
                });
              }
              setTimeout(() => {
                this.errors2 = [];
              }, 10000);
            }
          });
        }
      });
    },
  },
};
</script>
<style scoped>
.control_wrapper {
  position: absolute;
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
.fundMovement {
  direction: rtl;
  width: 77%;
}
.fundMovement h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.fundMovement p {
  color: #1a2669;
  font-weight: 400;
  padding: 2vh;
}
.fundMovement .extra-table {
  margin: 0 4vh;
  margin-bottom: 3vh;
  display: flow-root;
}
.fundMovement .search {
  width: auto;
  float: right;
}
.fundMovement .search span {
  padding-left: 2vh;
  color: #3f51b5;
}
.fundMovement .search svg {
  color: #3f51b5;
  padding-left: 0.7vh;
}
.fundMovement .search span:first-of-type {
  font-weight: 500;
}
.fundMovement .search span:last-of-type {
  font-weight: 400;
}
.fundMovement .input-container {
  border: 1px solid #c8c9cc;
  box-shadow: 0px 0px 4px 0px #6e49cb33;
  border-radius: 8px;
  width: auto;
  display: inline;
  color: #3f51b5;
  padding: 1vh;
}
.fundMovement input {
  border: 0;
  outline: none;
  color: #3f51b5;
}
.fundMovement input::placeholder {
  color: #757575;
  text-align: start;
}
.fundMovement .extra-table button {
  float: left;
  width: auto;
}
.fundMovement .extra-table button:last-of-type {
  background: #fff;
  color: #3f51b5;
  border: 1px solid #3f51b5;
}
.fundMovement .extra-table button:first-of-type {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 5px;
}
.fundMovement .all-table {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  padding: 3vh 0 0;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  font-weight: 700;
}
.fundMovement table {
  margin-bottom: 0;
  border: 1px solid #3f51b5;
  text-align: center;
}
.fundMovement table tfoot {
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

.fundMovement table thead tr th,
.fundMovement table tfoot tr th {
  background: #3f51b5;
  color: #e3e3e3;
  font-weight: 400;
}
.fundMovement table tr td,
.fundMovement table tr th {
  color: #1a2669;
  font-weight: 400;
}

.fundMovement table tfoot {
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

.fundMovement .feed-the-box {
  margin: 8vh 0 3vh;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.fundMovement .feed-the-box svg {
  color: #1a2669;
}
.fundMovement .feed-the-box h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 1vh;
  display: inline-block;
  margin-right: 10px;
}
.fundMovement .feed-the-box p {
  color: #1a2669;
}
.fundMovement .feed-the-box label {
  display: block;
  margin-bottom: 2vh;
  color: #1a2669;
}
.fundMovement .feed-the-box input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.fundMovement .feed-the-box input::placeholder {
  color: #c8c9cc;
}
.fundMovement .feed-the-box button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: auto;
  margin: auto;
  margin-top: 5vh;
}

.control_wrapper {
  width: auto !important;
  float: none !important;
}
.error-message {
  padding: 10px;
  color: red;
  display: inline-flex;
  list-style-type: none;
}
ul {
  margin-top: 30px;
}
@media (max-width: 1300px) {
  .table {
    width: 150% !important;
  }
  .fundMovement .extra-table {
    width: 140% !important;
  }
}
@media (max-width: 991px) {
  .fundMovement {
    width: 70%;
  }
  .table {
    width: 200% !important;
  }
  .fundMovement .extra-table {
    width: 190% !important;
  }
}
@media (max-width: 765px) {
  .fundMovement {
    width: 100%;
  }
  .control_wrapper {
    width: auto !important;
    float: none !important;
  }
}
@media (max-width: 540px) {
  .search {
    margin-bottom: 2vh !important;
  }
}
</style>
