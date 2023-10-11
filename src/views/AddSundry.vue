<template>
  <div class="addSundry">
    <div class="container">
      <h3>المنتجات النثرية</h3>
      <p>
        هي المنتجات التي يحتاجها الموظف أثناء العمل و تكون تحت حسابات المالية
        لبند المنتجات النثرية
      </p>
      <div class="update-info-client">
        <h5>منتج جديد</h5>
        <form class="row">
          <div class="col-lg-6 col-md-12">
            <label>الاسم</label>
            <input type="text" placeholder="اضف اسم المنتج " />
          </div>
          <div class="col-lg-6 col-md-12">
            <label>سعر الشراء</label>
            <input type="text" placeholder="اضف سعر الشراء" />
          </div>
          <button class="btn">إضافة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddSundry",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addSundry {
  direction: rtl;
  width: 80%;
}
.addSundry h3 {
  color: #3f51b5;
  font-weight: 700px;
}
.addSundry p {
  color: #1a2669;
  font-weight: 400;
}
.addSundry .update-info-client {
  margin-top: 8vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addSundry h5 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addSundry label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 700;
}
.addSundry input {
  border: 1px solid #c8c9cc;
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}

.addSundry button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}

@media (max-width: 991px) {
  .addSundry input {
    width: 100%;
  }
  .addSundry button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addSundry {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addSundry {
    width: 100%;
  }
}
</style>
