<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{pruebas}}</h1>
    <button @click="incrementaContador">Hola</button>
    <h1>{{contador}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" msg2="hola mundo"
    v-bind:contador="contador" :obj="pruebaObj"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      pruebas: "PRUEBAS DATA NUMBER ONE",
      contador: 0,
      pruebaObj:{
        texto: "hola miundo"
      }
      
      }
  },
  methods: {
    incrementaContador(){
      this.contador++;
    }

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
