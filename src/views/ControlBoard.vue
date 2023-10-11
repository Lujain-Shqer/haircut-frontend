<template>
  <!-- <NavBar /> -->
  <div class="ControlBoard">
    <!-- <SideBar /> -->
    <div class="container writeBar">
      <h1 class="h1">أهلا و سهلا بك بعالمك !</h1>
      <div class="coiner">
        <div class="row info-statistics">
          <div class="col-xl-3 col-lg-6 col-md-12">
            <h5>إيرادات اليوم</h5>
            <h4>3,456</h4>
            <img src="../assets/Group.png" />
            <span>إيرادات الأسبوع</span>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12">
            <h5>إيرادات الإسبوع</h5>
            <h4>5,2</h4>
            <img src="../assets/Group.png" />
            <span>700 زبون </span>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12">
            <h5>جلسات اليوم</h5>
            <h4>20</h4>

            <span>زبون</span>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12">
            <h5>موظف يوم (الأربعاء)</h5>
            <h4>السيد صابر</h4>
            <span>قيمة المبيعات: 700</span>
          </div>
        </div>
        <div class="row info-works">
          <div class="col-xl-7 col-lg-12">
            <div class="row info-work">
              <h5>حالة فترة العمل</h5>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <fa icon="calendar" /><span>11-2-4034</span>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <fa icon="clock" /><span>3:30Am</span>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-12"><fa icon="home" /></div>
              <div class="col-lg-3 col-md-6 col-sm-12 open">
                مفتوح <span></span>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <img src="../assets/one.png" />
          </div>
        </div>
        <h1 class="h1 header">تقرير الإجمالي ( الأربعاء )</h1>
        <div class="row info-sales">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المبيعات</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المبيعات(شبكة)</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المبيعات (الكاش)</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>عدد فواتير المبيعات</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المشتريات</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المشتريات النثرية</span>
              <h4>345</h4>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المصاريف العمومية</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>العمولات</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المدفوع من العمولات</span>
              <h4>345</h4>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <fa icon="home" />
              <span>المتبقي من العمولات</span>
              <h4>345</h4>
            </div>
          </div>
        </div>
        <h1 class="h1">مبيعات حسب الموظف ( الأربعاء )</h1>
        <div class="row info-employ">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-xl-3 col-lg-12">
                  <img src="../assets/three.png" />
                </div>
                <div class="col-xl-9 col-lg-12">
                  <div class="card-body">
                    <div class="card-text row">
                      <span class="col-7">إجمالي المبيعات:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7">العمولات:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7">العمولات المدفوعة:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7"> العمولات المتبقية:</span>
                      <span class="col-5">4567 SAR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-xl-3 col-lg-12">
                  <img src="../assets/three.png" />
                </div>
                <div class="col-xl-9 col-lg-12">
                  <div class="card-body">
                    <div class="card-text row">
                      <span class="col-7">إجمالي المبيعات:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7">العمولات:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7">العمولات المدفوعة:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7"> العمولات المتبقية:</span>
                      <span class="col-5">4567 SAR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-xl-3 col-lg-12">
                  <img src="../assets/three.png" />
                </div>
                <div class="col-xl-9 col-lg-12">
                  <div class="card-body">
                    <div class="card-text row">
                      <span class="col-7">إجمالي المبيعات:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7">العمولات:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7">العمولات المدفوعة:</span>
                      <span class="col-5">4567 SAR</span>
                      <span class="col-7"> العمولات المتبقية:</span>
                      <span class="col-5">4567 SAR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
// import NavBar from "@/components/NavBar.vue";
// import SideBar from "@/components/SideBar.vue";

export default {
  name: "ControlBoard",
  // components: {
  //   NavBar,
  //   SideBar,
  // },
};
</script>
<style scoped>
.ControlBoard {
  width: 100%;
}
.writeBar {
  width: 80%;
  float: left;
}
.container {
  direction: rtl;
}
h1 {
  color: #1a2669;
  margin-top: 5vh !important;
  font-weight: 500;
  margin-bottom: 10vh !important;
}
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
.info-statistics div h5,
.info-statistics div span {
  color: #757de8;
  font-weight: 700;
  margin-bottom: 3vh;
  display: block;
}
.info-statistics div span {
  font-weight: 400;
  margin-top: 2vh;
}
.info-statistics div h4 {
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
.info-works {
  margin: 0 5vh !important;
  margin-top: 10vh !important;
}
.info-work {
  border: Mixed solid #acae8938;
  border-radius: 15px;
  padding: 3vh;
  color: #747474;
  box-shadow: 0px 0px 8px 0px #1d1d1b33;
  margin-top: 5vh;
}
.info-work svg {
  color: #1a2669;
  padding-left: 3vh;
}
.info-work h5 {
  font-weight: 700;
  margin-bottom: 2vh;
  color: #757de8;
}
.info-work .open {
  padding-bottom: 1vh;
  border-radius: 40px;
  background: #dcfce7;
  color: #22c55e;
  text-align: center;
}
.info-work .open span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  margin-right: 1vh;
}
.info-works img {
  width: 100%;
  margin-right: 5vh;
}

.info-sales {
  margin: 0 5vh;
  justify-content: center;
}

.info-sales div {
  text-align: center;
}
.info-sales .card {
  background: #ebedf7;
  margin-bottom: 5vh;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
}
.info-sales svg {
  margin-bottom: 10vh;
  position: absolute;
  top: -20px;
  left: 38%;
  width: 25px;
  height: 25px;
  background: #757de8;
  color: #ffffe9;
  display: inline-block;
  padding: 2vh;
  border-radius: 7px;
}
.info-sales h4 {
  font-weight: 700;
  color: #3f51b5;
}
.info-sales span {
  margin-top: 7vh;
  font-weight: 700;
  font-size: 3vmin;
  color: #1a2669;
}
.info-employ {
  justify-content: center;
}
.info-employ span:nth-child(even) {
  color: #757de8;
}
.info-employ span:nth-child(odd) {
  color: #1a2669;
}
.info-employ svg {
  font-size: 20vh;
  padding: 3vh;
}
.info-employ h6 {
  text-align: end;
}
@media (max-width: 1200px) {
  .info-statistics {
    margin: 15px !important;
    text-align: center;
  }
  .info-statistics div:last-child,
  .info-statistics div:nth-child(2),
  .info-statistics div:nth-child(3) {
    border-right: 0;
  }
  .info-statistics div:first-child,
  .info-statistics div:nth-child(2) {
    border-bottom: 1px dashed #d9def1;
  }
  .info-works img {
    display: none;
  }
}
@media (max-width: 991px) {
  .info-statistics div {
    border-bottom: 1px dashed #d9def1;
  }
  .info-statistics div:last-child {
    border-bottom: 0;
  }

  .container {
    width: 70%;
  }
}
@media (max-width: 765px) {
  .container {
    width: 100%;
    float: none;
  }
}
</style>
