import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import ConnectionsManagement from "../views/ConnectionsManagement";
import ShareConnections from "../views/ShareConnections";
import InformationForm from "../views/InformationForm";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/connections-management',
    name: 'ConnectionsManagement',
    component: ConnectionsManagement
}, {
    path: '/share-connections',
    name: 'ShareConnections',
    component: ShareConnections
}, {
    path: '/Information-form',
    name: 'InformationForm',
    component: InformationForm
}]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router