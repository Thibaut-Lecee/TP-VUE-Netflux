import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify/lib/framework';
import "material-design-icons-iconfont/dist/material-design-icons.css"
import datas from "../ApiRequest/datas"
import Carousel3d from "vue-carousel-3d"


Vue.use(Vuetify);
Vue.use(Carousel3d)
Vue.prototype.$request = datas
export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});
