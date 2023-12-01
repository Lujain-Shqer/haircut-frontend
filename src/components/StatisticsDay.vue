<template>
  <div class="row info-statistics">
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>
        الإيرادات اليومي
        <span class="state"> 8.3% <fa icon="arrow-up" /></span>
      </h6>
      <h5>3,456</h5>
      <img src="../assets/sign.png" />
      <span>34.28 ريال متوسط الطلب</span>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>
        إيرادات اسبوع
        <span class="state"> 8.3% <fa icon="arrow-up" /></span>
      </h6>
      <h5>5,2</h5>
      <img src="../assets/sign.png" />
      <span>700 زبون</span>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>
        جلسات اليوم
        <span class="state"> 8.3% <fa icon="arrow-up" /></span>
      </h6>

      <h5>20</h5>

      <span>زبون</span>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>موظف يوم (الأربعاء)</h6>
      <h5>السيد صابر</h5>
      <span>بقيمة مبيعات :7000 SAR </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsDay",
};
</script>

<style scoped>
.info-statistics {
  border: 2px solid #eceef6;
  padding: 1vh;
  border-radius: 20px;
  box-shadow: 0px 0px 8px 0px #1d1d1b33;
  margin: 0 5vh !important;
  margin-top: 8vh !important;
}
.info-statistics div {
  padding: 2vh;
}
.info-statistics div h6,
.info-statistics div span {
  color: #757de8;
  font-weight: 600;
  margin-bottom: 3vh;
  display: block;
}
.info-statistics div .state {
  color: #3f51b5;
  background: #f4f6f6;
  border-radius: 8px;
  font-weight: 500;
  display: inline;
  margin-right: 1vh;
  padding: 5px;
}
.info-statistics div span {
  font-weight: 400;
  margin-top: 2vh;
}
.info-statistics div h5 {
  color: #3f51b5;
  font-weight: 700;
  display: inline;
  padding-left: 2vh;
}
.info-statistics div:last-child {
  border-right: 1px dashed #d9def1;
  padding-right: 5vh;
}
.info-statistics div:nth-child(2) {
  border-right: 1px dashed #d9def1;
  padding-right: 5vh;
}
.info-statistics div:nth-child(3) {
  border-right: 1px dashed #d9def1;
  padding-right: 5vh;
}
</style>
