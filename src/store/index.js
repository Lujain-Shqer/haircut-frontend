import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    selectedServices: [],
    reserveEmployee: "غير محدد",
    reserveDate: "غير محدد",
  },
  getters: {},
  mutations: {
    addService(state, service) {
      state.selectedServices.push(service);
    },
    removeService(state, service) {
      const index = state.selectedServices.findIndex(
        (selectedService) => selectedService.id === service.id
      );
      if (index !== -1) {
        state.selectedServices.splice(index, 1);
      }
    },
    addEmployee(state, emplyeeName) {
      state.reserveEmployee = emplyeeName;
    },
    addDate(state, Date) {
      state.reserveDate = Date;
    },
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()],
});
