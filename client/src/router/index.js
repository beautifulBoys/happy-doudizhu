import Vue from 'vue';
import Router from 'vue-router';
import room from '@/views/room.vue';
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
      path: '/room',
      name: 'room',
      component: room
    }
  ]
});
