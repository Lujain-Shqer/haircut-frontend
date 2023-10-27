<template>
  <div class="addDiscounts">
    <div class="container">
      <h4>الخصومات</h4>
      <p>
        الخصومات تشير إلى تخفيضات أو تنزيلات يتم منحها للعملاء عند شراء منتجات
        أو خدمات من الصالون. هذه الخصومات يمكن أن تكون لها طابع متنوع وتطبق
        لأسباب مختلفة.
      </p>
      <div class="update-info-client">
        <h6>إضافة خصم</h6>
        <form class="row">
          <div class="col-lg-12">
            <label>اختر الموظف</label>
            <select class="form-selec" aria-label="Default select example">
              <option selected>اختر الموظف</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-lg-12">
            <label>أدخل مبلغ الخصم</label>
            <input type="text" placeholder="أدخل مبلغ الخصم" />
          </div>
          <div class="col-lg-12">
            <label>أدخل سبب الخصم</label>
            <input type="text" placeholder="أدخل سبب الخصم" />
          </div>
          <button class="btn add">إضافة خصم</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddDiscounts",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addDiscounts {
  direction: rtl;
  width: 80%;
}
.addDiscounts h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addDiscounts p {
  color: #1a2669;
  font-weight: 400;
}
.addDiscounts .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addDiscounts h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addDiscounts label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.addDiscounts input,
.addDiscounts .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.addDiscounts input::placeholder,
.addDiscounts .form-select::placeholder {
  color: #c8c9cc;
}
.addDiscounts button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.addDiscounts button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}
/* .AddTaxable button:first-of-type {
    margin: auto;
    margin-bottom: 1vh;
  } */
@media (max-width: 991px) {
  .addDiscounts input,
  .addDiscounts .form-selec {
    width: 100%;
  }
  .addDiscounts button,
  .addDiscounts button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addDiscounts {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addDiscounts {
    width: 100%;
  }
}
</style>
