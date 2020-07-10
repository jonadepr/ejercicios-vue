<template>
  <div class="letra">
    <div class="container">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Letra</span>
        <input
          id="miInput"
          v-model="letra"
          type="text"
          class="form-control"
          placeholder="Introducir letra"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-on:keyup.enter="addLetra"
        />
        <button class="btn btn-primary" type="button" v-on:click="addLetra">Añadir</button>
      </div>
      <hr />
      Letras escritas: 
      <span v-for="(m, index) in letrasEscritas" v-bind:key="`m${index}`">{{m}}</span>
      <hr />
      Resultado: 
      <span v-for="(m, index) in mostrar" v-bind:key="`m${index}`">{{m}}</span>
      <hr />
      <div v-if="gameOver">GAME OVER</div>
      <div v-else>Intentos: {{intentos}}</div>
      <button class="btn btn-primary" type="button" v-on:click="reiniciar">reiniciar</button>
    </div>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  name: "Ahorcado",
  props: {},
  data() {
    return {
      palabra: "",
      letra: "",
      letrasEscritas: [],
      mostrar: [],
      intentos: 5,
      gameOver: false,
      aux: 0
    };
  },
  created() {
    bus.$on("create:palabra", this.updatePalabra);
  },
  methods: {
    reiniciar() {
      this.$forceUpdate();
    },

    updatePalabra(newValue) {
      this.palabra = newValue;
    },

    addLetra() {
      if (this.letra.length > 1 || this.letra.length === 0) {
        document.getElementById("miInput").placeholder =
          "Debe ser una sola letra";
        this.intentos--;
        this.letra = "";
      } else {
        if (this.letrasEscritas.find(e => e === this.letra.toUpperCase())) {
          document.getElementById("miInput").placeholder =
            "La letra ya está escrita";
          this.intentos--;
        } else {
          this.letrasEscritas.push(this.letra.toUpperCase());
          document.getElementById("miInput").placeholder = "Introducir letra";
          // si letra no esta en la palabra restaré intentos "Introducir letra"
          if (
            this.palabra.toLowerCase().includes(this.letra.toLowerCase()) ===
            false
          ) {
            this.intentos--;
          }
        }
        this.letra = "";
      }
      this.aMostrar();
      if (this.intentos === 0) this.gameOver = true;
    },

    aMostrar() {
      this.aux = 0;
      for (var i = 0; i < this.palabra.length; i++) {
        if (this.letrasEscritas.find(e => e === this.palabra.charAt(i))) {
          this.mostrar[i] = this.palabra.charAt(i);
          this.aux++;
        } else {
          this.mostrar[i] = "_";
        }
      }

      if (this.palabra.length === this.aux) this.gameOver = true;
      console.log(this.mostrar);
    }
  }
};
</script>

<style scoped>
</style>