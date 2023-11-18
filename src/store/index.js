import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    selectedServices: [],
    reserveEmployee: "غير محدد",
    reserveDate: "غير محدد",
    reserveClient: "غير محدد",
    reserveHour: "غير محدد",
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
    addEmployee(state, employee) {
      state.reserveEmployee = employee;
    },
    addDate(state, Date) {
      state.reserveDate = Date;
    },
    addClient(state, client) {
      state.reserveClient = client;
    },
    addHour(state, Hour) {
      state.reserveHour = Hour;
    },
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()],
});
