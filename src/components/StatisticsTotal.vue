<template>
  <div class="charts">
    <div class="row">
      <div class="col-xl-4 col-lg-6 col-xs-12">
        <div class="chart-div">
          <div class="chart">
            <canvas id="myChart" width="400" height="400"></canvas>
          </div>
          <div class="chart-number row">
            <div class="col-8">
              <fa icon="fa-wallet" /> المشتريات والمصروفات
            </div>
            <span class="col-4 span-chart">
              3,422 <img src="../assets/sign.png"
            /></span>
            <div class="col-8"><fa icon="fa-hand" /> المبيعات</div>
            <span class="col-4 span-chart">
              3,422 <img src="../assets/sign.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-xs-12">
        <div class="chart-div">
          <h6>الخدمات الأكثر مبيعا (لشهر 9 )</h6>
          <label>اسم الخدمة </label>
          <select class="form-selec" aria-label="Default select example">
            <option selected>اختر اسم الخدمة لعرضها</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="row">
            <div class="col-8">
              <span>3,422 <img src="../assets/sign.png" /></span>
              <span>من تقديم 25 مرة للخدمة</span>
            </div>
            <div class="col-4">
              <span class="state"> 8.3% <fa icon="arrow-up" /></span>
            </div>
          </div>
          <div class="chart">
            <canvas id="myChartt" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-xs-12">
        <div class="chart-div">
          <h6>الخدمات الأكثر مبيعا (الأسبوعي)</h6>
          <label>اسم الخدمة </label>
          <select class="form-selec" aria-label="Default select example">
            <option selected>اختر اسم الخدمة لعرضها</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="row">
            <div class="col-8">
              <span>3,422 <img src="../assets/sign.png" /></span>
              <span>من تقديم 25 مرة للخدمة</span>
            </div>
            <div class="col-4">
              <span class="state"> 8.3% <fa icon="arrow-up" /></span>
            </div>
          </div>
          <div class="chart">
            <canvas id="myCharttt" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "StatisticsTotal",
  mounted() {
    console.log("hi");
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
            ],
            borderColor: [
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
              "#3F51B5",
            ],
            borderWidth: 1,
            borderRadius: 5,
          },
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "#1A2669",
              "#1A2669",
              "#1A2669",
              "#1A2669",
              "#1A2669",
              "#1A2669",
            ],
            borderColor: [
              "#1A2669",
              "#1A2669",
              "#1A2669",
              "#1A2669",
              "#1A2669",
              "#1A2669",
            ],
            borderWidth: 1,
            radius: 20,
            borderRadius: 5,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "ملخص المبيعات والمشتريات (الأسبوع الأول)",
            padding: {
              top: 10,
              bottom: 30,
            },
            font: {
              size: 20,
            },
            color: "#05004E",
          },
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            backgroundColor: "#1A2669",
            borderWidth: -1,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#3F51B5",
              font: {
                size: 10,
              },
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
      },
    });

    myChart;
    const data = {
      labels: [
        "الأسبوع الرابع ",
        "الأسبوع الثالث ",
        "الأسبوع الثاني ",
        "الأسبوع الأول",
      ],
      datasets: [
        {
          data: [1000, 6000, 3000],
          borderColor: "#1A2669",
          tension: 0.2,
        },
      ],
    };
    const ctxx = document.getElementById("myChartt");

    const myChartt = new Chart(ctxx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#3F51B5",
              font: {
                size: 15,
              },
            },
          },
          y: {
            max: 6000,
            min: 0,
            ticks: {
              beginAtZero: true,
              stepSize: 3000, // Set the interval for dividing the y-axis
            },
          },
        },
        elements: {
          point: {
            backgroundColor: "#1A2669",
            borderWidth: -1,
          },
        },
      },
    });
    myChartt;

    const dataa = {
      labels: [
        " السبت ",
        " الأحد ",
        " الاثنين ",
        " الثلاثاء ",
        " الأربعاء ",
        " الخميس  ",
        " الجمعة ",
      ],
      datasets: [
        {
          dataa: [1000, 6000, 3000],
          borderColor: "#1A2669",
          tension: 0.2,
        },
      ],
    };
    const ctxxx = document.getElementById("myCharttt");

    const myCharttt = new Chart(ctxxx, {
      type: "line",
      data: dataa,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#3F51B5",
              font: {
                size: 15,
              },
            },
          },
          y: {
            max: 6000,
            min: 0,
            ticks: {
              beginAtZero: true,
              stepSize: 3000, // Set the interval for dividing the y-axis
            },
          },
        },
        elements: {
          point: {
            backgroundColor: "#1A2669",
            borderWidth: -1,
          },
        },
      },
    });
    myCharttt;
  },
};
</script>

<style scoped>
.chart-div {
  margin-top: 5vh;
  color: #1a2669;
  border: 1px solid #f8f9fa;
  padding: 1vh;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 8px 0px #a6a6a633;
  min-height: 75vh;
}
.chart-number {
  margin-top: 2vh;
}
.chart-number:first-of-type svg {
  background: #1a2669;
  color: #fff;
  padding: 5px;
  border-radius: 8px;
}
.charts h6 {
  color: #05004e;
  font-weight: 700;
  margin-top: 1vh;
}
.charts label {
  color: #010b38;
  display: block;
  margin: 1vh 0;
}
.charts .form-selec {
  border: 1px solid #c8c9cc;
  color: #c8c9cc;
  border-radius: 8px;
  padding: 1vh;
  outline: none;
  margin-bottom: 2vh;
  width: 100%;
  font-weight: 200;
}
.charts .form-select::placeholder {
  color: #c8c9cc;
  font-weight: 100;
}
.charts .row span:first-of-type {
  font-weight: 700;
  font-size: 3vmin;
  color: #3f51b5;
}
.charts .row span:last-of-type {
  font-size: 1.5vmin;
}
.charts .row span.state {
  font-size: 3vmin;
  color: #12c457;
}
.chart-number .span-chart {
  color: #3f51b5;
  font-weight: 700;
  font-size: 3vmin !important;
}
@media (max-width: 991px) {
  .charts {
    text-align: -webkit-center;
  }
  .charts .form-selec {
    width: 70%;
  }
}
</style>
