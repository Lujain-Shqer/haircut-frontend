<template>
  <div class="row">
    <div class="card">
      <img src="../assets/u.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/u.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/u.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/u.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/u.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
    <div class="card">
      <img src="../assets/u.png" />
      <h6>صبغة ذقن اسود</h6>
      <span>30.00 SAR</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServicesPage",
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
  margin-bottom: 2vh;
}
.card h6 {
  color: #1a2669;
  font-size: 12px;
}
.card span {
  color: #3f51b5;
}

@media (max-width: 991px) {
  .products .card {
    width: 16%;
  }
}
@media (max-width: 768px) {
  .products .card {
    width: 32%;
  }
}
</style>
