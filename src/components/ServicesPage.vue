<template>
  <div class="row">
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/1.png" />
      <h6>حلاقة اطفال</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/2.png" />
      <h6>صبغه حنه ذقن</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/3.png" />
      <h6>تحديد ذقن</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/4.png" />
      <h6>حلاقة ذقن</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/5.png" />
      <h6>سنفره</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/6.png" />
      <h6>ماسك فحم</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/6.png" />
      <h6>ماسك نعنع</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/7.png" />
      <h6>ماسك طين</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/8.png" />
      <h6>كيرلي عادي</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/10.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/11.png" />
      <h6>كيرلي دائم طويل</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/12.png" />
      <h6>كيرلي دائم وسط</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/13.png" />
      <h6>4الباقة الفضية</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/14.png" />
      <h6>شمع</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/15.png" />
      <h6>فتله</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/16.png" />
      <h6>تنظيف بشره</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/17.png" />
      <h6>استشوار</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/18.png" />
      <h6>صبغة خصل</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/19.png" />
      <h6>صبغات اخرى</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/20.png" />
      <h6>حلاقة شعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/21.png" />
      <h6>شعر &ذقن</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/22.png" />
      <h6>غسيل شعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/23.png" />

      <h6>بروتين كبير</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/24.png" />
      <h6>لصقة أنف</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/25.png" />
      <h6>7الباقة الذهبية</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/26.png" />
      <h6>بخاخ الوان</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/27.png" />
      <h6>ملء فراغات الشعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/28.png" />
      <h6>صنفرة بخار</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/29.png" />
      <h6>جهاز حمام زيت</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/30.png" />
      <h6>مكواه سراميك</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/31.png" />
      <h6>فرد شعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/32.png" />
      <h6>حمام زيت لشعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/33.png" />
      <h6>تحديد شعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/34.png" />
      <h6>شعر مكينة</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/35.png" />
      <h6>صبغة شعر اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" v-on:click="addClass" :class="{ myClass: isAddClass }">
      <img src="../assets/salePoints/Serv/36.png" />
      <h6>صبغته حنه شعر</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card" @click="addClass" id="a">
      <img src="../assets/salePoints/Serv/37.png" />
      <h6>صبغة شعر شامبو</h6>
      <span>30.00 SAR</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      isAddClass: false,
    };
  },
  methods: {
    addClass: function (event) {
      event.target.className = "red";
      console.log(event.target);
    },
  },
};
</script>
<style scoped>
.row {
  justify-content: space-around;
}
.card {
  border: 1px solid #1a2669;
  width: 10%;
  margin: 0 2px;
  transition: all 0.5s;
  margin-bottom: 2vh;
}
.card:hover {
  border: 1px solid #1a2669;
  background: #ebedf7;
  cursor: pointer;
}
.red {
  background: #bb10ff;
}
.card h6 {
  color: #1a2669;
  font-size: 12px;
}
.card span {
  color: #3f51b5;
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
</style>
