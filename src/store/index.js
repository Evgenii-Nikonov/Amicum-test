import Vue from "vue";
import Vuex from "vuex";
import workers from "./modules/workers";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {},
  state: {
    person: {
      currentDate: "",
      isActive: false,
      name: "Иванов Иван Сергеевич",
      birthDate: "13.08.1980",
      number: "ГОКИ 0000",
      profession: "Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда",
      breefing: true,
      examination: false,
      notifications: 2,
      tests: {
        maxtests: 300,
        performedTests: 150,

      },
      atestationDays: 29,
    },
  },
  getters: {},

  modules: {
    workers,
  },
});
