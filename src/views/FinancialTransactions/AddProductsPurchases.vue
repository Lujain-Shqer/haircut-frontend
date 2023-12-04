<template>
  <div class="AddProductsPurchases">
    <div class="container">
      <h4>مشتريات المنتجات</h4>
      <p>
        يعتمدون على خبرة الحلاق في تلبية توقعاتهم وجعلهم يشعرون بالارتياح
        بمظهرهم الجديد. تلعب العلاقة الجيدة بين الحلاق والعميل دورًا مهمًا في
        تحقيق رضا الزبون وإعادته لزيارات متكررة.
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
          <div class="col-lg-12 row cards">
            <label> المنتجات النثرية</label>
            <div class="col">
              <div class="card">
                <img src="../../assets/salePoints/Prod/16.png" />
                <input type="text" placeholder="Enter input here" />
              </div>
            </div>
          </div>
          <button class="btn add">إضافة الفاتورة</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddProductsPurchases",
  data() {
    return {};
  },
  methods: {
    show() {},
  },
};
</script>
<style scoped>
.row {
  margin: 0;
}
.AddProductsPurchases {
  direction: rtl;
  width: 80%;
}
.AddProductsPurchases h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.AddProductsPurchases p {
  color: #1a2669;
  font-weight: 400;
}
.AddProductsPurchases .update-info-client {
  margin-top: 5vh 0;
  border: 1px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.AddProductsPurchases h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.AddProductsPurchases label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: #1a2669;
}
.AddProductsPurchases input,
.AddProductsPurchases .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  width: 50%;
  outline: none;
  color: #3f51b5;
}
.AddProductsPurchases input::placeholder,
.AddProductsPurchases .form-select::placeholder {
  color: #c8c9cc;
}
.AddProductsPurchases button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  margin-right: 2vh;
  font-size: 2vh;
}
.AddProductsPurchases button.add {
  margin: auto;
  width: auto;
  margin-top: 5vh;
  padding: 1vh 4vh;
}

@media (max-width: 991px) {
  .AddProductsPurchases input,
  .AddProductsPurchases .form-selec {
    width: 100%;
  }
  .AddProductsPurchases button,
  .AddProductsPurchases button.add {
    width: auto;
    margin: 2vh auto;
  }
  .AddProductsPurchases {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .AddProductsPurchases {
    width: 100%;
  }
}
/* For The Products */
.row {
  justify-content: space-around;
}
.card {
  border: 0;
  width: 10%;
  transition: all 0.5s;
  margin-bottom: 2vh;
  display: inline-block;
}
.card input {
  width: 100%;
  margin: 1vh 0;
  display: none;
}

@media (max-width: 991px) {
  .card {
    width: 16%;
  }
}
@media (max-width: 768px) {
  .card {
    width: 32%;
  }
}
@media (max-width: 580px) {
  .card {
    width: 40%;
  }
}
</style>
