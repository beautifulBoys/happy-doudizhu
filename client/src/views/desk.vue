<template>
  <div class="room">
    <div class="background">
      <img class="img" src="../images/bg.jpg"/>
    </div>
    <div class="desk">
      <div class="body">
        <div class="top-box">
          <div class="top" v-show="start">
            <desk-first></desk-first>
            <desk-second></desk-second>
          </div>
        </div>
        <desk-mine></desk-mine>
      </div>
      <div class="bottom-box">
        <desk-bottom></desk-bottom>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import firstCode from '../components/desk/first.vue';
  import secondCode from '../components/desk/second.vue';
  import mineCode from '../components/desk/mine.vue';
  import bottomCode from '../components/desk/bottom.vue';
  import io from '../lib/socket.io.js';
  export default {
    components: {
      'desk-first': firstCode,
      'desk-second': secondCode,
      'desk-mine': mineCode,
      'desk-bottom': bottomCode
    },
    data () {
      return {};
    },
    computed: {
      ...mapState({
        start: state => state.desk.start,
        deskStatus: state => state.desk.deskStatus
      }),
      ...mapGetters([]),
      ...mapMutations([])
    },
    mounted () {
      console.log(io);
      // this.$store.commit('create');
    },
    methods: {
      sortEvent () {
        this.$store.commit('sort');
      }
    }
  };
</script>
<style lang="less" scoped>
  .room {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    .background {
      width: 100%;
      height: 100%;
      .img {
        width: 100%;
      }
    }
    .desk {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-flow: column;
      background: url(../images/desk_bg.png) no-repeat center 200%;
      background-size: 100%;
      .body {
        flex: 1;
        display: flex;
        flex-flow: column;
        .top-box {
          flex: 1;
          display: flex;
          .top {
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
      }
      .bottom-box {
        height: 40px;
      }
    }
  }
</style>
