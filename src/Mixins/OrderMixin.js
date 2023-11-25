export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit("setIsOnOrderPage", to.meta.isOnOrderPage);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit("setIsOnOrderPage", to.meta.isOnOrderPage);
    next();
  },
};
