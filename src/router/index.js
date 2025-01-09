import { createRouter, createWebHistory } from 'vue-router';

import ModuleDetails from '../components/ModuleDetails.vue';
import Quiz from '../components/Quiz.vue';
import About from '../components/About.vue'
import contact from '../components/Contact.vue'
import ImportantTopics from '../components/ImportantTopics.vue'
import Login from '../components/login.vue';
import Dashboard from '../admin/Dashboard.vue';
import DashboardHome from '../components/Dashboard.vue';

const routes = [
    { path: '/', component: DashboardHome },
    { path: '/module/:id', component: ModuleDetails },
    { path: '/quiz/:id', component: Quiz },
    { path: '/contact', component: contact },
    { path: '/important', component: ImportantTopics },

    { path: '/about', component: About },

    { path: '/login', component: Login },
    { path: '/Updates', component: Dashboard }
]; 

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
