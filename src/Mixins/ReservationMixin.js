export default {
  beforeRouteEnter(to, next) {
    next((vm) => {
      vm.$store.commit("setIsOnReservationPage", to.meta.isOnReservationPage);
    });
  },
  beforeRouteUpdate(to) {
    this.$store.commit("setIsOnReservationPage", to.meta.isOnReservationPage);
    // next();
  },
};
