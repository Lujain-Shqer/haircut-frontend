<template>
  <div v-if="services.length > 0" class="row">
    <div
      v-for="service in services"
      class="card"
      :key="service.id"
      v-on:click="toggleClass(service)"
      :class="{ red: isServiceSelected(service) }"
    >
      <img :src="require(`@/assets/salePoints/Serv/${service.image}`)" />
      <h6>{{ service.name }}</h6>
      <span>{{ service.price }} SAR</span>
    </div>
  </div>
  <div v-else class="row info">لا يوجد خدمات لعرضها</div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    fetch(
      "https://www.setrex.net/haircut/backend/public/api/service/" + localStorage.getItem("branch_id"),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.services = data.map((service) => ({
          ...service,
        }));
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    toggleClass(service) {
      const isSelected = this.isServiceSelected(service);
      if (isSelected) {
        this.$store.commit("removeService", service);
      } else {
        this.$store.commit("addService", service);
      }
    },
    isServiceSelected(service) {
      return this.selectedServices.some(
        (selectedService) => selectedService.id === service.id
      );
    },
  },
  computed: {
    selectedServices() {
      return this.$store.state.selectedServices;
    },
  },
};
</script>
<style scoped>
.row {
  justify-content: space-around;
}
.info {
  color: #1a2669;
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
  background: #ebedf7;
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
@media (max-width: 580px) {
  .card {
    width: 40%;
  }
}
</style>
