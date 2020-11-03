import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import ConnectionsManagement from "@/views/ConnectionsManagement";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/connections-management',
    name: 'ConnectionsManagement',
    component: ConnectionsManagement
}]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router