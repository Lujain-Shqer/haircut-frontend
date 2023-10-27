<template>
  <div class="addProducts">
    <div class="container">
      <h4>المنتجات</h4>
      <p>
        التي تشمل الخدمات والمنتجات التي تعزز تجربة العميل وتجعلها فاخرة ومريحة
      </p>
      <div class="update-info-client row">
        <h6>أنشاء منتج جديد</h6>
        <div class="col-lg-7 col-sm-12">
          <form class="row">
            <div class="col-md-12">
              <label>الاسم</label>
              <input type="text" placeholder=" اسم " />
            </div>
            <div class="col-md-12">
              <label>اختر الموظف</label>
              <select class="form-selec" aria-label="Default select example">
                <option selected>اختر الموظف</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-12">
              <label>سعر الشراء</label>
              <input type="text" placeholder=" سعر الشراء " />
            </div>
            <div class="col-md-12">
              <label>سعر البيع</label>
              <input type="text" placeholder="  سعر البيع " />
            </div>
          </form>
        </div>
        <div class="download-image col-lg-5 col-sm-12">
          <h6 class="text-center">يرجى تحميل صورة المنتج</h6>
          <div class="downloaded">
            <img src="../../../assets/downloaded.png" />
            <h6>حدد ملفًا أو قم بالسحب والإسقاط هنا</h6>
            <p>JPG, PNG or PDF, file size no more than 10MB</p>
            <button class="btn">Select file</button>
          </div>
        </div>
        <button class="btn">إضافة مقدم خدمة جديد</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddProducts",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addProducts {
  direction: rtl;
  width: 80%;
}
.addProducts h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addProducts p {
  color: #1a2669;
  font-weight: 400;
}
.addProducts .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addProducts h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addProducts label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}

.addProducts input,
.addProducts .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 70%;
  outline: none;
}
.addProducts input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}
.addProducts input[type="text"]:focus {
  border: 1px solid #1a2669;
}
.addProducts form span {
  font-weight: 600;
  color: #1a2669;
}

.addProducts button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 40%;
  margin: auto;
  margin-top: 5vh;
}
.addProducts .downloaded {
  text-align: center;
  border: 1px dashed #00000040;
  border-radius: 8px;
  padding: 3vh 1vh;
}
.addProducts .downloaded img {
  margin: 1vh 0;
}
.addProducts .downloaded button {
  border: 1px solid #1a2669;
  background: #fff;
  color: #0f91d2;
}
@media (max-width: 991px) {
  .addProducts input[type="text"],
  .addProducts select {
    width: 100% !important;
  }
  .addProducts button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addProducts {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addProducts {
    width: 100%;
  }
}
</style>
