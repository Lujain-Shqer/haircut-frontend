<template>
  <div class="addExpenses">
    <div class="container">
      <h3>بنود المصاريف العمومية</h3>
      <p>
        هتشمل العديد من النفقات التي لا تندرج تحت تصنيف معين ولا تتعلق بالإنتاج
        المباشر أو تقديم الخدمات. بنود المصاريف العمومية تشمل عادة مجموعة متنوعة
        من التكاليف .
      </p>
      <div class="update-info-client">
        <h5>بند مصاريف عمومية جديد</h5>
        <form class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input type="text" placeholder="اضف اسم المنتج " />
          </div>
          <div class="col-md-12">
            <span>هل مقدم الخدمة خاضع للضريبة:</span>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <button class="btn">إضافة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddExpenses",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addExpenses {
  direction: rtl;
  width: 80%;
}
.addExpenses h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.addExpenses p {
  color: #1a2669;
  font-weight: 400;
}
.addExpenses .update-info-client {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addExpenses h5 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addExpenses label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 700;
}
.addExpenses input[type="text"] {
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.addExpenses input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}
.addExpenses form span {
  font-weight: 700;
  color: #1a2669;
}

.addExpenses button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}

@media (max-width: 991px) {
  .addExpenses input {
    width: 100%;
  }
  .addExpenses button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addExpenses {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addExpenses {
    width: 100%;
  }
}
</style>
