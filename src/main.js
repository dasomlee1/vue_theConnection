import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from '@/App.vue'
import Vuetify from "vuetify";
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/scss/app.scss'
import router from '@/router'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: colors.lightBlue.lighten1,
                },
                dark: {
                    primary: colors.lightBlue.lighten1,
                },
            },
        },
        icons: {
            iconfont: 'fa',
        },
    }),
    router,
    render: h => h(App),
}).$mount('#app')
