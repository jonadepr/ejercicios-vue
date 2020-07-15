<template>
  <div class="memoria">
    <h1>{{msg}}</h1>
    <div class="grid">
      <div
        class="item"
        v-for="(m, index) in array"
        v-bind:key="`m${index}`"
        @click="checkOut(index)"
      >
        <div v-if="m.mostrar">{{m.letra}}</div>
        <div v-else>X</div>
      </div>
    </div>
    <div v-if="todosTrue()">GAME OVER</div>
  </div>
</template>

<script>
// import bus from "../bus";
export default {
  name: "memoria",
  props: {
    msg: String
  },
  data() {
    return {
      array: [
        { letra: "A", mostrar: false },
        { letra: "A", mostrar: false },
        { letra: "B", mostrar: false },
        { letra: "B", mostrar: false },
        { letra: "C", mostrar: false },
        { letra: "C", mostrar: false },
        { letra: "D", mostrar: false },
        { letra: "D", mostrar: false },
        { letra: "E", mostrar: false },
        { letra: "E", mostrar: false },
        { letra: "F", mostrar: false },
        { letra: "F", mostrar: false },
        { letra: "G", mostrar: false },
        { letra: "G", mostrar: false },
        { letra: "H", mostrar: false },
        { letra: "H", mostrar: false }
      ],
      arrayClick: [],
      click: 0
    };
  },

  methods: {
    mezclarArray() {
      this.shuffle(this.array);
    },

    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    },

    checkOut(i) {
      if (!this.todosTrue()) {
        console.log(i);
        this.click++;
        console.log("click", this.click);
        if (this.click === 3) {
          if (
            this.arrayClick[0].obj.letra !== this.arrayClick[1].obj.letra &&
            this.arrayClick[0].pos !== this.arrayClick[1].pos
          ) {
            this.array[this.arrayClick[0].pos].mostrar = false;
            this.array[this.arrayClick[1].pos].mostrar = false;
            // this.array[i].mostrar = false;
            this.arrayClick = [];
            this.click = 1;
          }
        }

        if (this.click <= 2) {
          this.array[i].mostrar = true;
          this.arrayClick.push({ obj: this.array[i], pos: i });
        }

        console.log("long arrayc", this.arrayClick.length);
        if (this.arrayClick.length === 2) {
          if (
            this.arrayClick[0].obj.letra === this.arrayClick[1].obj.letra &&
            this.arrayClick[0].pos !== this.arrayClick[1].pos
          ) {
            this.array[this.arrayClick[0].pos].mostrar = true;
            this.array[this.arrayClick[1].pos].mostrar = true;
            this.click = 0;
            this.arrayClick = [];
          }
        }
      }
    },

    todosTrue() {
      let aux = false;
      for (var i = 0; i < this.array.length; i++) {
        if (this.array[i].mostrar === false) {
          return false;
        } else aux = true;
      }
      return aux;
    }
  },
  created: function() {
    this.mezclarArray();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memoria {
  display: grid;
}
.grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 1em;
  justify-self: center;
}

.item {
  border-style: solid;
  margin: 2px;
  width: 1em;
  cursor: pointer;
  font-size: xx-large;
}

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
