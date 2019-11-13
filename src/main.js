import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAsnZok9w0uZIBqpl8Q9-_o3nRBvb4eatM",
  authDomain: "vue-calendar-22ba9.firebaseapp.com",
  databaseURL: "https://vue-calendar-22ba9.firebaseio.com",
  projectId: "vue-calendar-22ba9",
  storageBucket: "vue-calendar-22ba9.appspot.com",
  messagingSenderId: "184442673249",
  appId: "1:184442673249:web:27e65d57c8ca51196e7220"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
