<template>
  <div class="ahorcado">
    <h1>AHORCADO</h1>
    <Letra></Letra>
  </div>
</template>

<script>
import axios from "axios";
import bus from "../bus";
import Letra from "./Letra";

export default {
  name: "Ahorcado",
  components: {
    Letra
  },
  props: {},
  data() {
    return {
      palabra: ""
    };
  },
  mounted() {
    axios
      .get("https://www.aleatorios.com/random-words?dictionary=1&words=1")
      .then(res => {
        this.palabra = res.data.records[0].toUpperCase();
        console.log(this.palabra);
        bus.$emit("create:palabra", this.palabra);
      });
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
