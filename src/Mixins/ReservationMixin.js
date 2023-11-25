export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit("setIsOnReservationPage", to.meta.isOnReservationPage);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit("setIsOnReservationPage", to.meta.isOnReservationPage);
    next();
  },
};
