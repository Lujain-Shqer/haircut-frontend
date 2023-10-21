<template>
  <div class="AddTaxable">
    <div class="container">
      <h4>المصاريف العمومية خاضعة للضرببة</h4>
      <p>
        يتم تضمينها في حساب الإيرادات الإجمالية للفرد أو الشركة لغرض حساب
        الضرائب عليها.
      </p>
      <div class="update-info-client">
        <h6>فاتورة مصاريف عمومية خاضعة للضريبة</h6>
        <form class="row">
          <div class="col-lg-12">
            <label>البند</label>
            <select class="form-selec" aria-label="Default select example">
              <option selected>اختر البند</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-lg-12">
            <label>مقدم الخدمة</label>
            <select
              data-live-search="true"
              class="selectpicker show-menu-arrow form-selec"
            >
              <option>اختر مقدم الخدمة</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button class="btn">اضف جديد</button>
          </div>
          <div class="col-lg-12">
            <label>ادخل المبلغ</label>
            <input type="text" placeholder="المبلغ" />
          </div>
          <button class="btn add">إضافة الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTaxable",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddTaxable {
  direction: rtl;
  width: 80%;
}
.AddTaxable h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddTaxable p {
  color: #1a2669;
  font-weight: 400;
}
.AddTaxable .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddTaxable h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddTaxable label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.AddTaxable input,
.AddTaxable .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.AddTaxable input::placeholder,
.AddTaxable .form-select::placeholder {
  color: #c8c9cc;
}
.AddTaxable button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddTaxable button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}
/* .AddTaxable button:first-of-type {
  margin: auto;
  margin-bottom: 1vh;
} */
@media (max-width: 991px) {
  .AddTaxable input,
  .AddTaxable .form-selec {
    width: 100%;
  }
  .AddTaxable button,
  .AddTaxable button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .AddTaxable {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddTaxable {
    width: 100%;
  }
}
</style>
