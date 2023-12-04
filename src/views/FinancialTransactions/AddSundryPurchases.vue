<template>
  <div class="AddSundryPurchases">
    <div class="container">
      <h4>المشتريات النثرية</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client">
        <h6>إضافة منتج نثري</h6>
        <form class="row">
          <div class="col-lg-12">
            <label>المورد</label>
            <select class="form-selec" required>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
            </select>
          </div>
          <div class="col-lg-12">
            <label> المنتجات النثرية</label>
            <select class="form-selec" required>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
              <option value="">one</option>
            </select>
          </div>
          <button class="btn add">إضافة الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddSundryPurchases",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddSundryPurchases {
  direction: rtl;
  width: 80%;
}
.AddSundryPurchases h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddSundryPurchases p {
  color: #1a2669;
  font-weight: 400;
}
.AddSundryPurchases .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddSundryPurchases h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddSundryPurchases label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.AddSundryPurchases input,
.AddSundryPurchases .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  color: #3f51b5;
}
.AddSundryPurchases input::placeholder,
.AddSundryPurchases .form-select::placeholder {
  color: #c8c9cc;
}
.AddSundryPurchases button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddSundryPurchases button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .AddSundryPurchases input,
  .AddSundryPurchases .form-selec {
    width: 100%;
  }
  .AddSundryPurchases button,
  .AddSundryPurchases button.add {
    width: auto;
    margin: 2vh auto;
  }
  .AddSundryPurchases {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddSundryPurchases {
    width: 100%;
  }
}
</style>
