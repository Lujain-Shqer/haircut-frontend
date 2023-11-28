export default {
  beforeRouteEnter(to, next) {
    next((vm) => {
      vm.$store.commit("setIsOnOrderPage", to.meta.isOnOrderPage);
    });
  },
  beforeRouteUpdate(to) {
    this.$store.commit("setIsOnOrderPage", to.meta.isOnOrderPage);
    // next();
  },
};
