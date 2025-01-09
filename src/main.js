import { createApp } from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax3';
import 'vuesax3/dist/vuesax.css'; // Vuesax styles
import 'material-icons/iconfont/material-icons.css'; // Material Icons
import router from './router';


const app = createApp(App);
app.use(router)
app.use(Vuesax, {
    theme: {
        colors: {
            primary: '#5b3cc4',
            success: '#17c964',
            danger: '#f2135d',
            warning: '#ffaa00',
            dark: '#242145',
        },
    },
});

app.mount('#app');
