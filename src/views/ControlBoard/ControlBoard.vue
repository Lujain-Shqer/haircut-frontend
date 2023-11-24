<template>
  <!-- <NavBar /> -->
  <div class="ControlBoard">
    <!-- <SideBar /> -->
    <div class="container writeBar">
      <h3 class="">أهلا و سهلا بك بعالمك !</h3>
      <div class="coiner">
        <div class="chosse-serv">
          <button
            v-on:click="makeActive('StatisticsDay', $event)"
            class="btn blue"
          >
            اليوم الأربعاء
          </button>
          <button
            v-on:click="makeActive('StatisticsMonth', $event)"
            class="btn"
          >
            الشهر الحالي
          </button>
          <button
            v-on:click="makeActive('StatisticsTotal', $event)"
            class="btn"
          >
            الإجمالي
          </button>
        </div>
        <component v-bind:is="component"></component>
        <div class="row info-works">
          <div class="col-md-8">
            <div class="row info-work">
              <h6>حالة فترة العمل</h6>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <fa icon="calendar" /><span>11-2-4034</span>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <fa icon="clock" /><span>3:30Am</span>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-12">
                <fa icon="fa-store-alt" />
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 open">
                مفتوح <span></span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../../assets/dashBourd/one.png" />
          </div>
        </div>
        <h3 class="">تقرير الإجمالي ( الأربعاء )</h3>
        <div class="row info-sales">
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/5.png" />
              <span>المبيعات</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/1.png" />
              <span>المبيعات(شبكة)</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/2.png" />
              <span>المبيعات (الكاش)</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/3.png" />
              <span>عدد فواتير المبيعات</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/4.png" />
              <span>المشتريات</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/9.png" />
              <span>المشتريات النثرية</span>
              <h6>345</h6>
            </div>
          </div>

          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/6.png" />
              <span>المصاريف العمومية</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/4.png" />
              <span>العمولات</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/7.png" />
              <span>المدفوع من العمولات</span>
              <h6>345</h6>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <img src="../../assets/dashBourd/8.png" />
              <span>المتبقي من العمولات</span>
              <h6>345</h6>
            </div>
          </div>
        </div>
        <h3 class="">مبيعات حسب الموظف ( الأربعاء )</h3>
        <div class="row info-employ">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-xl-3 col-lg-12 text-center person">
                  <img src="../../assets/dashBourd/person.png" />
                  <span>السيد صابر</span>
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
                <div class="col-xl-3 col-lg-12 text-center person">
                  <img src="../../assets/dashBourd/person.png" />
                  <span>أشرف عبدالعزيز</span>
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
                <div class="col-xl-3 col-lg-12 text-center person">
                  <img src="../../assets/dashBourd/person.png" />
                  <span>عبدالله علي </span>
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
// import Chart from "chart.js/auto";
import StatisticsDay from "@/components/StatisticsDay.vue";
import StatisticsMonth from "@/components/StatisticsMonth.vue";
import StatisticsTotal from "@/components/StatisticsTotal.vue";

export default {
  name: "ControlBoard",
  components: {
    StatisticsDay,
    StatisticsMonth,
    StatisticsTotal,
  },
  methods: {
    makeActive: function (component, event) {
      this.component = component;
      event.target.classList.add("blue");
      if (event.target.nextElementSibling != null)
        event.target.nextElementSibling.classList.remove("blue");
      if (event.target.previousElementSibling != null)
        event.target.previousElementSibling.classList.remove("blue");
    },
  },
  data() {
    return {
      component: "StatisticsDay",
    };
  },
};
</script>
<style scoped>
.blue {
  background: #3f51b5;
  color: #fff !important;
}
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
h3 {
  color: #1a2669;
  font-weight: 500;
  margin: 5vh 0;
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
.info-statistics div h6,
.info-statistics div span {
  color: #757de8;
  font-weight: 600;
  margin-bottom: 3vh;
  display: block;
}
.coiner .chosse-serv {
  border: 3px solid #757de8;
  border-radius: 20px;
  color: #f4f6f6;
  font-weight: 600;
  width: 50%;
  margin: auto;
  padding: 2px 0;
}
.coiner .chosse-serv button {
  width: 33%;
  color: #999999;
  border-radius: 20px;
}
.coiner .chosse-serv button:hover,
.coiner .chosse-serv button.active {
  background: #3f51b5;
  color: #fff;
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
.info-work div {
  margin-bottom: 1vh;
}
.info-work svg {
  color: #1a2669;
  padding-left: 3vh;
}
.info-work h6 {
  font-weight: 600;
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

.info-sales img {
  width: 5vmin;
  background: #757de8;
  padding: 1vh;
  color: #fff;
  position: absolute;
  top: -20px;
  left: 43%;
  border-radius: 8px;
}
.info-sales h6 {
  font-weight: 600;
  color: #3f51b5;
}
.info-sales span {
  margin-top: 3vh;
  font-weight: 500;
  color: #1a2669;
}
.info-employ {
  justify-content: center;
}
.info-employ .person {
  padding: 4vh 2vh;
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
.info-employ img ~ span {
  width: 100%;
  display: block;
  font-size: 2vmin;
  font-weight: 600;
  margin-top: 2vh;
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
  .coiner .chosse-serv {
    width: 100%;
  }
}
@media (max-width: 765px) {
  .container {
    width: 100%;
    float: none;
  }
  .info-works img {
    display: none;
  }
  .info-sales img {
    width: 20%;
  }
  @media (max-width: 580px) {
    .info-sales img {
      display: none;
    }
  }
}
</style>
