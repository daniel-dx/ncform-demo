<template>
  <div id="app">
    <a target="_blank" href="https://github.com/ncform/ncform"
      ><img alt="Vue logo" src="./assets/logo.png"
    /></a>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#app > a {
  text-align: center;
  display: block;
}
</style>
