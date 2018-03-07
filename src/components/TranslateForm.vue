<template>
  <div id="translateForm">
    <form v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="输入翻译内容">
      <select >
        <option value="en">English</option>
      </select>
      <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data() {
    return {
      textToTranslate: ""
    }
  },
  methods: {
    formSubmit(e) {
      // alert(this.textToTranslate);
      // e.preventDefault();
      this.$emit("sbmit",this.textToTranslate);
    }
  }
}
</script>

<style>

</style>
