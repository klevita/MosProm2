<template>
  <div
    v-on:dragenter="dragOnHandler"
    v-on:dragleave="dragLeaveHandler"
    v-bind:style="act"
    class="dropzone"
  >
    <v-file-input
      show-size
      counter
      multiple
      label="File input"
      style="margin-top: 180px;"
      v-bind:value="val"
      v-on:change="selectFile"
    ></v-file-input>
  </div>
</template>

<script>

export default {
  name: 'DropZone',
  data: () => ({
    act: {border: '3px dashed rgba(130, 130, 130, 0.3)'},
    val: null
  }),
  methods: {
    selectFile (file) {
      this.val = file
      this.$emit('fileImp', file)
    },
    dragOnHandler () {
      this.act = {border: '6px dashed rgba(136, 136, 136, 0.3)'}
    },
    dragLeaveHandler () {
      this.act = {border: '3px dashed rgba(130, 130, 130, 0.3)'}
    }
  }
}
</script>

<style scoped>
.dropzone {
  padding-right: 24px;
  width: 609px;
  height: 268px;
  background: #3A3A3A url('../assets/imgs/vector.png') no-repeat center;
  border: 3px dashed rgba(130, 130, 130, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
}

label {
  padding: 8px 12px;
  color: #fff;
  background-color: #41b883;
  transition: 0.3s ease all;
}

input {
  display: none;
}


label {
  background-color: #fff;
  color: #41b883;
}

</style>
