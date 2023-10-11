<template>
  <div class="AddNotTaxable">
    <div class="container">
      <h3>المصاريف العمومية الغير خاضعة للضرببة</h3>
      <p>
        المصاريف التي يمكن خصمها من الإيرادات الخاضعة للضرائب لغرض حساب الضرائب
        الصافية.
      </p>
      <div class="update-info-client">
        <h5>فاتورة المصاريف العمومية الغير خاضعة للضرببة</h5>
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
  name: "AddNotTaxable",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddNotTaxable {
  direction: rtl;
  width: 80%;
}
.AddNotTaxable h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddNotTaxable p {
  color: #1a2669;
  font-weight: 400;
}
.AddNotTaxable .update-info-client {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddNotTaxable h5 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddNotTaxable label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 700;
  color: #1a2669;
}
.AddNotTaxable input,
.AddNotTaxable .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.AddNotTaxable input::placeholder,
.AddNotTaxable .form-select::placeholder {
  color: #c8c9cc;
}
.AddNotTaxable button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddNotTaxable button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}
/* .AddTaxable button:first-of-type {
    margin: auto;
    margin-bottom: 1vh;
  } */
@media (max-width: 991px) {
  .AddNotTaxable input,
  .AddNotTaxable .form-selec {
    width: 100%;
  }
  .AddNotTaxable button,
  .AddNotTaxable button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
}
@media (max-width: 765px) {
  .AddNotTaxable {
    width: 100%;
  }
}
</style>
