<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button @click="closeModal" class="close-button">Close</button>
      <div class="modal-content">
        <h2>{{ salesBillDetails.id }} الفاتورة رقم</h2>
        <p></p>
        <div class="row">
          <h6 class="col-6">اسم الموظف</h6>
          <p class="col-6">{{ salesBillDetails.employee.name }}</p>
          <h6 class="col-6">طريقة الدفع</h6>
          <p class="col-6">{{ salesBillDetails.amount_pay_type }}</p>
          <h6 class="col-6">القيمة</h6>
          <p class="col-6">{{ salesBillDetails.amount }}</p>
          <h6 class="col-6">قيمة الكاش</h6>
          <p class="col-6">{{ salesBillDetails.cash_amount }}</p>
          <h6 class="col-6">قيمة الشبكة</h6>
          <p class="col-6">{{ salesBillDetails.online_amount }}</p>
          <h6 class="col-6">مبلغ الخصم</h6>
          <p class="col-6">{{ salesBillDetails.discount }}</p>
          <h6 class="col-6">القيمة المضافة</h6>
          <p class="col-6">{{ salesBillDetails.tax }}</p>
          <h6 class="col-6">مكافأة من العميل</h6>
          <p class="col-6">{{ salesBillDetails.tip }}</p>
          <h6 class="col-6">طريقة دفع المكافاة</h6>
          <p class="col-6">{{ salesBillDetails.tip_pay_type }}</p>
          <h6 class="col-6">المجموع</h6>
          <p class="col-6">{{ salesBillDetails.amount_after_discount }}</p>
          <h6 class="col-6">عمولة الموظف</h6>
          <p class="col-6">{{ salesBillDetails.employee_commission }}</p>
          <h6 class="col-6">عمولة مدير الفرع</h6>
          <p class="col-6">{{ salesBillDetails.manager_commission }}</p>
          <h6 class="col-6">عمولة مندوب</h6>
          <p class="col-6">{{ salesBillDetails.representative_commission }}</p>
          <h6 class="col-6">التاريخ</h6>
          <p class="col-6">{{ salesBillDetails.created_at.split("T")[0] }}</p>
          <h6 class="col-6">الوقت</h6>
          <p class="col-6">
            {{ salesBillDetails.created_at.split("T")[1].split(".")[0] }}
          </p>
          <h6 class="col-6">الحالة</h6>
          <p class="col-6">{{ salesBillDetails.state }}</p>
          <h6 class="col-6">اسم العميل</h6>
          <p class="col-6">{{ salesBillDetails.customer.name }}</p>
          <h6 class="col-6">رقم العميل</h6>
          <p class="col-6">{{ salesBillDetails.customer.phone_number }}</p>
          <div v-if="salesBillDetails.services.length">
            <h3>خدمات</h3>
            <ul>
              <li
                v-for="service in salesBillDetails.services"
                :key="service.id"
              >
                {{ service.name }}
              </li>
            </ul>
          </div>
          <div v-if="salesBillDetails.products.length">
            <h3>منتجات</h3>
            <ul>
              <li
                v-for="product in salesBillDetails.products"
                :key="product.id"
              >
                {{ product.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    salesBillDetails: Object,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-height: 80vh; /* Adjust as needed */
  overflow-y: auto;
}

/* Modal content */
.modal-content {
  background-color: #fefefe;
  padding: 20px;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Start Model*/
.modal-container {
  width: 50%;
}
.modal-content {
  margin: auto !important;
  border: none !important;
}
.modal-content h2 {
  color: #3f51b5;
  text-align: center;
}
.modal-container button {
  color: #fff;
  background: red;
  border: 1px solid red;
  padding: 1vh;
  border-radius: 5px;
  float: right;
}
.modal-content h6 {
  color: cornflowerblue;
}
@media (max-width: 765px) {
  .modal-container {
    width: 85%;
  }
}
</style>
