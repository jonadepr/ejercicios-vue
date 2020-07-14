<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Memoria msg="Juego de memoria"/>
  </div>
</template>

<script>
import Memoria from './components/Memoria.vue'

export default {
  name: 'App',
  components: {
    Memoria
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
