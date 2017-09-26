<template>
  <div class="screen">
    <li-header></li-header>
    <div class="body" style="height: calc(100% - 80px)">
      <div class="div" @click="clickEvent()"></div>
    </div>
    <screen-footer></screen-footer>
  </div>
</template>

<script>
  import header from '../components/header.vue';
  import footer from '../components/screen/footer.vue';
  export default {
    components: {
      'li-header': header,
      'screen-footer': footer
    },
    methods: {
      clickEvent () {
        this.$router.push({path: '/desk'});
      }
    }
  };
</script>

<style lang="less" scoped>
  .screen {
    width: 100%;
    height: 100%;
    background: red;
    .body {
      width: 100%;
      background: yellow;
      padding: 20px;
      box-sizing: border-box;
      .div {
        width: 200px;
        height: 120px;
        background: red;
      }
    }
  }
</style>
