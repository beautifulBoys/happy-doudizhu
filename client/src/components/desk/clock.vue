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
    width: 40px;
    height: 40px;
    .clock {
      width: 100%;
      height: 100%;
      background: url(../../images/clock.png) no-repeat center center;
      background-size: 40px;
      line-height: 40px;
      font-weight: 700;
      color: #fff;
      text-align: center;
      font-size: 18px;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    }
  }
</style>
