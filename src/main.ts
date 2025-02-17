import { createSSRApp } from "vue";
import App from "./App.vue";

import '@/assets/css/variables.css'
import uviewPlus from 'uview-plus'


export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  return {
    app,
  };
}
