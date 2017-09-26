<template>
  <div class="desk">
    <div class="body">
      <div class="top-box">
        <div class="top" v-show="deskStatus[0] !== 'start' && deskStatus[0] !== 'search'">
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
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import firstCode from '../components/desk/first.vue';
  import secondCode from '../components/desk/second.vue';
  import mineCode from '../components/desk/mine.vue';
  import bottomCode from '../components/desk/bottom.vue';
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
    methods: {
      sortEvent () {
        this.$store.commit('sort');
      }
    }
  };
</script>
<style lang="less" scoped>
  .desk {
    width: 100%;
    height: 100%;
    background: #333; // #eee url(../images/desk_bg.jpg) no-repeat center center
    background-size: 113%;
    display: flex;
    flex-flow: column;
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
</style>
