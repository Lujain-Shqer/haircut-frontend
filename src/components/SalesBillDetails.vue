<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button @click="closeModal" class="close-button">Close</button>
      <div class="modal-content">
        <h2>رقم الفاتورة{{ salesBillDetails.id }}</h2>
        <p>اسم الموظف{{ salesBillDetails.employee.name }}</p>
        <p>طريقة الدفع{{ salesBillDetails.amount_pay_type }}</p>
        <p>القيمة{{ salesBillDetails.amount }}</p>
        <p>قيمة الكاش{{ salesBillDetails.cash_amount }}</p>
        <p>قيمة الشبكة{{ salesBillDetails.online_amount }}</p>
        <p>مبلغ الخصم {{ salesBillDetails.discount }}</p>
        <p>القيمة المضافة{{ salesBillDetails.tax }}</p>
        <p>مكافأة من العميل{{ salesBillDetails.tip }}</p>
        <p>طريقة دفع المكافاة {{ salesBillDetails.tip_pay_type }}</p>
        <p>المجموع {{ salesBillDetails.amount_after_discount }}</p>
        <p>موظف{{ salesBillDetails.employee_commission }}</p>
        <p>مدير الفرع{{ salesBillDetails.manager_commission }}</p>
        <p>مندوب{{ salesBillDetails.representative_commission }}</p>
        <p>التاريخ{{ salesBillDetails.created_at.split("T")[0] }}</p>
        <p>
          الوقت{{ salesBillDetails.created_at.split("T")[1].split(".")[0] }}
        </p>
        <p>الحالة{{ salesBillDetails.state }}</p>
        <p>اسم العميل {{ salesBillDetails.customer.name }}</p>
        <p>رقم العميل{{ salesBillDetails.customer.phone_number }}</p>
        <div v-if="salesBillDetails.services.length">
          <h3>خدمات</h3>
          <ul>
            <li v-for="service in salesBillDetails.services" :key="service.id">
              {{ service.name }}
            </li>
          </ul>
        </div>
        <div v-if="salesBillDetails.products.length">
          <h3>منتجات</h3>
          <ul>
            <li v-for="product in salesBillDetails.products" :key="product.id">
              {{ product.name }}
            </li>
          </ul>
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
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Close button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
</style>
