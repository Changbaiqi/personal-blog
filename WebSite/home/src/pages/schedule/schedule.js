import {
    createApp
} from 'vue';

import Schedule from './Schedule.vue';
import router from '../../router';
import store from '../../store';


createApp(Schedule).use(store).use(router).mount('#app');