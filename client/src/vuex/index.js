import Vuex from 'vuex';
import Vue from 'vue';
import desk from './desk/desk.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    desk
  }
});
