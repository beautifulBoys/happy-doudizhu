<template>
  <div class="clock-box">
    <div class="clock" v-if="seconds">{{seconds}}</div>
  </div>
</template>
<script>
  export default {
    props: ['second'],
    data () {
      return {
        seconds: 0
      };
    },
    watch: {
      second (n, o) {
        this.seconds = this.second + 0;
        if (!n) clearInterval(this.timer);
      }
    },
    mounted () {
      this.seconds = this.second + 0;
      this.timer = setInterval(() => {
        if (this.seconds) this.seconds--;
        else {
          clearInterval(this.timer);
          this.$emit('timeOut');
        }
      }, 1000);
    }
  };
</script>
<style lang="less" scoped>
  .clock-box {
    width: 0.8rem;
    height: 0.8rem;
    .clock {
      width: 100%;
      height: 100%;
      background: url(../../images/clock.png) no-repeat center center;
      background-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      font-size: 0.36rem;
      text-shadow: 0.02rem 0.02rem 0.08rem rgba(0, 0, 0, 0.4);
    }
  }
</style>
