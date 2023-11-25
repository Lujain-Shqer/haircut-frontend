import { createStore } from "vuex";
const initialState = {
  selectedServices: [],
  reserveEmployee: { name: "غير محدد" },
  reserveDate: "غير محدد",
  reserveClient: { name: "غير محدد" },
  reserveHour: "غير محدد",
  isOnReservationPage: false,
  isOnOrderPage: false,
};
// import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: { ...initialState },
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
    clearReservationData(state) {
      state.selectedServices = [];
      state.reserveEmployee = { name: "غير محدد" };
      state.reserveDate = "غير محدد";
      state.reserveClient = { name: "غير محدد" };
      state.reserveHour = "غير محدد";
    },
    setIsOnReservationPage(state, value) {
      state.isOnReservationPage = value;
    },
    clearOrderData(state) {
      state.selectedServices = [];
    },
    setIsOnOrderPage(state, value) {
      state.isOnOrderPage = value;
    },
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()],
});
