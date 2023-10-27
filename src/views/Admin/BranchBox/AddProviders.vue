<template>
  <div class="addProviders">
    <div class="container">
      <h4>مقدمو الخدمات العامة</h4>
      <p>
        مقدمو الخدمات العامة هم الأشخاص أو الكيانات التي يقدمون خدمات للجمهور أو
        المؤسسات بدون تخصيص معين وعلى نطاق عام. هؤلاء المقدمون يشملون مجموعة
        متنوعة من القطاعات
      </p>
      <div class="update-info-client">
        <h6>مقدم خدمة جديد</h6>
        <form class="row">
          <div class="col-md-12">
            <label>الاسم</label>
            <input type="text" placeholder=" اسم " />
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
          <div class="col-md-12">
            <label>الرقم الضريبي</label>
            <input type="text" placeholder=" الرقم الضريبي " />
          </div>
          <button class="btn">إضافة مقدم خدمة جديد</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddProviders",
};
</script>
<style scoped>
.row {
  margin: 0;
}
.addProviders {
  direction: rtl;
  width: 80%;
}
.addProviders h4 {
  color: #3f51b5;
  font-weight: 700px;
}
.addProviders p {
  color: #1a2669;
  font-weight: 400;
}
.addProviders .update-info-client {
  margin-top: 5vh;
  border: 1.5px solid #3f51b5;
  box-shadow: 0px 0px 15px 0px #00000040;
  border-radius: 8px;
  padding: 5vh;
}
.addProviders .update-info-client form div:nth-child(2) {
  margin: 3vh 0;
}
.addProviders h6 {
  color: #3f51b5;
  font-weight: 700px;
  margin-bottom: 3vh;
}
.addProviders label {
  display: block;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-weight: 400;
}
.addProviders input[type="text"] {
  color: #1a2669;
  border-radius: 8px;
  padding: 1vh;
  width: 40%;
  outline: none;
  margin-bottom: 3vh;
  border: 1px solid #c8c9cc;
}
.addProviders input[type="checkbox"] {
  border: 1px solid #1a2669;
  margin-right: 1vh;
  width: 3vh;
  height: 3vh;
}
.addProviders input[type="text"]:focus {
  border: 1px solid #1a2669;
}
.addProviders form span {
  font-weight: 600;
  color: #1a2669;
}

.addProviders button {
  background: #3f51b5;
  color: #fff;
  border: 1px solid #3f51b5;
  width: 25%;
  margin: auto;
  margin-top: 5vh;
}

@media (max-width: 991px) {
  .addProviders input[type="text"] {
    width: 100%;
  }
  .addProviders button {
    width: 95%;
    margin-right: 2vh;
    margin-top: 2vh;
  }
  .addProviders {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .addProviders {
    width: 100%;
  }
}
</style>
