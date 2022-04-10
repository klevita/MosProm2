<script src="../router/index.js"></script>
<template>
  <v-img
    class="scumImg"
    width="80%"
    height="80%"
    :src="require('../assets/imgs/desktop.png')"
  ></v-img>
</template>

<script>
export default {
  name: 'scum'
}
</script>

<style scoped>
  .scumImg{
    position: absolute;
    left:180px;
    top:100px
  }
</style>
