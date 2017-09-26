import Vue from 'vue';
import Router from 'vue-router';
import desk from '@/views/desk.vue';
import screen from '@/views/screen.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'screen',
      component: screen
    },
    {
      path: '/desk',
      name: 'desk',
      component: desk
    }
  ]
});
