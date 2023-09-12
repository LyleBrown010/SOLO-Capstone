import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from 'vue3-cookies'

const app = createApp(App); 

app.use(store);
app.use(router);
app.use(cookies);
app.mount("#app")



// createApp(App).use(store).use(router).mount('#app')
