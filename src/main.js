import Vue from "vue";
import App from "./App";
import vueNcform from "@ncform/ncform";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ncformStdComps from "@ncform/ncform-theme-elementui";
import axios from "axios";

import MyCustomComp from "@/components/MyCustomComp"; // Your custom form widget
import MyCustomRule from "@/rules/MyCustomRule"; // Your custom rule

Vue.use(Element);
Vue.use(vueNcform, {
  extComponents: Object.assign(ncformStdComps, { MyCustomComp }),
  extRules: [{ myCustom: MyCustomRule }],
  lang: "" // you can try 'en' or 'zh-cn'
});
window.$http = Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
