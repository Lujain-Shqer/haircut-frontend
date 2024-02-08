<template>
  <div v-if="statistics" class="row info-statistics">
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>
        الإيرادات اليومي
        <span class="state"> 8.3% <fa icon="arrow-up" /></span>
      </h6>
      <h5>{{ statistics.avg_daily_revenues }}</h5>
      <img src="../assets/sign.png" />
      <span>34.28 ريال متوسط الطلب</span>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>
        إيرادات اسبوع
        <span class="state"> 8.3% <fa icon="arrow-up" /></span>
      </h6>
      <h5>{{ statistics.avg_weekly_revenues.toFixed(2) }}</h5>
      <img src="../assets/sign.png" />
      <span>{{ statistics.avg_weekly_orders.toFixed(2) }} زبون</span>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>
        جلسات اليوم
        <span class="state"> 8.3% <fa icon="arrow-up" /></span>
      </h6>

      <h5>{{ statistics.avg_daily_orders }}</h5>

      <span>زبون</span>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-12">
      <h6>موظف يوم (الأربعاء)</h6>
      <h5>السيد/ة {{ bestEmployee.name }}</h5>
      <span
        >بقيمة مبيعات :{{ bestEmployee.revenues }}
        SAR
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsDay",
  props: ["statistics", "employee_revenues"],
  computed: {
    bestEmployee() {
      var bestIndex = this.employee_revenues.top_employee_index;
      var info = {};
      info.name = this.employee_revenues.employees[bestIndex].name;
      info.revenues =
        this.employee_revenues.employees[bestIndex].total_revenues;
      return info;
    },
  },
  // data() {
  //   return {
  //     allStatisticsLoaded: false,
  //   };
  // },
  // watch: {
  //   allStatistics: {
  //     handler() {
  //       this.allStatisticsLoaded = true;
  //       console.log(this.allStatistics.statistics);
  //       console.log(this.allStatistics.employee_revenues);
  //       console.log(this.allStatistics.global_report);
  //     },
  //     immediate: true,
  //   },
  // },
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
