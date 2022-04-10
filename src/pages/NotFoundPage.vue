
<!--NotFound.png-->
<script>
export default {
  name: 'NotFoundPage',
  data: () => ({
    text_style: {
      width: '400px',
      height: '100px'
    },
    margin_left: '0px'
  }),
  mounted () {
  },
  methods: {
    reDirect () {
      this.$router.push('Home')
    }
  }
}
</script>

<style scoped>
.butt {
  border-radius: 10px;
  margin-top: 24px;
  display: block;
}

.base-contain {

}
</style>
<template>
  <div class="base-contain">
    <div style="display: inline-block;width:49.8%">
      <v-img style="display: block;margin-left: auto;margin-right: auto;"
             width="559px"
             height="447px"
             :src="require('../assets/imgs/NotFound.png')"></v-img>
    </div>
    <div style="display: inline-block;width:49.9%">
      <div style="float:left;margin-bottom: 140px">
        <h1 style="color:white;font-size:48px;">Страница не найдена</h1>
        <v-btn height="40px" width="220px" color="#FFAA00" class="butt" v-on:click="reDirect()">
          <span style="font-size: 24px"> На главную</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>
