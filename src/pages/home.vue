<script>
import ModalWin from '../components/ModalWin'
import headr from '../components/head'
export default {
  name: 'Home',
  components: {
    ModalWin: ModalWin, headr
  },
  data: () => ({
    showModal: false
  }),
  methods: {
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
      <headr></headr>
        <div id="1">
          <v-img
            style="display: block;margin-left: auto;margin-right: auto;"
            width="230px"
            height="206px"
            :src="require('../assets/imgs/camera.png')"
          ></v-img>
          <v-btn color="#2152FF" style="margin-top: 40px" v-on:click="showModal = !showModal">
            <span style="font-size: 24px"> Импортировать видео</span>
          </v-btn>
        </div>
    <ModalWin v-bind:show="showModal" v-on:disabled="showModal = !showModal"/>
  </div>
</template>
