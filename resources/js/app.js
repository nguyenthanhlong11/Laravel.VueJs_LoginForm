import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './components/App.vue';
import EditProfile from './components/EditProfile.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/register.vue';



const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/home',
            name:'home',
            component: Home
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/register',
            name:'register',
            component: Register
        },
        {
            path:'/edit',
            name:'edit',
            component: EditProfile
        },
    ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
