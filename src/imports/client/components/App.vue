<template>
  <div id="app">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Meteor + Vue',
    }
  },
}
</script>

<style lang="less">
@color: #40b883;

#app {
  font-family: sans-serif;
  color: @color;
}
</style>
