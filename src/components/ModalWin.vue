<template>
<span>
  <div
    style="position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.3);z-index: 2"
    v-show="show">
      <div class="mod">
      <Drop1 v-on:fileImp="fileI($event)"/>
        <div style="display: inline-block">
          <v-btn color="#2152FF" style="margin-top: 40px;margin-right:270px;z-index: 2" v-on:click="test">
            <span style="font-size: 24px">Загрузить</span>
          </v-btn>
          <v-btn color="#2152FF" style="margin-top: 40px;z-index: 2" v-on:click="disabled">
            <span style="font-size: 24px">Закрыть</span>
          </v-btn>
        </div>
      </div>
  </div>

</span>

</template>

<script>
import Drop1 from '@/components/Drop1'

export default {
  name: 'ModalWin',
  components: {
    Drop1
  },
  data: () => ({
    show2: true,
    file: null
  }),
  props: {
    show: {type: Boolean, default: true}
  },
  methods: {
    fileI (file) {
      console.log(file)
      this.file = file
    },
    disabled () {
      this.show = false
      this.$emit('disabled')
    },
    test () {
      if (this.file) {
        this.$router.push('/demo')
      }
    }
  },
  watch: {},
  computed: {
    is_showed () {
      return this.show
    }
  }
}
</script>
<style src='vue-dialog-drag/dist/vue-dialog-drag.css'></style>
<style>
.mod {
  opacity: 1;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background: #3F3F3F;
  padding: 20px;
  width: 649px;
}
</style>
