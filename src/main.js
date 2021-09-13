import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import register from "./service-worker/register-service-worker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

Vue.mixin({
  methods: {
    getColor(val) {
      if (val <= 10) {
        return "#aff543";
      } else if (val > 10 && val <= 20) {
        return "#dff445";
      } else if (val > 20 && val <= 30) {
        return "#f8ce3c";
      } else if (val > 30 && val <= 40) {
        return "#fab035";
      } else if (val > 40 && val <= 50) {
        return "#fb9930";
      } else if (val > 50 && val <= 60) {
        return "#fc862c";
      } else if (val > 60 && val <= 70) {
        return "#fe6326";
      } else if (val > 70 && val <= 80) {
        return "#ff4322";
      } else if (val > 80 && val <= 90) {
        return "#ff333b";
      } else if (val > 90) {
        return "#c50008";
      }
    },
    getFormColor(val) {
      if (val <= 10) {
        return "#c50008";
      } else if (val > 10 && val <= 20) {
        return "#ff333b";
      } else if (val > 20 && val <= 30) {
        return "#ff4322";
      } else if (val > 30 && val <= 40) {
        return "#fe6326";
      } else if (val > 40 && val <= 50) {
        return "#fb9930";
      } else if (val > 50 && val <= 60) {
        return "#fc862c";
      } else if (val > 60 && val <= 70) {
        return "#fab035";
      } else if (val > 70 && val <= 80) {
        return "#f8ce3c";
      } else if (val > 80 && val <= 90) {
        return "#dff445";
      } else if (val > 90) {
        return "#aff543";
      }
    },
    getClass(arr, val) {
      if (val <= arr[0]) {
        return "1";
      } else if (val > arr[0] && val <= arr[1]) {
        return "2";
      } else if (val > arr[1]) {
        return "3";
      }
    },
  },
});

register();

if (
  process.env.NODE_ENV === "development" ||
  process.env.VUE_APP_PWA_LOCAL_SERVE === "true"
) {
  console.log(`PWA Local Serve: ${process.env.VUE_APP_PWA_LOCAL_SERVE}`); // eslint-disable-line no-console
  console.log(`Node Env: ${process.env.NODE_ENV}`); // eslint-disable-line no-console
}
