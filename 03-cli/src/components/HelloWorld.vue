<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msg2}}</h1>

    <button @click="cambiaDatos">Cambiar desde Hijo</button>
    <h1>{{obj.texto}}</h1>
    <h1>{{contador}}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    msg2: {
      type: String,
      default: "Mensaje por defecto"
    },
    contador: {
      type: Number,
      default: 0
    },
    obj:{
        texto: String
      }
  },
  data() {
    return {};
  },
  methods: {
    cambiaDatos() {
      this.contador++;
      this.obj.texto = "perico";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
