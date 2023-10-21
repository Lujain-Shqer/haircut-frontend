<template>
  <div class="disabledAppoinments">
    <div class="container">
      <h4>المواعيد المعطلة</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <div class="input-container">
          <h6>حجز المواعيد المعطلة</h6>
          <button class="btn">قائمة المواعيد المعطلة</button>
        </div>
        <form class="row">
          <div class="col-lg-12">
            <label>تاريخ العطلة</label>
            <select class="form-selec" aria-label="Default select example">
              <option selected>من الفترة -> الى الفترة</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-lg-12">
            <label>اسم الموظف</label>
            <select class="form-selec" aria-label="Default select example">
              <option selected>اختر اسم الموظف</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <button class="btn add">تأكيد</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DisabledAppoinments",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.disabledAppoinments {
  direction: rtl;
  width: 80%;
}

.disabledAppoinments h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.disabledAppoinments p {
  color: #1a2669;
  font-weight: 400;
}
.disabledAppoinments .update-info-client {
  margin-top: 5vh;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.disabledAppoinments .input-container {
  display: flow-root;
}
.disabledAppoinments h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
  display: inline-block;
}
.disabledAppoinments .input-container button {
  float: left;
}
.disabledAppoinments label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.disabledAppoinments input,
.disabledAppoinments .form-selec {
  border: 1px solid #3f51b5;
  color: #3f51b5;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  margin-bottom: 2vh;
}
.disabledAppoinments input::placeholder,
.disabledAppoinments .form-select::placeholder {
  color: #c8c9cc;
}
.disabledAppoinments button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
  font-weight: 500;
}
.disabledAppoinments button.add {
  margin: auto;
  width: 25%;
  margin-top: 5vh;
}

@media (max-width: 991px) {
  .disabledAppoinments input,
  .disabledAppoinments .form-selec {
    width: 100%;
  }
  .disabledAppoinments button,
  .disabledAppoinments button.add {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
}
@media (max-width: 765px) {
  .disabledAppoinments {
    width: 100%;
  }
}
</style>
