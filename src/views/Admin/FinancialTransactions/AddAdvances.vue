<template>
  <div class="addAdvances">
    <div class="container">
      <h4>السلفيات</h4>
      <p>
        السلفيات هي مبالغ مالية تُعطى للعملاء أو الموظفين مقدمًا قبل تقديم
        الخدمة أو السلعة المقابلة. هذه المبالغ تُمنح عادة كجزء من اتفاق مسبق بين
        الطرفين ويجري تحصيلها في وقت لاحق.
      </p>
      <div class="update-info-client">
        <h6>إضافة سلفة</h6>
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
            <label>أدخل مبلغ السلفة</label>
            <input type="text" placeholder="أدخل مبلغ السلفة" />
          </div>
          <div class="col-lg-12">
            <label>أدخل البيان</label>
            <input type="text" placeholder="أدخل البيان" />
          </div>
          <button class="btn add">إضافة السلفة</button>
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
.addAdvances {
  direction: rtl;
  width: 80%;
}
.addAdvances h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addAdvances p {
  color: #1a2669;
  font-weight: 400;
}
.addAdvances .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addAdvances h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addAdvances label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.addAdvances input,
.addAdvances .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
}
.addAdvances input::placeholder,
.addAdvances .form-select::placeholder {
  color: #c8c9cc;
}
.addAdvances button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.addAdvances button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}
/* .AddTaxable button:first-of-type {
      margin: auto;
      margin-bottom: 1vh;
    } */
@media (max-width: 991px) {
  .addAdvances input,
  .addAdvances .form-selec {
    width: 100%;
  }
  .addAdvances button,
  .addAdvances button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addAdvances {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addAdvances {
    width: 100%;
  }
}
</style>
