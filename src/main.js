import Vue from "vue";
import App from "./App";
import vueNcform from "@ncform/ncform";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ncformStdComps from "@ncform/ncform-theme-elementui";
import axios from "axios";
import myCustomComp from "@/components/myCustomComp"; // 自定义的控件

Vue.use(Element);
Vue.use(vueNcform, {
  extComponents: Object.assign(ncformStdComps, { myCustomComp })
});
window.$http = Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
